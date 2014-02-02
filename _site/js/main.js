/* Author: Artem Sapegin, http://sapegin.me, 2013 */

/*global utils:false */
;(function ($) {
  'use strict';

  utils.initComponents({
    'menu': {crazymenu: undefined},

    'sticky': {stalker: undefined},

    'work-gallery': function(elem) {
      function highlight(index) {
        var items = nav.find('.js-show');
        items.removeClass('is-active');
        items.eq(index).addClass('is-active');
      }

      function updateFotoramaSize() {
        var frame = fotorama.activeFrame.$stageFrame;

        if (frame.data('state')) {
          catchImage(fotorama, frame);
        } else {
          frame.on('f:load f:error', function() {
            if (fotorama.activeFrame.$stageFrame === frame) catchImage(fotorama, frame);
          });
        }
      }

      function catchImage (fotorama, frame) {
        var img = frame.find('.fotorama__img');
        var measures = img.data('measures');
        var containerWidth = gallery.width();
        measures.width = containerWidth;
        measures.height = containerWidth/measures.ratio;
        fotorama.resize(measures, 300);
      }

      var container = $(elem);
      var gallery = container.find('.js-gallery');
      var images = gallery.find('img');

      gallery.fotorama({
        nav: false,
        arrows: false,
        fit: false,
        'max-width': '100%',
        transition: 'crossfade'
      });

      var fotorama = gallery.data('fotorama');
      var nav = container.find('.js-nav');
      nav.append($('<ul class="work-gallery-nav">'));
      nav = nav.find('.work-gallery-nav');

      images.each(function(imageIdx, img) {
        var classes = ['work-gallery-nav__link', 'link', 'link_fake', 'js-show'];
        if (imageIdx === 0) classes.push('is-active');
        nav.append($('<li class="work-gallery-nav__item">')
          .append($('<span>', {
            'class': classes.join(' '),
            'data-index': imageIdx,
            'html': $(img).attr('alt')
          })
        ));
      });

      container.on('click', '.js-show', function(e) {
        var index = $(e.currentTarget).data('index');
        fotorama.show(index);
        highlight(index);
      });

      gallery.on('fotorama:show', function(index) {
        highlight(fotorama.activeIndex);
      });

      gallery.on('fotorama:showend', updateFotoramaSize);

      $(window).resize(updateFotoramaSize);
    }
  });

}(jQuery));
