'use strict';

System.register(['aurelia-pal', 'aurelia-logging'], function (_export, _context) {
  var PLATFORM, Logger, _typeof, ConsoleAppender;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }, function (_aureliaLogging) {
      Logger = _aureliaLogging.Logger;
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };


      (function (global) {
        global.console = global.console || {};
        var con = global.console;
        var prop = void 0;
        var method = void 0;
        var empty = {};
        var dummy = function dummy() {};
        var properties = 'memory'.split(',');
        var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' + 'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' + 'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
        while (prop = properties.pop()) {
          if (!con[prop]) con[prop] = empty;
        }while (method = methods.pop()) {
          if (!con[method]) con[method] = dummy;
        }
      })(PLATFORM.global);

      if (PLATFORM.global.console && _typeof(console.log) === 'object') {
        ['log', 'info', 'warn', 'error', 'assert', 'dir', 'clear', 'profile', 'profileEnd'].forEach(function (method) {
          console[method] = this.bind(console[method], console);
        }, Function.prototype.call);
      }

      _export('ConsoleAppender', ConsoleAppender = function () {
        function ConsoleAppender() {
          _classCallCheck(this, ConsoleAppender);
        }

        ConsoleAppender.prototype.debug = function debug(logger) {
          var _console;

          for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
          }

          (_console = console).debug.apply(_console, ['DEBUG [' + logger.id + ']'].concat(rest));
        };

        ConsoleAppender.prototype.info = function info(logger) {
          var _console2;

          for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            rest[_key2 - 1] = arguments[_key2];
          }

          (_console2 = console).info.apply(_console2, ['INFO [' + logger.id + ']'].concat(rest));
        };

        ConsoleAppender.prototype.warn = function warn(logger) {
          var _console3;

          for (var _len3 = arguments.length, rest = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            rest[_key3 - 1] = arguments[_key3];
          }

          (_console3 = console).warn.apply(_console3, ['WARN [' + logger.id + ']'].concat(rest));
        };

        ConsoleAppender.prototype.error = function error(logger) {
          var _console4;

          for (var _len4 = arguments.length, rest = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            rest[_key4 - 1] = arguments[_key4];
          }

          (_console4 = console).error.apply(_console4, ['ERROR [' + logger.id + ']'].concat(rest));
        };

        return ConsoleAppender;
      }());

      _export('ConsoleAppender', ConsoleAppender);
    }
  };
});