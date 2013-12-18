module("To Java Format Tests");

test("Date checks", function () {
  equal(moment().toJDFString("DD."), "dd.", "Check day");
  equal(moment().toJDFString("DD.MM."), "dd.MM.", "Check month");
  equal(moment().toJDFString("DD.MM.YYYY"), "dd.MM.yyyy", "Check date");

  equal(moment().toJDFString("D.M.YYYY"), "d.M.yyyy", "Check date with single day and month");

  equal(moment().toJDFString("YYYY"), "yyyy", "Check year with 4 digits");
  equal(moment().toJDFString("YY"), "yy", "Check year with 2 digits");

  equal(moment().toJDFString("M"), "M", "Check just the month");
  equal(moment().toJDFString("MM"), "MM", "Check just the month with leading zero");

  equal(moment().toJDFString("MMM"), "MMM", "Check the month name short");
  equal(moment().toJDFString("MMMM"), "MMMM", "Check the month name long");
});

test("Hour and minute checks", function () {
  equal(moment().toJDFString("HH:mm"), "HH:mm", "Check 24h time");
  equal(moment().toJDFString("hh:mm"), "hh:mm", "Check 12h time");

  equal(moment().toJDFString("hh:mm A"), "hh:mm A", "Check am/pm upper case");
  equal(moment().toJDFString("hh:mm a"), "hh:mm a", "Check am/pm lower case");

  equal(moment().toJDFString("h:mm A"), "h:mm A", "Check am/pm upper case single hour");
  equal(moment().toJDFString("h:mm a"), "h:mm a", "Check am/pm lower case single hour");

  equal(moment().toJDFString("m"), "m", "Check single minute");
  equal(moment().toJDFString("h"), "h", "Check single hour (12 hour format)");
  equal(moment().toJDFString("H"), "H", "Check single hour (24 hour format)");
});

test("Seconds and milliseconds checks", function () {
  equal(moment().toJDFString("HH:mm:ss"), "HH:mm:ss", "Check time with seconds of the minute");
  equal(moment().toJDFString("HH:mm:ss.SSS"), "HH:mm:ss.S", "Check time with milliseconds");

  equal(moment().toJDFString("s"), "s", "Check just the seconds");
  equal(moment().toJDFString("ss"), "ss", "Check just the seconds with leading zero");


  equal(moment().toJDFString("S"), "S", "Check just the milliseconds S");
  equal(moment().toJDFString("SS"), "S", "Check just the milliseconds SS");
  equal(moment().toJDFString("SSS"), "S", "Check just the milliseconds SSS");
});

test("Weekday checks", function () {
  equal(moment().toJDFString("ddd"), "E", "Check weekday name short");
  equal(moment().toJDFString("dddd"), "EEEE", "Check weekday name long");

  equal(moment().toJDFString("DDD"), "D", "Check day in year");

  equal(moment().toJDFString("u"), "u", "Check day in week");

  equal(moment().toJDFString("W"), "w", "Check week in year");
  equal(moment().toJDFString("WW"), "ww", "Check week in year with leading zero");
});