/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _app = __webpack_require__(1);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	__webpack_require__(3);

	var app = new _app2.default();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _animejs = __webpack_require__(2);

	var _animejs2 = _interopRequireDefault(_animejs);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var WebApp = function () {
	  function WebApp() {
	    var _this = this;

	    _classCallCheck(this, WebApp);

	    var style = WebApp.getComputedStyle(document.querySelector('html'));
	    var retina = window.devicePixelRatio > 1;
	    var mobile = parseInt(style.getPropertyValue('width'), 10) < 768;
	    this.posts = window.posts;

	    var numTotal = window.posts.length;
	    var numLoaded = 0;

	    var onLoad = function onLoad() {
	      numLoaded++;
	      if (numLoaded === numTotal) {
	        setTimeout(_this.ready, 200);
	      }
	    };

	    for (var i = 0; i < numTotal; i++) {
	      var img = new Image();
	      var filename = void 0;

	      img.onload = onLoad;

	      if (mobile && !retina) {
	        filename = this.posts[i].image + '-md_small.jpg';
	      } else {
	        filename = this.posts[i].image + '_small.jpg';
	      }

	      img.src = './img/home/' + filename;
	    }
	  }

	  _createClass(WebApp, [{
	    key: 'ready',
	    value: function ready() {
	      (0, _animejs2.default)({
	        targets: '.pre.hide',
	        begin: function begin(animation) {
	          return animation.animatables[0].target.classList.remove('hide');
	        },
	        opacity: [0, 1],
	        duration: 1500
	      });

	      (0, _animejs2.default)({
	        targets: '.sidebar',
	        begin: function begin(animation) {
	          return animation.animatables[0].target.classList.remove('hide');
	        },
	        translateX: {
	          value: [-400, 0]
	        },
	        duration: 1500,
	        easing: 'easeInOutExpo'
	      });

	      for (var i = 0; i < this.posts.length; i++) {
	        var pId = this.posts[i].id;
	        var li = document.querySelector('li#image--' + pId);
	        li.classList.remove('hide');
	      }

	      (0, _animejs2.default)({
	        targets: '.posts li:nth-child(-n+4)',
	        translateY: [400, 0],
	        opacity: [0, 1],
	        duration: 1500,
	        easing: 'easeInOutExpo',
	        delay: function delay(el, index) {
	          return 250 * index;
	        }
	      });
	    }
	  }], [{
	    key: 'getComputedStyle',
	    value: function getComputedStyle(elem) {
	      if (elem.ownerDocument.defaultView.opener) {
	        return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
	      }
	      return window.getComputedStyle(elem, null);
	    }
	  }]);

	  return WebApp;
	}();

	exports.default = WebApp;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Anime v1.1.0
	 * http://anime-js.com
	 * JavaScript animation engine
	 * Copyright (c) 2016 Julian Garnier
	 * http://juliangarnier.com
	 * Released under the MIT license
	 */

	(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof module === 'object' && module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.anime = factory();
	  }
	})(this, function () {

	  var version = '1.1.0';

	  // Defaults

	  var defaultSettings = {
	    duration: 1000,
	    delay: 0,
	    loop: false,
	    autoplay: true,
	    direction: 'normal',
	    easing: 'easeOutElastic',
	    elasticity: 400,
	    round: false,
	    begin: undefined,
	    update: undefined,
	    complete: undefined
	  };

	  // Transforms

	  var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skewX', 'skewY'];
	  var transform,
	      transformStr = 'transform';

	  // Utils

	  var is = function () {
	    return {
	      array: function (a) {
	        return Array.isArray(a);
	      },
	      object: function (a) {
	        return Object.prototype.toString.call(a).indexOf('Object') > -1;
	      },
	      svg: function (a) {
	        return a instanceof SVGElement;
	      },
	      dom: function (a) {
	        return a.nodeType || is.svg(a);
	      },
	      number: function (a) {
	        return !isNaN(parseInt(a));
	      },
	      string: function (a) {
	        return typeof a === 'string';
	      },
	      func: function (a) {
	        return typeof a === 'function';
	      },
	      undef: function (a) {
	        return typeof a === 'undefined';
	      },
	      null: function (a) {
	        return typeof a === 'null';
	      },
	      hex: function (a) {
	        return (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
	        );
	      },
	      rgb: function (a) {
	        return (/^rgb/.test(a)
	        );
	      },
	      rgba: function (a) {
	        return (/^rgba/.test(a)
	        );
	      },
	      hsl: function (a) {
	        return (/^hsl/.test(a)
	        );
	      },
	      color: function (a) {
	        return is.hex(a) || is.rgb(a) || is.rgba(a) || is.hsl(a);
	      }
	    };
	  }();

	  // Easings functions adapted from http://jqueryui.com/

	  var easings = function () {
	    var eases = {};
	    var names = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];
	    var functions = {
	      Sine: function (t) {
	        return 1 - Math.cos(t * Math.PI / 2);
	      },
	      Circ: function (t) {
	        return 1 - Math.sqrt(1 - t * t);
	      },
	      Elastic: function (t, m) {
	        if (t === 0 || t === 1) return t;
	        var p = 1 - Math.min(m, 998) / 1000,
	            st = t / 1,
	            st1 = st - 1,
	            s = p / (2 * Math.PI) * Math.asin(1);
	        return -(Math.pow(2, 10 * st1) * Math.sin((st1 - s) * (2 * Math.PI) / p));
	      },
	      Back: function (t) {
	        return t * t * (3 * t - 2);
	      },
	      Bounce: function (t) {
	        var pow2,
	            bounce = 4;
	        while (t < ((pow2 = Math.pow(2, --bounce)) - 1) / 11) {}
	        return 1 / Math.pow(4, 3 - bounce) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2);
	      }
	    };
	    names.forEach(function (name, i) {
	      functions[name] = function (t) {
	        return Math.pow(t, i + 2);
	      };
	    });
	    Object.keys(functions).forEach(function (name) {
	      var easeIn = functions[name];
	      eases['easeIn' + name] = easeIn;
	      eases['easeOut' + name] = function (t, m) {
	        return 1 - easeIn(1 - t, m);
	      };
	      eases['easeInOut' + name] = function (t, m) {
	        return t < 0.5 ? easeIn(t * 2, m) / 2 : 1 - easeIn(t * -2 + 2, m) / 2;
	      };
	    });
	    eases.linear = function (t) {
	      return t;
	    };
	    return eases;
	  }();

	  // Strings

	  var numberToString = function (val) {
	    return is.string(val) ? val : val + '';
	  };

	  var stringToHyphens = function (str) {
	    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	  };

	  var selectString = function (str) {
	    if (is.color(str)) return false;
	    try {
	      var nodes = document.querySelectorAll(str);
	      return nodes;
	    } catch (e) {
	      return false;
	    }
	  };

	  // Numbers

	  var random = function (min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	  };

	  // Arrays

	  var flattenArray = function (arr) {
	    return arr.reduce(function (a, b) {
	      return a.concat(is.array(b) ? flattenArray(b) : b);
	    }, []);
	  };

	  var toArray = function (o) {
	    if (is.array(o)) return o;
	    if (is.string(o)) o = selectString(o) || o;
	    if (o instanceof NodeList || o instanceof HTMLCollection) return [].slice.call(o);
	    return [o];
	  };

	  var arrayContains = function (arr, val) {
	    return arr.some(function (a) {
	      return a === val;
	    });
	  };

	  var groupArrayByProps = function (arr, propsArr) {
	    var groups = {};
	    arr.forEach(function (o) {
	      var group = JSON.stringify(propsArr.map(function (p) {
	        return o[p];
	      }));
	      groups[group] = groups[group] || [];
	      groups[group].push(o);
	    });
	    return Object.keys(groups).map(function (group) {
	      return groups[group];
	    });
	  };

	  var removeArrayDuplicates = function (arr) {
	    return arr.filter(function (item, pos, self) {
	      return self.indexOf(item) === pos;
	    });
	  };

	  // Objects

	  var cloneObject = function (o) {
	    var newObject = {};
	    for (var p in o) newObject[p] = o[p];
	    return newObject;
	  };

	  var mergeObjects = function (o1, o2) {
	    for (var p in o2) o1[p] = !is.undef(o1[p]) ? o1[p] : o2[p];
	    return o1;
	  };

	  // Colors

	  var hexToRgb = function (hex) {
	    var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	    var hex = hex.replace(rgx, function (m, r, g, b) {
	      return r + r + g + g + b + b;
	    });
	    var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	    var r = parseInt(rgb[1], 16);
	    var g = parseInt(rgb[2], 16);
	    var b = parseInt(rgb[3], 16);
	    return 'rgb(' + r + ',' + g + ',' + b + ')';
	  };

	  var hslToRgb = function (hsl) {
	    var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hsl);
	    var h = parseInt(hsl[1]) / 360;
	    var s = parseInt(hsl[2]) / 100;
	    var l = parseInt(hsl[3]) / 100;
	    var hue2rgb = function (p, q, t) {
	      if (t < 0) t += 1;
	      if (t > 1) t -= 1;
	      if (t < 1 / 6) return p + (q - p) * 6 * t;
	      if (t < 1 / 2) return q;
	      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	      return p;
	    };
	    var r, g, b;
	    if (s == 0) {
	      r = g = b = l;
	    } else {
	      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	      var p = 2 * l - q;
	      r = hue2rgb(p, q, h + 1 / 3);
	      g = hue2rgb(p, q, h);
	      b = hue2rgb(p, q, h - 1 / 3);
	    }
	    return 'rgb(' + r * 255 + ',' + g * 255 + ',' + b * 255 + ')';
	  };

	  var colorToRgb = function (val) {
	    if (is.rgb(val) || is.rgba(val)) return val;
	    if (is.hex(val)) return hexToRgb(val);
	    if (is.hsl(val)) return hslToRgb(val);
	  };

	  // Units

	  var getUnit = function (val) {
	    return (/([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(val)[2]
	    );
	  };

	  var addDefaultTransformUnit = function (prop, val, intialVal) {
	    if (getUnit(val)) return val;
	    if (prop.indexOf('translate') > -1) return getUnit(intialVal) ? val + getUnit(intialVal) : val + 'px';
	    if (prop.indexOf('rotate') > -1 || prop.indexOf('skew') > -1) return val + 'deg';
	    return val;
	  };

	  // Values

	  var getCSSValue = function (el, prop) {
	    // First check if prop is a valid CSS property
	    if (prop in el.style) {
	      // Then return the property value or fallback to '0' when getPropertyValue fails
	      return getComputedStyle(el).getPropertyValue(stringToHyphens(prop)) || '0';
	    }
	  };

	  var getTransformValue = function (el, prop) {
	    var defaultVal = prop.indexOf('scale') > -1 ? 1 : 0;
	    var str = el.style.transform;
	    if (!str) return defaultVal;
	    var rgx = /(\w+)\((.+?)\)/g;
	    var match = [];
	    var props = [];
	    var values = [];
	    while (match = rgx.exec(str)) {
	      props.push(match[1]);
	      values.push(match[2]);
	    }
	    var val = values.filter(function (f, i) {
	      return props[i] === prop;
	    });
	    return val.length ? val[0] : defaultVal;
	  };

	  var getAnimationType = function (el, prop) {
	    if (is.dom(el) && arrayContains(validTransforms, prop)) return 'transform';
	    if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) return 'css';
	    if (is.dom(el) && (el.getAttribute(prop) || is.svg(el) && el[prop])) return 'attribute';
	    if (!is.null(el[prop]) && !is.undef(el[prop])) return 'object';
	  };

	  var getInitialTargetValue = function (target, prop) {
	    switch (getAnimationType(target, prop)) {
	      case 'transform':
	        return getTransformValue(target, prop);
	      case 'css':
	        return getCSSValue(target, prop);
	      case 'attribute':
	        return target.getAttribute(prop);
	    }
	    return target[prop] || 0;
	  };

	  var getValidValue = function (values, val, originalCSS) {
	    if (is.color(val)) return colorToRgb(val);
	    if (getUnit(val)) return val;
	    var unit = getUnit(values.to) ? getUnit(values.to) : getUnit(values.from);
	    if (!unit && originalCSS) unit = getUnit(originalCSS);
	    return unit ? val + unit : val;
	  };

	  var decomposeValue = function (val) {
	    var rgx = /-?\d*\.?\d+/g;
	    return {
	      original: val,
	      numbers: numberToString(val).match(rgx) ? numberToString(val).match(rgx).map(Number) : [0],
	      strings: numberToString(val).split(rgx)
	    };
	  };

	  var recomposeValue = function (numbers, strings, initialStrings) {
	    return strings.reduce(function (a, b, i) {
	      var b = b ? b : initialStrings[i - 1];
	      return a + numbers[i - 1] + b;
	    });
	  };

	  // Animatables

	  var getAnimatables = function (targets) {
	    var targets = targets ? flattenArray(is.array(targets) ? targets.map(toArray) : toArray(targets)) : [];
	    return targets.map(function (t, i) {
	      return { target: t, id: i };
	    });
	  };

	  // Properties

	  var getProperties = function (params, settings) {
	    var props = [];
	    for (var p in params) {
	      if (!defaultSettings.hasOwnProperty(p) && p !== 'targets') {
	        var prop = is.object(params[p]) ? cloneObject(params[p]) : { value: params[p] };
	        prop.name = p;
	        props.push(mergeObjects(prop, settings));
	      }
	    }
	    return props;
	  };

	  var getPropertiesValues = function (target, prop, value, i) {
	    var values = toArray(is.func(value) ? value(target, i) : value);
	    return {
	      from: values.length > 1 ? values[0] : getInitialTargetValue(target, prop),
	      to: values.length > 1 ? values[1] : values[0]
	    };
	  };

	  // Tweens

	  var getTweenValues = function (prop, values, type, target) {
	    var valid = {};
	    if (type === 'transform') {
	      valid.from = prop + '(' + addDefaultTransformUnit(prop, values.from, values.to) + ')';
	      valid.to = prop + '(' + addDefaultTransformUnit(prop, values.to) + ')';
	    } else {
	      var originalCSS = type === 'css' ? getCSSValue(target, prop) : undefined;
	      valid.from = getValidValue(values, values.from, originalCSS);
	      valid.to = getValidValue(values, values.to, originalCSS);
	    }
	    return { from: decomposeValue(valid.from), to: decomposeValue(valid.to) };
	  };

	  var getTweensProps = function (animatables, props) {
	    var tweensProps = [];
	    animatables.forEach(function (animatable, i) {
	      var target = animatable.target;
	      return props.forEach(function (prop) {
	        var animType = getAnimationType(target, prop.name);
	        if (animType) {
	          var values = getPropertiesValues(target, prop.name, prop.value, i);
	          var tween = cloneObject(prop);
	          tween.animatables = animatable;
	          tween.type = animType;
	          tween.from = getTweenValues(prop.name, values, tween.type, target).from;
	          tween.to = getTweenValues(prop.name, values, tween.type, target).to;
	          tween.round = is.color(values.from) || tween.round ? 1 : 0;
	          tween.delay = (is.func(tween.delay) ? tween.delay(target, i, animatables.length) : tween.delay) / animation.speed;
	          tween.duration = (is.func(tween.duration) ? tween.duration(target, i, animatables.length) : tween.duration) / animation.speed;
	          tweensProps.push(tween);
	        }
	      });
	    });
	    return tweensProps;
	  };

	  var getTweens = function (animatables, props) {
	    var tweensProps = getTweensProps(animatables, props);
	    var splittedProps = groupArrayByProps(tweensProps, ['name', 'from', 'to', 'delay', 'duration']);
	    return splittedProps.map(function (tweenProps) {
	      var tween = cloneObject(tweenProps[0]);
	      tween.animatables = tweenProps.map(function (p) {
	        return p.animatables;
	      });
	      tween.totalDuration = tween.delay + tween.duration;
	      return tween;
	    });
	  };

	  var reverseTweens = function (anim, delays) {
	    anim.tweens.forEach(function (tween) {
	      var toVal = tween.to;
	      var fromVal = tween.from;
	      var delayVal = anim.duration - (tween.delay + tween.duration);
	      tween.from = toVal;
	      tween.to = fromVal;
	      if (delays) tween.delay = delayVal;
	    });
	    anim.reversed = anim.reversed ? false : true;
	  };

	  var getTweensDuration = function (tweens) {
	    if (tweens.length) return Math.max.apply(Math, tweens.map(function (tween) {
	      return tween.totalDuration;
	    }));
	  };

	  // will-change

	  var getWillChange = function (anim) {
	    var props = [];
	    var els = [];
	    anim.tweens.forEach(function (tween) {
	      if (tween.type === 'css' || tween.type === 'transform') {
	        props.push(tween.type === 'css' ? stringToHyphens(tween.name) : 'transform');
	        tween.animatables.forEach(function (animatable) {
	          els.push(animatable.target);
	        });
	      }
	    });
	    return {
	      properties: removeArrayDuplicates(props).join(', '),
	      elements: removeArrayDuplicates(els)
	    };
	  };

	  var setWillChange = function (anim) {
	    var willChange = getWillChange(anim);
	    willChange.elements.forEach(function (element) {
	      element.style.willChange = willChange.properties;
	    });
	  };

	  var removeWillChange = function (anim) {
	    var willChange = getWillChange(anim);
	    willChange.elements.forEach(function (element) {
	      element.style.removeProperty('will-change');
	    });
	  };

	  /* Svg path */

	  var getPathProps = function (path) {
	    var el = is.string(path) ? selectString(path)[0] : path;
	    return {
	      path: el,
	      value: el.getTotalLength()
	    };
	  };

	  var snapProgressToPath = function (tween, progress) {
	    var pathEl = tween.path;
	    var pathProgress = tween.value * progress;
	    var point = function (offset) {
	      var o = offset || 0;
	      var p = progress > 1 ? tween.value + o : pathProgress + o;
	      return pathEl.getPointAtLength(p);
	    };
	    var p = point();
	    var p0 = point(-1);
	    var p1 = point(+1);
	    switch (tween.name) {
	      case 'translateX':
	        return p.x;
	      case 'translateY':
	        return p.y;
	      case 'rotate':
	        return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
	    }
	  };

	  // Progress

	  var getTweenProgress = function (tween, time) {
	    var elapsed = Math.min(Math.max(time - tween.delay, 0), tween.duration);
	    var percent = elapsed / tween.duration;
	    var progress = tween.to.numbers.map(function (number, p) {
	      var start = tween.from.numbers[p];
	      var eased = easings[tween.easing](percent, tween.elasticity);
	      var val = tween.path ? snapProgressToPath(tween, eased) : start + eased * (number - start);
	      val = tween.round ? Math.round(val * tween.round) / tween.round : val;
	      return val;
	    });
	    return recomposeValue(progress, tween.to.strings, tween.from.strings);
	  };

	  var setAnimationProgress = function (anim, time) {
	    var transforms;
	    anim.currentTime = time;
	    anim.progress = time / anim.duration * 100;
	    for (var t = 0; t < anim.tweens.length; t++) {
	      var tween = anim.tweens[t];
	      tween.currentValue = getTweenProgress(tween, time);
	      var progress = tween.currentValue;
	      for (var a = 0; a < tween.animatables.length; a++) {
	        var animatable = tween.animatables[a];
	        var id = animatable.id;
	        var target = animatable.target;
	        var name = tween.name;
	        switch (tween.type) {
	          case 'css':
	            target.style[name] = progress;break;
	          case 'attribute':
	            target.setAttribute(name, progress);break;
	          case 'object':
	            target[name] = progress;break;
	          case 'transform':
	            if (!transforms) transforms = {};
	            if (!transforms[id]) transforms[id] = [];
	            transforms[id].push(progress);
	            break;
	        }
	      }
	    }
	    if (transforms) {
	      if (!transform) transform = (getCSSValue(document.body, transformStr) ? '' : '-webkit-') + transformStr;
	      for (var t in transforms) {
	        anim.animatables[t].target.style[transform] = transforms[t].join(' ');
	      }
	    }
	    if (anim.settings.update) anim.settings.update(anim);
	  };

	  // Animation

	  var createAnimation = function (params) {
	    var anim = {};
	    anim.animatables = getAnimatables(params.targets);
	    anim.settings = mergeObjects(params, defaultSettings);
	    anim.properties = getProperties(params, anim.settings);
	    anim.tweens = getTweens(anim.animatables, anim.properties);
	    anim.duration = getTweensDuration(anim.tweens) || params.duration;
	    anim.currentTime = 0;
	    anim.progress = 0;
	    anim.ended = false;
	    return anim;
	  };

	  // Public

	  var animations = [];
	  var raf = 0;

	  var engine = function () {
	    var play = function () {
	      raf = requestAnimationFrame(step);
	    };
	    var step = function (t) {
	      if (animations.length) {
	        for (var i = 0; i < animations.length; i++) animations[i].tick(t);
	        play();
	      } else {
	        cancelAnimationFrame(raf);
	        raf = 0;
	      }
	    };
	    return play;
	  }();

	  var animation = function (params) {

	    var anim = createAnimation(params);
	    var time = {};

	    anim.tick = function (now) {
	      anim.ended = false;
	      if (!time.start) time.start = now;
	      time.current = Math.min(Math.max(time.last + now - time.start, 0), anim.duration);
	      setAnimationProgress(anim, time.current);
	      var s = anim.settings;
	      if (s.begin && time.current >= s.delay) {
	        s.begin(anim);s.begin = undefined;
	      };
	      if (time.current >= anim.duration) {
	        if (s.loop) {
	          time.start = now;
	          if (s.direction === 'alternate') reverseTweens(anim, true);
	          if (is.number(s.loop)) s.loop--;
	        } else {
	          anim.ended = true;
	          anim.pause();
	          if (s.complete) s.complete(anim);
	        }
	        time.last = 0;
	      }
	    };

	    anim.seek = function (progress) {
	      setAnimationProgress(anim, progress / 100 * anim.duration);
	    };

	    anim.pause = function () {
	      removeWillChange(anim);
	      var i = animations.indexOf(anim);
	      if (i > -1) animations.splice(i, 1);
	    };

	    anim.play = function (params) {
	      anim.pause();
	      if (params) anim = mergeObjects(createAnimation(mergeObjects(params, anim.settings)), anim);
	      time.start = 0;
	      time.last = anim.ended ? 0 : anim.currentTime;
	      var s = anim.settings;
	      if (s.direction === 'reverse') reverseTweens(anim);
	      if (s.direction === 'alternate' && !s.loop) s.loop = 1;
	      setWillChange(anim);
	      animations.push(anim);
	      if (!raf) engine();
	    };

	    anim.restart = function () {
	      if (anim.reversed) reverseTweens(anim);
	      anim.pause();
	      anim.seek(0);
	      anim.play();
	    };

	    if (anim.settings.autoplay) anim.play();

	    return anim;
	  };

	  // Remove one or multiple targets from all active animations.

	  var remove = function (elements) {
	    var targets = flattenArray(is.array(elements) ? elements.map(toArray) : toArray(elements));
	    for (var i = animations.length - 1; i >= 0; i--) {
	      var animation = animations[i];
	      var tweens = animation.tweens;
	      for (var t = tweens.length - 1; t >= 0; t--) {
	        var animatables = tweens[t].animatables;
	        for (var a = animatables.length - 1; a >= 0; a--) {
	          if (arrayContains(targets, animatables[a].target)) {
	            animatables.splice(a, 1);
	            if (!animatables.length) tweens.splice(t, 1);
	            if (!tweens.length) animation.pause();
	          }
	        }
	      }
	    }
	  };

	  animation.version = version;
	  animation.speed = 1;
	  animation.list = animations;
	  animation.remove = remove;
	  animation.easings = easings;
	  animation.getValue = getInitialTargetValue;
	  animation.path = getPathProps;
	  animation.random = random;

	  return animation;
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./all.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./all.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 100;\n  src: local('Roboto Thin'), local('Roboto-Thin'), url(//fonts.gstatic.com/s/roboto/v14/ty9dfvLAziwdqQ2dHoyjphkAz4rYn47Zy2rvigWQf6w.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 100;\n  src: local('Roboto Thin'), local('Roboto-Thin'), url(//fonts.gstatic.com/s/roboto/v14/frNV30OaYdlFRtH2VnZZdhkAz4rYn47Zy2rvigWQf6w.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 100;\n  src: local('Roboto Thin'), local('Roboto-Thin'), url(//fonts.gstatic.com/s/roboto/v14/gwVJDERN2Amz39wrSoZ7FxkAz4rYn47Zy2rvigWQf6w.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 100;\n  src: local('Roboto Thin'), local('Roboto-Thin'), url(//fonts.gstatic.com/s/roboto/v14/aZMswpodYeVhtRvuABJWvBkAz4rYn47Zy2rvigWQf6w.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 100;\n  src: local('Roboto Thin'), local('Roboto-Thin'), url(//fonts.gstatic.com/s/roboto/v14/VvXUGKZXbHtX_S_VCTLpGhkAz4rYn47Zy2rvigWQf6w.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+1EA0-1EF1, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 100;\n  src: local('Roboto Thin'), local('Roboto-Thin'), url(//fonts.gstatic.com/s/roboto/v14/e7MeVAyvogMqFwwl61PKhBkAz4rYn47Zy2rvigWQf6w.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 100;\n  src: local('Roboto Thin'), local('Roboto-Thin'), url(//fonts.gstatic.com/s/roboto/v14/2tsd397wLxj96qwHyNIkxBkAz4rYn47Zy2rvigWQf6w.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Roboto Light'), local('Roboto-Light'), url(//fonts.gstatic.com/s/roboto/v14/0eC6fl06luXEYWpBSJvXCIX0hVgzZQUfRDuZrPvH3D8.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Roboto Light'), local('Roboto-Light'), url(//fonts.gstatic.com/s/roboto/v14/Fl4y0QdOxyyTHEGMXX8kcYX0hVgzZQUfRDuZrPvH3D8.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Roboto Light'), local('Roboto-Light'), url(//fonts.gstatic.com/s/roboto/v14/-L14Jk06m6pUHB-5mXQQnYX0hVgzZQUfRDuZrPvH3D8.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Roboto Light'), local('Roboto-Light'), url(//fonts.gstatic.com/s/roboto/v14/I3S1wsgSg9YCurV6PUkTOYX0hVgzZQUfRDuZrPvH3D8.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Roboto Light'), local('Roboto-Light'), url(//fonts.gstatic.com/s/roboto/v14/NYDWBdD4gIq26G5XYbHsFIX0hVgzZQUfRDuZrPvH3D8.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+1EA0-1EF1, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Roboto Light'), local('Roboto-Light'), url(//fonts.gstatic.com/s/roboto/v14/Pru33qjShpZSmG3z6VYwnYX0hVgzZQUfRDuZrPvH3D8.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 300;\n  src: local('Roboto Light'), local('Roboto-Light'), url(//fonts.gstatic.com/s/roboto/v14/Hgo13k-tfSpn0qi1SFdUfYX0hVgzZQUfRDuZrPvH3D8.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Regular'), local('Roboto-Regular'), url(//fonts.gstatic.com/s/roboto/v14/sTdaA6j0Psb920Vjv-mrzH-_kf6ByYO6CLYdB4HQE-Y.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Regular'), local('Roboto-Regular'), url(//fonts.gstatic.com/s/roboto/v14/uYECMKoHcO9x1wdmbyHIm3-_kf6ByYO6CLYdB4HQE-Y.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Regular'), local('Roboto-Regular'), url(//fonts.gstatic.com/s/roboto/v14/tnj4SB6DNbdaQnsM8CFqBX-_kf6ByYO6CLYdB4HQE-Y.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Regular'), local('Roboto-Regular'), url(//fonts.gstatic.com/s/roboto/v14/_VYFx-s824kXq_Ul2BHqYH-_kf6ByYO6CLYdB4HQE-Y.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Regular'), local('Roboto-Regular'), url(//fonts.gstatic.com/s/roboto/v14/NJ4vxlgWwWbEsv18dAhqnn-_kf6ByYO6CLYdB4HQE-Y.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+1EA0-1EF1, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Regular'), local('Roboto-Regular'), url(//fonts.gstatic.com/s/roboto/v14/Ks_cVxiCiwUWVsFWFA3Bjn-_kf6ByYO6CLYdB4HQE-Y.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Roboto Regular'), local('Roboto-Regular'), url(//fonts.gstatic.com/s/roboto/v14/oMMgfZMQthOryQo9n22dcn-_kf6ByYO6CLYdB4HQE-Y.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n* {\n  color: #777;\n  font-family: 'Roboto', Helvetica, Arial, sans-serif !important;\n}\n\n.noselect {\n  cursor: default;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none;   /* Chrome/Safari/Opera */\n  -khtml-user-select: none;    /* Konqueror */\n  -moz-user-select: none;      /* Firefox */\n  -ms-user-select: none;       /* Internet Explorer/Edge */\n  user-select: none;           /* Non-prefixed version, currently\n                                  not supported by any browser */\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 16px;\n  line-height: 1.5;\n  min-width: 320px;\n}\n\n@media (min-width: 38rem) {\n  html {\n    font-size: 20px;\n  }\n}\n\nbody {\n  display: block !important;\n  color: #515151;\n  background-color: #fff;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n}\n\n/* No `:visited` state is required by default (browsers will use `a`) */\n\na {\n  color: #268bd2;\n  text-decoration: none;\n}\n\n/* `:focus` is linked to `:hover` for basic accessibility */\n\na:hover,\na:focus {\n  text-decoration: underline;\n}\n\nh1 {\n  font-size: 2rem;\n}\n\nh3 {\n  margin-top: 0;\n  font-size: 1.20rem;\n}\n\nul,\nol,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nblockquote {\n  margin: .8rem 0;\n  color: #7a7a7a;\n  border-left: .25rem solid #e5e5e5;\n}\n\nblockquote p:last-child {\n  margin-bottom: 0;\n}\n\n.page blockquote p {\n  font-size: 10px;\n}\n\n@media (min-width: 30rem) {\n  blockquote {\n    padding-right: 5rem;\n    padding-left: 1.25rem;\n  }\n}\n\nimg {\n  display: block;\n  margin: 0;\n}\n\n.container {\n  max-width: 38rem;\n  padding-left: 2rem;\n  padding-right: 2rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.page,\n.post {\n  margin-bottom: 4em;\n}\n\n.page p {\n  font-size: 14px;\n}\n\n@media (min-width: 48rem) {\n  html {\n    font-size: 16px;\n  }\n}\n\n@media (min-width: 58rem) {\n  html {\n    font-size: 20px;\n  }\n}\n\nhtml {\n  font-size: 12px;\n}\n\nbody {\n  color: #777;\n  font-family: 'Roboto', Helvetica, Arial, sans-serif !important;\n}\n\n.sidebar {\n  text-align: center;\n  padding: 2rem 1rem;\n  color: rgba(255,255,255,.5);\n  background-color: #202020;\n}\n\n/* Sidebar links */\n\n.sidebar a {\n  color: #fff;\n}\n\n.sidebar ul {\n    display: none;\n}\n\n.sidebar.mobile ul {\n    display: block;\n}\n\n.sidebar.mobile ul {\n    display: block;\n}\n\n.sidebar.mobile ul li a {\n  line-height: 40px;\n}\n\n.sidebar ul li a {\n  font-weight: 400;\n}\n\n@media (min-width: 48rem) {\n  .sidebar-sticky {\n    position: absolute;\n    right: 1rem;\n    bottom: 1rem;\n    left: 1rem;\n  }\n}\n\n.content {\n  padding-top: 4rem;\n  padding-bottom: 0;\n}\n\n@media (min-width: 48rem) {\n  .content {\n    max-width: 38rem;\n    margin-left: 20rem;\n    margin-right: 2rem;\n  }\n\n  .container {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n\n@media (min-width: 64rem) {\n  .content {\n    margin-left: 22rem;\n    margin-right: 4rem;\n  }\n}\n\nheader {\n  padding: 0;\n  font-size: 1.8rem;\n  font-weight: 100;\n  color: #333;\n}\n\nimg {\n  border-radius: 0;\n}\n\nh1,\nh2,\nh3 {\n  font-weight: 300;\n  margin: 0;\n  padding: 0;\n}\n\n.content.container h3 {\n  letter-spacing: 1px;\n  text-align: center;\n  margin-bottom: 33px;\n}\n\n.content {\n  max-width: 48rem;\n  padding-top: 31px;\n}\n\n@media (max-width: 48rem) {\n  .content {\n    padding-top: 0;\n  }\n}\n\n.sidebar {\n  background-color: white;\n  color: black;\n}\n\n.sidebar a,\na {\n  color: black;\n}\n\n.sidebar ul a {\n  text-transform: uppercase;\n}\n\n.sidebar a:focus,\na:active {\n  color: white;\n  background-color: black !important;\n}\n\n.sidebar ul {\n  list-style: none;\n  padding: 0px;\n}\n\n.sidebar-sticky {\n  bottom: auto;\n  left: 2rem;\n}\n\nhtml {\n  font-family: 'Lato';\n}\n\nheader div a {\n  display: inline;\n  color: black;\n  font-weight: 300;\n}\n\nul.posts {\n  list-style: none;\n  padding: 0;\n  width: 100%;\n  overflow: hidden;\n  height: 1%;\n}\n\nul.posts li {\n  position: relative;\n  float: left;\n  width: 100%;\n  margin: 0 0 10px 0;\n}\n\nul.posts li.animated {\n    opacity: 0;\n}\n\nul.posts li.priority-0 {\n  width: 100%;\n}\n\nul.posts li .post-image {\n  width: 100%;\n}\n\nul.posts li > .w-link {\n  position: relative;\n  display: block;\n  text-decoration: none;\n}\n\nul.posts li.priority-0 .w-link {\n  /*cursor: default !important;*/\n}\n\nul.posts li > .w-link:hover .w-tags,\nul.posts li > .w-link:hover .w-title {\n  display: block;\n}\n\nul.posts li > .w-link .post-image {\n  opacity: 1;\n}\n\nul.posts li > .w-link .w-title {\n  -webkit-transition: opacity 0.6s;\n  transition: opacity 0.6s;\n  position: relative;\n  top: auto;\n  margin: 0;\n  border-bottom: 0;\n  width: 100%;\n  text-align: center;\n  text-transform: uppercase;\n  opacity: 1;\n  color: white;\n  font-size: 14px;\n  padding: 6px;\n  font-weight: 300;\n  line-height: inherit;\n  display: inline-block;\n  background: black;\n}\n\n.priority-0 .post-image, .priority-1 .post-image, .priority-2 .post-image {\n    padding-top: 47%;\n}\n\nul.posts li.priority-0 > .w-link .w-title {\n  font-size: 18px;\n  line-height: inherit;\n}\n\nul.posts li.priority-0 > .w-link .w-tags {\n  padding-top: 5px;\n}\n\nul.posts li .w-link .w-info {\n\n  position: absolute;\n  bottom: 10px;\n  height: 24px;\n  opacity: 0;\n  color: #7a7a7a;\n  width: 100%;\n  padding: 10px;\n  transition: opacity 1.6s;\n  text-align: center;\n  font-weight: 400;\n  display: block;\n}\n\nul.posts .w-tags {\n  -webkit-transition: opacity 0.8s;\n  transition: opacity 0.8s;\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  text-align: center;\n  opacity: 0;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 16px;\n  font-weight: 100;\n  padding: 15px 20px 0 20px;\n}\n\n.post img {\n  max-width: 100%;\n}\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.post.award-awwwards_site_of_the_day:before {\n  content: '';\n  position: absolute;\n  width: 69px;\n  height: 105px;\n  top: 0;\n  left: -1px;\n  z-index: 1;\n  background: url(" + __webpack_require__(6) + ") 0 0 no-repeat;\n  background-size: 100%;\n}\n\n.post.thefwa_site_of_the_day:after {\n  content: '';\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  top: 0;\n  right: 0;\n  z-index: 1;\n  background: url(" + __webpack_require__(7) + ") 0 0 no-repeat;\n  background-size: 100%;\n}\n\n.post.award-sol_plata:before,\n.post.award-sol_bronce:before {\n  content: '';\n  position: absolute;\n  width: 45px;\n  height: 45px;\n  top: 10px;\n  left: 10px;\n  z-index: 1;\n  background: url(" + __webpack_require__(8) + ") 0 0 no-repeat;\n  background-size: 100%;\n}\n\n.post.award-sol_bronce:before {\n  background: url(" + __webpack_require__(9) + ") 0 0 no-repeat;\n}\n\n@media (min-width: 48rem) {\n  .content {\n    max-width: 70rem;\n  }\n}\n\n@-webkit-keyframes fadeIn50 {\n  0% {\n    opacity: 0.85;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn50 {\n  0% {\n    opacity: 0.85;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.fadeIn50 {\n  -webkit-animation-name: fadeIn50;\n  animation-name: fadeIn50;\n}\n\n@-webkit-keyframes fadeOut50 {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0.85;\n  }\n}\n\n@keyframes fadeOut50 {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0.85;\n  }\n}\n\n.fadeOut50 {\n  -webkit-animation-name: fadeOut50;\n  animation-name: fadeOut50;\n}\n@charset \"UTF-8\";\n\n/*!\nAnimate.css - http://daneden.me/animate\nLicensed under the MIT license - http://opensource.org/licenses/MIT\n\nCopyright (c) 2014 Daniel Eden\n*/\n\n.animated {\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n\n@-webkit-keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 50%, 0);\n    transform: translate3d(0, 50%, 0);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n\n@keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, 50%, 0);\n    -ms-transform: translate3d(0, 50%, 0);\n    transform: translate3d(0, 50%, 0);\n  }\n\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none;\n  }\n}\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n}\n\n.loading {\n    margin: 0 auto;\n}\n\n.spinner {\n  margin: 20px auto;\n  width: 70px;\n  text-align: center;\n}\n\n.spinner > div {\n  width: 18px;\n  height: 18px;\n  background-color: #EEE;\n\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;\n  animation: bouncedelay 1.4s infinite ease-in-out;\n  /* Prevent first frame from flickering when animation starts */\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n\n@-webkit-keyframes bouncedelay {\n  0%, 80%, 100% { -webkit-transform: scale(0.0) }\n  40% { -webkit-transform: scale(1.0) }\n}\n\n@keyframes bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0.0);\n    -webkit-transform: scale(0.0);\n  } 40% {\n    transform: scale(1.0);\n    -webkit-transform: scale(1.0);\n  }\n}\n\n.hide {\n    display: none;\n}\n\n.project-page .content {\n  padding-top: 23px;\n}\n\n.project-page .project-title {\n  color: black;\n  text-align: center;\n}\n\n.project-page .image {\n  margin: 28px 0;\n}\n\n.project-page p {\n  font-size: 1.2rem;\n  margin: 0;\n  padding: 0;\n  color: black;\n}\n.project-page p em {\n  color: black;\n}\n\n.project-page .info {\n  border-collapse: collapse;\n  margin: 20px 0;\n}\n\n.project-page small {\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.project-page .project-content.no-columns {\n  -webkit-column-count: 1;\n  -moz-column-count: 1;\n  column-count: 1;\n}\n\n.project-page .project-content .video-wrapper {\n  position: relative;\n  padding-bottom: 52.9%; /* 16:9 */\n  padding-top: 25px;\n  height: 0;\n}\n\n.project-page .project-content .video-wrapper iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.project-page .info tr td {\n  min-width: 100px;\n  margin: 0;\n  padding: 3px 0;\n}\n\n.project-page .info * {\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.project-page .info a {\n  text-decoration: underline;\n}\n\n.project-page hr {\n  border: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n\n.project-page .related-title {\n  margin: 20px 0 5px;\n  color: #BBB;\n  float: none;\n  min-width: 100%;\n  text-align: center;\n}\n\n.project-page .related-post {\n  float: none;\n  margin: 20px 0;\n  width: auto;\n  text-align: center;\n}\n\n.project-page .posts li {\n  margin: 0 0 5px;\n}\n\n.project-page .posts a {\n  color: #BBB;\n}\n\n.project-page .award {\n  float: left;\n}\n\n.project-page .award-awwwards_site_of_the_day {\n  width: 69px;\n  height: 105px;\n  background: url(" + __webpack_require__(6) + ") 0 0 no-repeat;\n  background-size: 100%;\n}\n\n.project-page .thefwa_site_of_the_day {\n  width: 100px;\n  height: 100px;\n  background: url(" + __webpack_require__(7) + ") 0 0 no-repeat;\n  background-size: 100%;\n}\n\n.project-page .award-sol_plata,\n.project-page .award-sol_bronce {\n  width: 45px;\n  height: 45px;\n  background: url(" + __webpack_require__(8) + ") 0 0 no-repeat;\n  background-size: 100%;\n}\n\n.project-page .award-sol_bronce {\n  background: url(" + __webpack_require__(9) + ") 0 0 no-repeat;\n}\n\n@media (min-width: 48rem) {\n\n  .sidebar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 18rem;\n    text-align: left;\n  }\n\n  .sidebar ul {\n    display: block;\n  }\n\n  header {\n    padding: 0 0 2rem 0;\n  }\n\n  ul.posts li.priority-0 {\n    width: 50%;\n  }\n\n  .priority-1 .post-image {\n    padding-top: 23%;\n  }\n\n  ul.posts li > .w-link .w-title {\n    position: absolute;\n    top: 50%;\n    margin: -40px 0 0 0;\n    border-bottom: 1px solid rgba(255, 255, 255, .1);\n    opacity: 0;\n    font-size: 36px;\n    padding: 0 0 7px 0;\n    line-height: 40px;\n    background: transparent;\n  }\n\n  ul.posts li > .w-link .post-image {\n    -webkit-transition: opacity 1.5s;\n    -moz-transition: opacity 1.5s;\n    -o-transition: opacity 1.5s;\n    transition: opacity 1.5s;\n  }\n\n  ul.posts li > .w-link:hover .post-image {\n    opacity: 0.1;\n  }\n\n  ul.posts li > .w-link {\n    -webkit-transition: background-color 0.1s;\n    transition: background-color 0.1s;\n    background-color: black;\n  }\n\n  ul.posts li > .w-link:hover {\n    background-color: rgba(0, 0, 0, .9);\n  }\n\n  /*ul.posts li > .w-link:hover .w-title {*/\n    /*opacity: 0;*/\n  /*}*/\n\n  ul.posts li > .w-link:hover .w-tags {\n    opacity: 1;\n  }\n\n  ul.posts li > .w-link:hover .w-info {\n    opacity: 1;\n  }\n\n  ul.posts li > .w-link:hover .w-title {\n    opacity: 1;\n  }\n\n  ul.posts li.priority-0 > .w-link .w-title {\n    font-size: 20px;\n    line-height: 25px;\n    margin: -40px 0 0 0;\n  }\n\n  .sidebar.mobile {\n    display: none;\n  }\n\n  .project-page .project-content {\n    -webkit-column-count: 2; /* Chrome, Safari, Opera */\n    -moz-column-count: 2; /* Firefox */\n    column-count: 2;\n  }\n\n  .project-page .related-title {\n    float: left;\n    min-width: 100px;\n    text-align: left;\n  }\n\n  .project-page .related-post {\n    float: left;\n    margin: 20px 0;\n    width: auto;\n    text-align: left;\n  }\n\n  .project-page .project-title {\n    text-align: left;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "790e7fa3b8ce029596935299e3608b2f.png";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "5d26de330c6edf3d8bcf8ff6f38be64e.png";

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAYAAAC8jpA0AAAGaUlEQVR42s2Ze1BUVRzHQx1MzMpJbUpzplKHrKZmnMlpTKeZbEqzpmzGymkqmxr7Q0UMNPeJII9dFgSBXTBgechDCUVR06Rsh9QKEghWwAcaKoiF2MrT3eXXt7Nn6Xa7+3BncTszn9nL9/zuOd977u/87nL3Ln83jUbzCJjth6H8bmycm75oUOuibxNYGSjT94JkMFOi7zgg8LJIf5LrsYEyPRbYQCOYKNDnAOL8AsZwPQQ0cz3NxZgzQNBomp4AfgPEjU/muhqQgOVc/1qgnZRYgFJQ6C9zd4P5EvpU0CkwUg2eACdEpk1gq0i7LBjneVDNdaW/TAeDo6AGLBPoD4E/RWYswArIA4NgAYgU6cv8mQrrAXGqwFIwF9wA5AM20C3S7OA5F/OP8cX00xITm0EvID9xE0wRzBkEXgThYIKvlcIMaBRpBLPBByAf/Mr13d4YfBCESOiqUTbdDa6KNCuY5o3pheAi33w7gQy8DuIA3WHSbicd9roYZPgOGraAR2/H9GRnDQ4gOl823ysBNl0DSvim1IMUUApecm9cnMeBpwXMcpUaL4B3gO5/ZPgHMF5o9AFeKX4EFzwNoNVq2WdCQoLzbw8xWmEM7xdonmkA90t9KQr3wiwzIZfLGCqlkmT4lMlkFBcX5zSC41hoPEalxPFmdhwfH086nY7FQmNA4+bdr7C7HJ7Fg0gKTIDJ5bR71x4yN7XSubPt1NTYTHv3VpJarWb90THRMKqGtp8aG1uo+XQbNdSbqahoN8kVcsSpSK83UG1tA9XU1FFKSirF4ByNxqXxY7wo3OfO+ERgBAPiARRKBe3bd5CczWalkVZd/RNtxsqpo9RUX99MUu170wlaHx5GOTl5I1pmZha7G16kylleQRaBEFfmjwpP2ro1Brc2iSwWh9M9ew7S6s9WU3HJV2S12mlokEiF1a6oqGT9dhvhQn6m/IKddOrUaXK27BwjJSVvI7ud2DlYdbb63LS3GMRmF4MjoF8YGB0dTdtSUqi/b5hNfu7cJSorqyBjXj7lGneSFrc3MVFHVzt6WH/Vt9W0LmwtbdwYQRGRn2P1W5heV2em1O3pdGvIJ9O/g0QQ6jQ7HxS7O0mpVLL06O+/RcLW3n6FMjIMlIwVHLY70iY9XU8KhYzl7KZNkVRQUMRiL7R10pfZubh4h2mDPpOiotS44ER3xi0gGTwmXN1PAXkElUMmk1Na+g46UHkIm+w89d50pIsV11FaWk6dnTdoeJiw8XZhpdewtFq3bg0dPvwdi2tpvkh6ww6CYYZGq6EwxMnkm7EoCqlSeMnVA2UGWAlyQJdUqVOpFGQ0FtD16xY6c+Y8xSdoadWqDyk1NZ16rmN2tJKSMqqqMrHjK5e7ceuzUBliKB+rfNPiiDlw4DDpkpJxkQ7T5eX7WZ4X41yjsRAllVUp4fy3QBaY7On79GpQKTSOssQ2Ym+vY2W7/+gnk+kkNTSwSoGUsRMmBAnU18di2Ga71tVLztbR0c1KpsGQRXaEiFtPzwDFxsZjri1Sd7oePOvpe0fYf1dbiVw1UGtr27/K3aX2TsrNzWf9uMWIySSzuYWGhsh5QajLdRgjiSIiNlAOVvbatT7ctQEwCLNDNDBgQ7534MHzt+kYd2m6AUxya1hsHDsdlSSGrVZeXiFl7cjG6sTxWqthGwoxIAq5m4nUKKS0tAxsSgVt2RI1EpOSmg4y2CdARdFj025nd0ujSXD3X3wTWCg2/D4g12jZYxg7HkbYEw6mYyWenv/EwCzMsMc1A8e48CghLAYpKPXPcypYC5bwvTceBI+8UAQRgLxD6+lLj7DfV77xlMPTQDk4Dk6AOn4rWoENUIAId2c6SEoDrwbYtJ0/Ab1vzqdkgGkCwd4anhsAg8d49SoBJm7YBr4AQd6Y3iUx6NAom66W8PE4WADGeDK8SHR7ssEKkDPKpq1gjq9vSj/RONo8MFagl/rR4LCLl5irfDMtXU3GgdN+fvMUCd4AxwVasT/fU08BV0Vp8xaoBeQj7wnGX8HH6gMP+8Oz+EcgPZjE9QqRkZPgiITB5cAo0lZIzPMuCPWX6Y9AF3hbpCeLjMwEU0VamyDeJNCXjvbPcM+A6RL6mwITHzt1UaVRifbGIa4vDtRvivO4gVyRPh0M8r5Zor4QsB8sCZTpp0CZ1G8jXO9yc+49gTId7KYvFLzm7zn/AjCK/52vEGb1AAAAAElFTkSuQmCC"

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAFPElEQVR4Ac3ZbWhWZRzH8Uub6ZSMpulCrCTN9MXQCh96kT0IapqomamZ082c020+zDmbc87naWZqmokoBBUIlSQZgyRhL0IsKsyalZCUWikmGr5Il/++PwYXhwvOzeHmnrfCh/s+//P0O9f1P9fYdJn+VzN/ynAMhIvRAS5tSPfELmgfs68JX8bs24NB2Qr9MA7hvqDeGVdheDTYVwfD6GyFzofhB/SI1CfDBEci9bEwQTVcoBcKMhM6vgV6428YTmsbDp/CIgbjrsjoyz64iNE4i8JMhe6KWcFoSn9cgwm+wThchkU04fOgdhQOHbEZBnkoU6Hb4Rj+RH0kfB8YQjdhSOU3FOE7GOQ8umeyp8thkDMoxXjcgKWU/MF+RMeYQUsr9AD8B4u4jhZYhrwPB+mBMfgAc9IN3R7fwtqQQs/Ce/gDBhmUJHQBnkd/dInUa2BtKJxJ2Zu0p4fA0IJmfIH9OBL0Ylu7gUeShpZyWJbtSGf1+AyWJf9iNLohH3noiu7olCp0Pv6CZUELLuAilOF3aLsReWHoUC3sNvJUtD06YTCGYx624CBOwZBtVzA07Ol70AhLpHSKvTZvsqft1Me8GO4L6ildwJNxL2JPfAhLwQepK59udRXTrbZsqq+tmP+SjrHlJa0P4o9ZMFU1H1LHrSybpnqS0NOTrB4VqQLrRm/Ultqu9Yvt7fVLbNe6xfZ6TYmCKJTCWf2iGbatvkz7dJztXLvQGqqLtd+q506ytUsKVbcttfNUC2cq9BP2YhRy4kLLQJxEOKX2Zt0Ce2fjUgW19Utn247VFbZnU5XqVjVngkZWgXSMvbVmocL77S0rSmxp8QRT6D0NVbZt1YIkocMH2I8hYWAZhq/CUVYrKIBoNBVAI9ywfI5tWFakmyu8D6htjfyaxTNNo757Q6WpZXTu7o2VtrVufhA6kWaMioZ9AodhIV1cNHIKRXCNpEbcP4ACtbbDIrURrfCCAjEDE00PpvM2VBWlG7oZ06LtMQJNsDiMqH+ZNi4rNgVWTyuIAmxa/qoPzT7/oDpPoQnbGnpZGNqvQHHhT6AQueGLOBnNsDgKQL+2jtTCGaYHUCCFUFBNv+rb68vVBupb9Tgmms5VXaHVKgqt71tXlmo2dK1US+ARuFD4AlbhOK7ARHThVRUvm26mUGuWzDTdaPWiV3xoba+rnKVjtK2W0LZvKb20CklwzZJWFY226KE0ALpGGFrO47m40FElsDC4WkM31PQS1n9qBhRIN91cM9e3DnxgzRS9r1VH5/nrCCuQH/kUM16WKnRffB/3U04jrvCE06e29UC+jfRdraK1mV7XaPuVRPvV+wRX3dM2bZPkpdyHDmHgfjgDC8HfnBGJfqoeHiP+mOhPQ76rFh4TtoZcxs/4GNtRiknIjQbug3Ow20Qp7kz1IvbC1+Hva/qOm7AsOA6XKnQehqEAj2E4HsdMtMCypCE+dLyVsCx7OnFo9MV12C1yE004jLMwwTU8mDT0TtgtVgyHe1GAcajC0CSh+8EijqEeR2Ft6FC6f4Bsh0qcQCWGIAcOH7XxX5WuoFu6ofPgAp1xGpYh/6AI7wb18emEjpOPi8EvnZtwCemGzoXDszgIwyeZDD0ABjmAfDicgkU049egdgnVuBrUesNFjEQdumQqdBmuY3ZQPxAsW/djKiyiEQ4jcA2Gc+gJh9AdmQo9EsPgAjUwSBEccvALDFIIFwl+Ay24+5b9l1ygEIatQX1ipA06B/uewUn0zlboUWhEDlzgLI7CIfQA8rIVOhedYvaNwVi4TPofmVNgo0Aou8oAAAAASUVORK5CYII="

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);