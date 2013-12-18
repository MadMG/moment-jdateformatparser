/**
 *
 */
(function () {
  /**
   * The **moment.js** library.
   *
   * @property moment
   * @type {Object}
   */
  var moment,
      /**
       * The internal **Java** date formats cache.
       *
       * @property javaDateFormats
       * @type {Object}
       */
          javaDateFormats = {},

      /**
       * The internal **moment.js** date formats cache.
       *
       */
          momentDateFormats = {},

      /**
       * The format pattern mapping from Java format to momentjs
       */
          javaFormatMapping = {
        d: 'D',
        dd: 'DD',
        yy: 'YY',
        yyyy: 'YYYY',
        a: 'a',
        A: 'A',
        M: 'M',
        MM: 'MM',
        MMM: 'MMM',
        MMMM: 'MMMM',
        h: 'h',
        hh: 'hh',
        H: 'H',
        HH: 'HH',
        m: 'm',
        mm: 'mm',
        s: 's',
        ss: 'ss',
        S: 'SSS',
        SS: 'SSS',
        SSS: 'SSS',
        E: 'ddd',
        EEEE: 'dddd',
        D: 'DDD',
        w: 'W',
        ww: 'WW',
        z: 'ZZ',
        zzzz: 'Z',
        Z: 'ZZ',
        X: 'ZZ',
        XX: 'ZZ',
        XXX: 'Z',
        u: 'E'
      },

      /**
       * The format pattern mapping from Java format to momentjs
       */
          momentFormatMapping = {
        D: 'd',
        DD: 'dd',
        YY: 'yy',
        YYYY: 'yyyy',
        a: 'a',
        A: 'A',
        M: 'M',
        MM: 'MM',
        MMM: 'MMM',
        MMMM: 'MMMM',
        h: 'h',
        hh: 'hh',
        H: 'H',
        HH: 'HH',
        m: 'm',
        mm: 'mm',
        s: 's',
        ss: 'ss',
        S: 'S',
        SS: 'S',
        SSS: 'S',
        ddd: 'E',
        dddd: 'EEEE',
        DDD: 'D',
        W: 'w',
        WW: 'ww',
        ZZ: 'z',
        Z: 'XXX',
        E: 'u'
      };

  if (typeof require !== 'undefined' && require !== null) {
    moment = require('moment');
  } else {
    moment = this.moment;
  }


  /**
   * Translates the java date format string to a momentjs format string
   *
   * @method translateFormat
   * @param formatString    The unmodified format string
   * @param mapping         The date format mapping object
   * @returns {String}
   */
  var translateFormat = function (formatString, mapping) {
    var len = formatString.length,
        i = 0,
        beginIndex = -1,
        lastChar = null,
        currentChar = "",
        resultString = "";

    for (; i < len; i++) {
      currentChar = formatString[i];

      if (lastChar === null || lastChar !== currentChar) {
        // change detected
        resultString = _appendMappedString(formatString, mapping, beginIndex, i, resultString);

        beginIndex = i;
      }

      lastChar = currentChar;
    }

    return _appendMappedString(formatString, mapping, beginIndex, i, resultString);
  };

  /**
   * Checks if the substring is a mapped date format pattern and adds it to the result format string
   *
   * @method _appendMappedString
   * @param formatString    The unmodified format string
   * @param mapping         The date format mapping object
   * @param beginIndex      The begin index of the continuous format characters
   * @param currentIndex    The last index of the continuous format characters
   * @param resultString    The result format string
   * @returns {String}
   * @private
   */
  var _appendMappedString = function (formatString, mapping, beginIndex, currentIndex, resultString) {
    var tempString;

    if (beginIndex !== -1) {
      tempString = formatString.substring(beginIndex, currentIndex);
      // check if the temporary string has a known mapping
      if (mapping[tempString]) {
        tempString = mapping[tempString];
      }
      resultString = resultString.concat(tempString);
    }
    return resultString;
  };

  // register as private function (good for testing purposes)
  moment.fn.__translateJavaFormat = translateFormat;

  /**
   * Translates the momentjs format string to a java date format string
   *
   * @function toJDFString
   * @param formatString
   * @returns {*}
   */
  moment.fn.toMomentFormatString = function (formatString) {
    if (!javaDateFormats[formatString]) {
      javaDateFormats[formatString] = translateFormat(formatString, javaFormatMapping);
    }
    return javaDateFormats[formatString];
  };

  /**
   * Format the moment with the given java date format string
   *
   * @function formatWithJDF
   * @param formatString
   * @returns {*}
   */
  moment.fn.formatWithJDF = function (formatString) {
    return this.format(this.toMomentFormatString(formatString));
  };

  /**
   * Translates the momentjs format string to a java date format string
   *
   * @function toJDFString
   * @param formatString
   * @returns {*}
   */
  moment.fn.toJDFString = function (formatString) {
    if (!momentDateFormats[formatString]) {
      momentDateFormats[formatString] = translateFormat(formatString, momentFormatMapping);
    }
    return momentDateFormats[formatString];
  };


  if (typeof module !== 'undefined' && module !== null) {
    module.exports = moment;
  } else {
    this.moment = moment;
  }

}).call(this);