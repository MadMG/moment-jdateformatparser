export class MomentJDateFormatParser {
  constructor(moment) {
    /**
     * The instance of **Moment** to use..
     *
     * @property moment
     * @type {Object}
     */
    this.moment = moment;

    /**
     * The internal **Java** date formats cache.
     *
     * @property javaDateFormats
     * @type {Object}
     */
    this.javaDateFormats = {};

    /**
     * The internal **moment.js** date formats cache.
     *
     * @property momentDateFormats
     * @type {Object}
     */
    this.momentDateFormats = {};
  }

  /**
   * Translates the momentjs format String to a java date format String.
   *
   * @function toJDFString
   * @param {String}  formatString    The format String to be translated.
   * @returns {String}
   */
  toMomentFormatString(formatString) {
    if (!this.javaDateFormats[formatString]) {
      this.javaDateFormats[formatString] = this._translateFormat(formatString, MomentJDateFormatParser.javaFormatMapping);
    }
    return this.javaDateFormats[formatString];
  };

  /**
   * Format the moment with the given java date format String.
   *
   * @function formatWithJDF
   * @param {String}  formatString    The format String to be translated.
   * @returns {String}
   */
  formatWithJDF(formatString) {
    return this.moment.format(this.toMomentFormatString(formatString));
  }

  /**
   * Translates the momentjs format string to a java date format string
   *
   * @function toJDFString
   * @param {String}  formatString    The format String to be translated.
   * @returns {String}
   */
  toJDFString(formatString) {
    if (!this.momentDateFormats[formatString]) {
      this.momentDateFormats[formatString] = this._translateFormat(formatString, MomentJDateFormatParser.momentFormatMapping);
    }
    return this.momentDateFormats[formatString];
  }

  /**
   * Translates the java date format String to a momentjs format String.
   *
   * @private
   * @function translateFormat
   * @param {String}  formatString    The unmodified format string
   * @param {Object}  mapping         The date format mapping object
   * @returns {String}
   */
  _translateFormat(formatString, mapping) {
    var len = formatString.length,
        i = 0,
        beginIndex = -1,
        lastChar = null,
        currentChar = "",
        resultString = "";

    for (; i < len; i++) {
      currentChar = formatString.charAt(i);

      if (lastChar === null || lastChar !== currentChar) {
        // change detected
        resultString = this._appendMappedString(formatString, mapping, beginIndex, i, resultString);

        beginIndex = i;
      }

      lastChar = currentChar;
    }

    return this._appendMappedString(formatString, mapping, beginIndex, i, resultString);
  };

  /**
   * Checks if the substring is a mapped date format pattern and adds it to the result format String.
   *
   * @function _appendMappedString
   * @param {String}  formatString    The unmodified format String.
   * @param {Object}  mapping         The date format mapping Object.
   * @param {Number}  beginIndex      The begin index of the continuous format characters.
   * @param {Number}  currentIndex    The last index of the continuous format characters.
   * @param {String}  resultString    The result format String.
   * @returns {String}
   * @private
   */
  _appendMappedString(formatString, mapping, beginIndex, currentIndex, resultString) {
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
}

/**
 * The format pattern mapping from Java format to momentjs.
 *
 * @static
 * @property javaFormatMapping
 * @type {Object}
 */
MomentJDateFormatParser.javaFormatMapping = {
  d: 'D',
  dd: 'DD',
  y: 'YYYY',
  yy: 'YY',
  yyy: 'YYYY',
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
  EE: 'ddd',
  EEE: 'ddd',
  EEEE: 'dddd',
  EEEEE: 'dddd',
  EEEEEE: 'dddd',
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
};

/**
 * The format pattern mapping from Java format to momentjs.
 *
 * @static
 * @property momentFormatMapping
 * @type {Object}
 */
MomentJDateFormatParser.momentFormatMapping = {
  D: 'd',
  DD: 'dd',
  YY: 'yy',
  YYY: 'yyyy',
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

export default MomentJDateFormatParser;
