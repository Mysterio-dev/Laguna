"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  "use strict";
  /**
   * Easy selector helper function
   */

  var select = function select(el) {
    var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    el = el.trim();

    if (all) {
      return _toConsumableArray(document.querySelectorAll(el));
    } else {
      return document.querySelector(el);
    }
  };
  /**
   * Easy event listener function
   */


  var on = function on(type, el, listener) {
    var all = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var selectEl = select(el, all);

    if (selectEl) {
      if (all) {
        selectEl.forEach(function (e) {
          return e.addEventListener(type, listener);
        });
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };
  /**
   * Easy on scroll event listener 
   */


  var onscroll = function onscroll(el, listener) {
    el.addEventListener('scroll', listener);
  };
  /**
   * Back to top button
   */


  var backtotop = select('.back-to-top');

  if (backtotop) {
    var toggleBacktotop = function toggleBacktotop() {
      if (window.scrollY > 100) {
        backtotop.classList.add('active');
      } else {
        backtotop.classList.remove('active');
      }
    };

    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  var slideMain = new Swiper(".slide-main", {
    navigation: {
      nextEl: ".next1",
      prevEl: ".prev1"
    }
  });
  var slideHome = new Swiper(".slide-home", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev"
    }
  });
  window.addEventListener('load', function () {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  });
  var preloader = select('#preloader');

  if (preloader) {
    window.addEventListener('load', function () {
      preloader.remove();
    });
  }

  $(document).ready(function () {
    // Headroom - show/hide navbar on scroll
    if ($('.headroom')[0]) {
      var headroom = new Headroom(document.querySelector("#header"), {
        offset: 0,
        tolerance: {
          up: 0,
          down: 0
        }
      });
      headroom.init();
    }
  });
  window.addEventListener('DOMContentLoaded', function () {
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
        center: [55.784202, 49.152480],
        zoom: 18,
        controls: ['smallMapDefaultSet']
      }, {});
      var myPlacemark = new ymaps.Placemark([55.784202, 49.152480], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/svg/geo-alt-fill.svg',
        iconImageSize: [50, 50]
      });
      myMap.geoObjects.add(myPlacemark);
    });
  });
  window.addEventListener('DOMContentLoaded', function () {
    new Cleave('#phone-mask-1', {
      numericOnly: true,
      blocks: [0, 3, 0, 3, 2, 2],
      delimiters: ["+7(", ")", " ", "-"]
    });
  });
})();
//# sourceMappingURL=main.js.map
