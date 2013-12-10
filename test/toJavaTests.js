module("To Java Format Tests");

test("Date checks", function () {
  equal(moment().toJavaDateFormatString("DD."), "dd.", "Check day");
  equal(moment().toJavaDateFormatString("DD.MM."), "dd.MM.", "Check month");
  equal(moment().toJavaDateFormatString("DD.MM.YYYY"), "dd.MM.yyyy", "Check date");

  equal(moment().toJavaDateFormatString("D.M.YYYY"), "d.M.yyyy", "Check date with single day and month");

  equal(moment().toJavaDateFormatString("YYYY"), "yyyy", "Check year with 4 digits");
  equal(moment().toJavaDateFormatString("YY"), "yy", "Check year with 2 digits");

  equal(moment().toJavaDateFormatString("M"), "M", "Check just the month");
  equal(moment().toJavaDateFormatString("MM"), "MM", "Check just the month with leading zero");

  equal(moment().toJavaDateFormatString("MMM"), "MMM", "Check the month name short");
  equal(moment().toJavaDateFormatString("MMMM"), "MMMM", "Check the month name long");
});

test("Hour and minute checks", function () {
  equal(moment().toJavaDateFormatString("HH:mm"), "HH:mm", "Check 24h time");
  equal(moment().toJavaDateFormatString("hh:mm"), "hh:mm", "Check 12h time");

  equal(moment().toJavaDateFormatString("hh:mm A"), "hh:mm A", "Check am/pm upper case");
  equal(moment().toJavaDateFormatString("hh:mm a"), "hh:mm a", "Check am/pm lower case");

  equal(moment().toJavaDateFormatString("h:mm A"), "h:mm A", "Check am/pm upper case single hour");
  equal(moment().toJavaDateFormatString("h:mm a"), "h:mm a", "Check am/pm lower case single hour");

  equal(moment().toJavaDateFormatString("m"), "m", "Check single minute");
  equal(moment().toJavaDateFormatString("h"), "h", "Check single hour (12 hour format)");
  equal(moment().toJavaDateFormatString("H"), "H", "Check single hour (24 hour format)");
});

test("Seconds and milliseconds checks", function () {
  equal(moment().toJavaDateFormatString("HH:mm:ss"), "HH:mm:ss", "Check time with seconds of the minute");
  equal(moment().toJavaDateFormatString("HH:mm:ss.SSS"), "HH:mm:ss.S", "Check time with milliseconds");

  equal(moment().toJavaDateFormatString("s"), "s", "Check just the seconds");
  equal(moment().toJavaDateFormatString("ss"), "ss", "Check just the seconds with leading zero");


  equal(moment().toJavaDateFormatString("S"), "S", "Check just the milliseconds S");
  equal(moment().toJavaDateFormatString("SS"), "S", "Check just the milliseconds SS");
  equal(moment().toJavaDateFormatString("SSS"), "S", "Check just the milliseconds SSS");
});

test("Weekday checks", function () {
  equal(moment().toJavaDateFormatString("ddd"), "E", "Check weekday name short");
  equal(moment().toJavaDateFormatString("dddd"), "EEEE", "Check weekday name long");

  equal(moment().toJavaDateFormatString("DDD"), "D", "Check day in year");

  equal(moment().toJavaDateFormatString("u"), "u", "Check day in week");

  equal(moment().toJavaDateFormatString("W"), "w", "Check week in year");
  equal(moment().toJavaDateFormatString("WW"), "ww", "Check week in year with leading zero");
});