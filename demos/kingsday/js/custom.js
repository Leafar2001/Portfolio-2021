/* Smooth Link Scrolling */
$('.smooth-scroll').click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1200);
    return false;
});
/* Nav */
(function($, window, document) {

  var pluginName = 'fatNav',
    defaults = {};

  function Plugin(options) {
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  $.extend(Plugin.prototype, {

    init: function() {

      var self = this;
      var $nav = this.$nav = $('.fat-nav');
      var $hamburger = this.$hamburger = $('<a href="javascript:void(0)" class="hamburger"><div class="hamburger__icon"></div></a>');

      this._bodyOverflow = $('body').css('overflow');

      // Hack to prevent mobile safari scrolling the whole body when nav is open
      if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {

        $nav.children().css({
          'height': '110%',
          'transform': 'translateY(-5%)'
        });

      }

      $('body').append($hamburger);

      $().add($hamburger).add($nav.find('a')).on('click', function(e) {
        self.toggleNav();
      });

    },

    toggleNav: function() {

      var self = this;

      this.$nav.fadeToggle(400);

      self.toggleBodyOverflow();

      $().add(this.$hamburger).add(this.$nav).toggleClass('active');
    },

    toggleBodyOverflow: function() {

      var self = this;

      var $body = $('body');

      $body.toggleClass('no-scroll');

      var isNavOpen = $body.hasClass('no-scroll');

      $body.css('overflow', isNavOpen ? 'hidden' : self._bodyOverflow);

    }

  });

  if (typeof $[pluginName] === 'undefined') {

    $[pluginName] = function(options) {
      return new Plugin(this, options);
    };

  }

}(jQuery, window, document));
/**
 * $.disablescroll
 * Author: Josh Harrison - aloofdesign.com
 *
 * Disables scroll events from mousewheels, touchmoves and keypresses.
 * Use while jQuery is animating the scroll position for a guaranteed super-smooth ride!
 */
(function(e) {
  "use strict";

  function r(t, n) {
    this.opts = e.extend({
      handleKeys: !0,
      scrollEventKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40]
    }, n);
    this.$container = t;
    this.$document = e(document);
    this.lockToScrollPos = [0, 0];
    this.disable()
  }
  var t, n;
  n = r.prototype;
  n.disable = function() {
    var e = this;
    e.lockToScrollPos = [e.$container.scrollLeft(), e.$container.scrollTop()];
    e.$container.on("mousewheel.disablescroll DOMMouseScroll.disablescroll touchmove.disablescroll", e._handleWheel);
    e.$container.on("scroll.disablescroll", function() {
      e._handleScrollbar.call(e)
    });
    e.opts.handleKeys && e.$document.on("keydown.disablescroll", function(t) {
      e._handleKeydown.call(e, t)
    })
  };
  n.undo = function() {
    var e = this;
    e.$container.off(".disablescroll");
    e.opts.handleKeys && e.$document.off(".disablescroll")
  };
  n._handleWheel = function(e) {
    e.preventDefault()
  };
  n._handleScrollbar = function() {
    this.$container.scrollLeft(this.lockToScrollPos[0]);
    this.$container.scrollTop(this.lockToScrollPos[1])
  };
  n._handleKeydown = function(e) {
    for (var t = 0; t < this.opts.scrollEventKeys.length; t++)
      if (e.keyCode === this.opts.scrollEventKeys[t]) {
        e.preventDefault();
        return
      }
  };
  e.fn.disablescroll = function(e) {
    !t && (typeof e == "object" || !e) ? t = new r(this, e) : t && t[e] && t[e].call(t)
  };
  window.UserScrollDisabler = r
})(jQuery);


var $nonScrollable = $("#no-scroll")

$nonScrollable.disablescroll();

$(".hamburger").on("click", function() {
  $nonScrollable.disablescroll("undo");
});
