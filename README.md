#moment-jdateformatparser
[![NPM](https://nodei.co/npm/moment-jdateformatparser.png)](https://nodei.co/npm/moment-jdateformatparser/)
[![Build Status](https://travis-ci.org/MadMG/moment-jdateformatparser.svg?branch=master)](https://travis-ci.org/MadMG/moment-jdateformatparser)

This `moment.js` plugin translates the `java.text.SimpleDateFormat` date format to the `moment.js` date format.

We took the structure graciously from <https://github.com/niwibe/moment-tokens> (thanks a lot!).

Usage
=====
Create an instance of the format parser
```js
// browserify/node/webpack v1
var moment = require('moment');
var MomentJDateFormatParser = require('moment-jdateformatparser').MomentJDateFormatParser;

// webpack v2/rollup
import moment from 'moment';
import MomentJDateFormatParser from 'moment-jdateformatparser';

// use an instance of moment for formatting
var formatter = new MomentJDateFormatParser(moment());

// you can change the moment instance by setting the moment property
formatter.moment = moment("2013-12-24 14:30");
```

Now you can use the following utility functions:
* `formatWithJDF`: Formats the moment with a java date format.
  > e.g.: `new MomentJDateFormatParser(moment("2013-12-24 14:30")).formatWithJDF("dd.MM.yyyy")` will return `24.12.2013`

* `toMomentFormatString`: Translates the java date format to a momentjs format.
  > e.g.: `formatter.toMomentFormatString("dd.MM.yyyy")` will return `DD.MM.YYYY`

* `toJDFString`: Translates the momentjs format to a java date format.
  > e.g.: `formatter.toJDFString("DD.MM.YYYY")` will return `dd.MM.yyyy`

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
