module("To Java Format Tests");

test("Date checks", function () {
  var formatter = new (momentJdateformatparser.default)(moment);

  equal(formatter.toJDFString("DD."), "dd.", "Check day");
  equal(formatter.toJDFString("DD.MM."), "dd.MM.", "Check month");
  equal(formatter.toJDFString("DD.MM.YYYY"), "dd.MM.yyyy", "Check date");

  equal(formatter.toJDFString("D.M.YYYY"), "d.M.yyyy", "Check date with single day and month");

  equal(formatter.toJDFString("YYYY"), "yyyy", "Check year with 4 digits");
  equal(formatter.toJDFString("YY"), "yy", "Check year with 2 digits");

  equal(formatter.toJDFString("M"), "M", "Check just the month");
  equal(formatter.toJDFString("MM"), "MM", "Check just the month with leading zero");

  equal(formatter.toJDFString("MMM"), "MMM", "Check the month name short");
  equal(formatter.toJDFString("MMMM"), "MMMM", "Check the month name long");
});

test("Hour and minute checks", function () {
  var formatter = new (momentJdateformatparser.default)(moment);

  equal(formatter.toJDFString("HH:mm"), "HH:mm", "Check 24h time");
  equal(formatter.toJDFString("hh:mm"), "hh:mm", "Check 12h time");

  equal(formatter.toJDFString("hh:mm A"), "hh:mm A", "Check am/pm upper case");
  equal(formatter.toJDFString("hh:mm a"), "hh:mm a", "Check am/pm lower case");

  equal(formatter.toJDFString("h:mm A"), "h:mm A", "Check am/pm upper case single hour");
  equal(formatter.toJDFString("h:mm a"), "h:mm a", "Check am/pm lower case single hour");

  equal(formatter.toJDFString("m"), "m", "Check single minute");
  equal(formatter.toJDFString("h"), "h", "Check single hour (12 hour format)");
  equal(formatter.toJDFString("H"), "H", "Check single hour (24 hour format)");
});

test("Seconds and milliseconds checks", function () {
  var formatter = new (momentJdateformatparser.default)(moment);

  equal(formatter.toJDFString("HH:mm:ss"), "HH:mm:ss", "Check time with seconds of the minute");
  equal(formatter.toJDFString("HH:mm:ss.SSS"), "HH:mm:ss.S", "Check time with milliseconds");

  equal(formatter.toJDFString("s"), "s", "Check just the seconds");
  equal(formatter.toJDFString("ss"), "ss", "Check just the seconds with leading zero");


  equal(formatter.toJDFString("S"), "S", "Check just the milliseconds S");
  equal(formatter.toJDFString("SS"), "S", "Check just the milliseconds SS");
  equal(formatter.toJDFString("SSS"), "S", "Check just the milliseconds SSS");
});

test("Weekday checks", function () {
  var formatter = new (momentJdateformatparser.default)(moment);

  equal(formatter.toJDFString("ddd"), "E", "Check weekday name short");
  equal(formatter.toJDFString("dddd"), "EEEE", "Check weekday name long");

  equal(formatter.toJDFString("DDD"), "D", "Check day in year");

  equal(formatter.toJDFString("u"), "u", "Check day in week");

  equal(formatter.toJDFString("W"), "w", "Check week in year");
  equal(formatter.toJDFString("WW"), "ww", "Check week in year with leading zero");
});
