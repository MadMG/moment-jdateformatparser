#moment-jdateformatparser
[![NPM](https://nodei.co/npm/moment-jdateformatparser.png)](https://nodei.co/npm/moment-jdateformatparser/)
[![Build Status](https://travis-ci.org/MadMG/moment-jdateformatparser.svg?branch=master)](https://travis-ci.org/MadMG/moment-jdateformatparser)

This `moment.js` plugin translates the `java.text.SimpleDateFormat` date format to the `moment.js` date format.

We took the structure graciously from <https://github.com/niwibe/moment-tokens> (thanks a lot!).

Usage
=====
* `formatWithJDF`: Formats the moment with a java date format.
  > e.g.: `moment("2013-12-24 14:30").formatWithJDF("dd.MM.yyyy")` will return `24.12.2013`

* `toMomentFormatString`: Translates the java date format to a momentjs format.
  > e.g.: `moment().toMomentFormatString("dd.MM.yyyy")` will return `DD.MM.YYYY`

* `toJDFString`: Translates the momentjs format to a java date format.
  > e.g.: `moment().toJDFString("DD.MM.YYYY")` will return `dd.MM.yyyy`

Installation
============

NPM
-------
Installation is possible with `npm install moment-jdateformatparser`

Bower
------
Installation is possible with `bower install moment-jdateformatparser`


License
=======
moment-jdateparser is freely distributable under the terms of the MIT license.

Copyright (c) 2013 Heinz Romirer, Martin Groller
