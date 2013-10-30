// Tâmia © 2013 Artem Sapegin http://sapegin.me
// Core helpers

/*global DEBUG:true*/
if (typeof DEBUG === 'undefined') DEBUG = true;

;(function ($) {
	'use strict';

	function _getContainers() {
		if (document.querySelectorAll) {
			return document.querySelectorAll('[data-component]');
		}
		else {
			return $('[data-component]');
		}
	}
	var _containersCache;
	var _delayedFuncs = {};


	/**
	 * Initialize components
	 * Invoke initComponents again to initialize components that was hidden before.
	 *
	 * @param {Object} [funcs] Initializers for each component:
	 *        {
	 *          pony: function(elem) { // $(elem) },
	 *          jquerypony: function(elem) { $(elem).pluginmethod({option1: 'val1', options2: 'val2'}); },
	 *          jquerypony: {pluginmethod: {option1: 'val1', options2: 'val2'}}
	 *        }
	 *
	 * <div data-component="pony"></div>
	 */
	function initComponents(funcs) {
		var containers = _containersCache || (_containersCache = _getContainers());

		// Call without arguments: try to initialize hidden components again
		if (!arguments.length) {
			var _found = false;
			for (var _func in _delayedFuncs) {
				_found = true;
				break;
			}
			if (!_found) return;
			funcs = {};
		}

		for (var containerIdx = 0, containerCnt = containers.length; containerIdx < containerCnt; containerIdx++) {
			var container = containers[containerIdx];
			var component = container.getAttribute('data-component');
			var func = funcs[component];
			if (func) {
				if (container.offsetWidth || container.offsetHeight) {
					if (typeof func === 'function') {
						func(container);
					}
					else {
						// Shortcut for jQuery plugins initialization
						for (var method in func) {
							$(container)[method](func[method]);
						}
					}
				}
				else {
					_delayInit(func, component, container);
				}
			}
			else if (_delayedFuncs[component]) {
				if (container.offsetWidth || container.offsetHeight) {
					_delayedFuncs[component]();
					delete _delayedFuncs[component];
				}
			}
		}
	}

	function _delayInit(func, component, elem) {
		_delayedFuncs[component] = function() {
			func(elem);
		};
	}


	/**
	 * Controls
	 *
	 * <span data-fire="slider-next" data-to=".portfolio" data-attrs="1,2,3">Next</span>
	 */
	$(document).click(function(e) {
		var target = e.target;
		if (target.parentNode && target.parentNode.getAttribute && target.parentNode.getAttribute('data-fire')) target = target.parentNode;
		if (target.getAttribute('data-fire') && target.getAttribute('data-to')) {
			target = $(target);
			var attrs = (''+target.data('attrs')).split(/[;, ]/);
			$(target.data('to')).trigger(target.data('fire'), attrs);
			e.preventDefault();
		}
	});

	/**
	 * Grid helper
	 * <div data-component="grid"></div>
	 */
	if (DEBUG) initComponents({
		grid: function(elem) {
			elem = $(elem);
			elem
				.addClass('g-row')
				.html(
					new Array((elem.data('columns') || 12) + 1).join('<b class="g-debug-col" style="height:'+document.documentElement.scrollHeight+'px"></b>')
				)
			;
		}
	});


	window.utils = {
		initComponents: initComponents
	};

}(jQuery));
