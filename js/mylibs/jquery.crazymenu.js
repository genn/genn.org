/**
 * Menu for Genn.org.
 *
 * @version 0.0.0
 * @requires jQuery
 * @author Artem Sapegin
 * @copyright 2013 Artem Sapegin, http://sapegin.me
 * @license Private
 */

/*jshint browser:true, jquery:true, white:false, smarttabs:true, eqeqeq:true,
         immed:true, latedef:false, newcap:true, undef:true */
/*global define:false*/
(function(factory) {  // Try to register as an anonymous AMD module
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		factory(jQuery);
	}
}(function($) {
	'use strict';

	var _window = $(window);

	$.fn.crazymenu = function(options) {
		options = $.extend({}, $.fn.crazymenu.defaults, options);

		return this.each(function() {
			new Crazymenu($(this), options);
		});
	};

	$.fn.crazymenu.defaults = {
		minWidth: 1000
	};

	function Crazymenu(container, options) {
		this.container = container;
		this.options = options;
		this.inited = false;
		this.isIndex = container.data('index') === 'yes';

		$(document).on('click', '.js-prev', function() {
			go('prev');
			return false;
		});
		$(document).on('click', '.js-next', function() {
			go('next');
			return false;
		});

		_window.resize(this.resize.bind(this));

		if (Modernizr.touch || screen.width <= this.options.minWidth) return;

		setTimeout(function() {
			this.init();
		}.bind(this), 0);
	}

	Crazymenu.prototype = {
		init: function() {
			this.inited = true;

			// Current item
			var m = this.container[0].className.match(/nav_active_(\w+)/);
			this.activeItem = m && m[1];

			this.rowPositions = {};

			this.itemOffsets = {};
			var items = {};
			var itemElems = this.container.find('.nav__item');
			itemElems.each(function(idx, elem) {
				var item = $(elem);
				var itemId = item.data('id');
				var textElem = item.find('.nav__item__text');
				items[itemId] = $.trim(textElem.text());
				this.itemOffsets[itemId] = textElem.position().left;
				item.on('mouseenter.crazymenu', this.mouseenter.bind(this));
				item.on('mouseleave.crazymenu', this.mouseleave.bind(this));
			}.bind(this));

			var maxShift = Math.round(this.container.width() / 2);

			this.rows = {};
			var rowIdx = 1;
			for (var itemId in items) {
				var html = '<div class="nav__row-i">' + randomString(30);
				for (var innerItemId in items) {
					html += '<span class="nav__inner nav__inner_' + innerItemId + '">' + items[innerItemId] + '</span>' +
						randomString(30);
				}
				html += '</div>';
				var row = $('<div>', {html: html, 'class': 'nav__row nav__row_' + rowIdx});
				this.container.append(row);
				this.rows[rowIdx] = row;
				if (!this.activeItem) this.moveRow(rowIdx, random(maxShift));

				rowIdx++;
			}

			if (this.isIndex) {
				$(document).mousemove(this.mousemove.bind(this));
			}

			setTimeout(function() {
				this.resize();
			}.bind(this), 0);
		},

		resize: function() {
			this.container.removeClass('nav_loaded');
			if (_window.width() > this.options.minWidth) {
				if (!this.inited) this.init();

				var itemElems = this.container.find('.nav__item');
				itemElems.each(function(idx, elem) {
					var item = $(elem);
					var itemId = item.data('id');
					var textElem = item.find('.nav__item__text');
					this.itemOffsets[itemId] = textElem.position().left;
				}.bind(this));

				this.container.addClass('nav_loaded');

				if (this.activeItem) {
					this.move(this.activeItem);
				}
			}
			else {
				// @hack Trigger vw/vh recalculation
				$('.nav__item').css('z-index', 1);
			}
		},

		move: function(itemId) {
			var offset = this.itemOffsets[itemId];
			for (var rowIdx in this.rows) {
				var row = this.rows[rowIdx];
				var title = row.find('.nav__inner_' + itemId);
				var left = title.position().left - offset;
				this.moveRow(rowIdx, left);
			}
		},

		moveRow: function(rowIdx, position) {
			var row = this.rows[rowIdx];
			row.css('margin-left', -position);
			this.rowPositions[rowIdx] = position;
		},

		setActiveItemClass: function(itemId, hover) {
			this.activeItem = itemId;
			this.container[0].className = this.container[0].className.replace(/\s+nav_(?:hover|active)_\w+/g, '');
			this.container.addClass('nav_' + (hover ? 'hover' : 'active') + '_' + (itemId || 'none'));
		},

		mouseenter: function(e) {
			var itemId = $(e.currentTarget).data('id');

			this.previousRowPositions = $.extend({}, this.rowPositions);

			this.previousActiveItem = this.activeItem;
			this.setActiveItemClass(itemId, true);
			this.move(itemId);
		},

		mouseleave: function(e) {
			for (var rowIdx in this.rows) {
				var row = this.rows[rowIdx];
				this.moveRow(rowIdx, this.previousRowPositions[rowIdx]);
			}
			this.setActiveItemClass(this.previousActiveItem);
			this.previousRowPositions = null;
		},

		mousemove: function(e) {
			if (this.previousRowPositions) return;
			this.moveRow(1, e.pageX*1.5);
			this.moveRow(2, screen.width-e.pageX);
			this.moveRow(3, e.pageX*0.5);
		}
	};

	function random(max) {
		return Math.round(Math.random() * (max - 1));
	}

	function randomString(chars) {
		var alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM12345678';
		var maxChar = alphabet.length;
		var string = '';
		for (var charIdx = 0; charIdx < chars; charIdx++) {
			string += alphabet[random(maxChar)];
		}
		return string;
	}

	function go(name) {
		var link = $('link[rel="' + name + '"]');
		if (link.length) location.href = link.attr('href');
	}

}));
