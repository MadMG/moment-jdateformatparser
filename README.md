#moment-jdateformatparser


This `moment.js` plugin translates the `java.text.SimpleDateFormat` date format to the `moment.js` date format.

We took the structure graciously from <https://github.com/niwibe/moment-tokens> (thanks a lot!).

Usage
=====
* `formatWithJavaDateFormat`: Formats the moment with a java date format.
  > e.g.: `moment("2013-12-24 14:30").formatWithJavaDateFormat("dd.MM.yyyy")` will return `24.12.2013`

* `toJavaDateFormatString`: Translates the momentjs format to a java date format.
  > e.g.: `moment().toJavaDateFormatString("DD.MM.YYYY")` will return `dd.MM.yyyy`

Installation
============
Installation is possible with `npm install moment-jdateformatparser`


License
=======
moment-jdateparser is freely distributable under the terms of the MIT license.

Copyright (c) 2013 Heinz Romirer, Martin Groller
