module("From Java Format Tests");

test("Date checks", function () {
  var theMoment = moment();
  var formatter = new momentJdateformatparser.default(theMoment);

  equal(formatter.toMomentFormatString("dd."), "DD.", "Check day");
  equal(formatter.toMomentFormatString("dd.MM."), "DD.MM.", "Check day and Month");
  equal(formatter.toMomentFormatString("dd.MM.yyyy"), "DD.MM.YYYY", "Check date");

  equal(formatter.toMomentFormatString("d.M.yyyy"), "D.M.YYYY", "Check date single day and month");

  equal(formatter.toMomentFormatString("yyyy"), "YYYY", "Check just the year with 4 digits");
  equal(formatter.toMomentFormatString("yy"), "YY", "Check just the year with 2 digits");
  equal(formatter.toMomentFormatString("y"), "YYYY", "Check just the year with 1 digit resolves to year with 4 digits");

  equal(formatter.toMomentFormatString("M"), "M", "Check just the month");
  equal(formatter.toMomentFormatString("MM"), "MM", "Check just the month with leading zero");

  equal(formatter.toMomentFormatString("MMM"), "MMM", "Check the month name short");
  equal(formatter.toMomentFormatString("MMMM"), "MMMM", "Check the month name long");
});

test("Hour and minute checks", function () {
  var theMoment = moment();
  var formatter = new momentJdateformatparser.default(theMoment);

  equal(formatter.toMomentFormatString("HH:mm"), "HH:mm", "Check 24h time");
  equal(formatter.toMomentFormatString("hh:mm"), "hh:mm", "Check 12h time");

  equal(formatter.toMomentFormatString("hh:mm A"), "hh:mm A", "Check am/pm upper case");
  equal(formatter.toMomentFormatString("hh:mm a"), "hh:mm a", "Check am/pm lower case");

  equal(formatter.toMomentFormatString("h:mm A"), "h:mm A", "Check am/pm upper case single hour");
  equal(formatter.toMomentFormatString("h:mm a"), "h:mm a", "Check am/pm lower case single hour");

  equal(formatter.toMomentFormatString("m"), "m", "Check single minute");
  equal(formatter.toMomentFormatString("h"), "h", "Check single hour (12 hour format)");
  equal(formatter.toMomentFormatString("H"), "H", "Check single hour (24 hour format)");
});

test("Seconds and milliseconds checks", function () {
  var theMoment = moment();
  var formatter = new momentJdateformatparser.default(theMoment);

  equal(formatter.toMomentFormatString("HH:mm:ss"), "HH:mm:ss", "Check time with seconds of the minute");
  equal(formatter.toMomentFormatString("HH:mm:ss.SSS"), "HH:mm:ss.SSS", "Check time with milliseconds");

  equal(formatter.toMomentFormatString("s"), "s", "Check just the seconds");
  equal(formatter.toMomentFormatString("ss"), "ss", "Check just the seconds with leading zero");


  equal(formatter.toMomentFormatString("S"), "SSS", "Check just the milliseconds S");
  equal(formatter.toMomentFormatString("SS"), "SSS", "Check just the milliseconds SS");
  equal(formatter.toMomentFormatString("SSS"), "SSS", "Check just the milliseconds SSS");
});

test("Weekday checks", function () {
  var theMoment = moment();
  var formatter = new momentJdateformatparser.default(theMoment);

  equal(formatter.toMomentFormatString("E"), "ddd", "Check weekday name short");
  equal(formatter.toMomentFormatString("EEEE"), "dddd", "Check weekday name long");

  equal(formatter.toMomentFormatString("D"), "DDD", "Check day in year");

  equal(formatter.toMomentFormatString("u"), "E", "Check day in week");

  equal(formatter.toMomentFormatString("w"), "W", "Check week in year");
  equal(formatter.toMomentFormatString("ww"), "WW", "Check week in year with leading zero");
});

test("Timezone checks", function () {
  var theMoment = moment();
  var formatter = new momentJdateformatparser.default(theMoment);

  equal(formatter.toMomentFormatString("z"), "ZZ", "Check timezone short");
  equal(formatter.toMomentFormatString("zzzz"), "Z", "timezone long");

  equal(formatter.toMomentFormatString("Z"), "ZZ", "Check day in year");

  equal(formatter.toMomentFormatString("X"), "ZZ", "Check week in year");
  equal(formatter.toMomentFormatString("XX"), "ZZ", "Check week in year with leading zero");
  equal(formatter.toMomentFormatString("XXX"), "Z", "Check week in month");
});
