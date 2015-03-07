module("From Java Format Tests");

test("Date checks", function () {
  equal(moment().toMomentFormatString("dd."), "DD.", "Check day");
  equal(moment().toMomentFormatString("dd.MM."), "DD.MM.", "Check day and Month");
  equal(moment().toMomentFormatString("dd.MM.yyyy"), "DD.MM.YYYY", "Check date");

  equal(moment().toMomentFormatString("d.M.yyyy"), "D.M.YYYY", "Check date single day and month");

  equal(moment().toMomentFormatString("yyyy"), "YYYY", "Check just the year with 4 digits");
  equal(moment().toMomentFormatString("yy"), "YY", "Check just the year with 2 digits");
  equal(moment().toMomentFormatString("y"), "YYYY", "Check just the year with 1 digit resolves to year with 4 digits");

  equal(moment().toMomentFormatString("M"), "M", "Check just the month");
  equal(moment().toMomentFormatString("MM"), "MM", "Check just the month with leading zero");

  equal(moment().toMomentFormatString("MMM"), "MMM", "Check the month name short");
  equal(moment().toMomentFormatString("MMMM"), "MMMM", "Check the month name long");
});

test("Hour and minute checks", function () {
  equal(moment().toMomentFormatString("HH:mm"), "HH:mm", "Check 24h time");
  equal(moment().toMomentFormatString("hh:mm"), "hh:mm", "Check 12h time");

  equal(moment().toMomentFormatString("hh:mm A"), "hh:mm A", "Check am/pm upper case");
  equal(moment().toMomentFormatString("hh:mm a"), "hh:mm a", "Check am/pm lower case");

  equal(moment().toMomentFormatString("h:mm A"), "h:mm A", "Check am/pm upper case single hour");
  equal(moment().toMomentFormatString("h:mm a"), "h:mm a", "Check am/pm lower case single hour");

  equal(moment().toMomentFormatString("m"), "m", "Check single minute");
  equal(moment().toMomentFormatString("h"), "h", "Check single hour (12 hour format)");
  equal(moment().toMomentFormatString("H"), "H", "Check single hour (24 hour format)");
});

test("Seconds and milliseconds checks", function () {
  equal(moment().toMomentFormatString("HH:mm:ss"), "HH:mm:ss", "Check time with seconds of the minute");
  equal(moment().toMomentFormatString("HH:mm:ss.SSS"), "HH:mm:ss.SSS", "Check time with milliseconds");

  equal(moment().toMomentFormatString("s"), "s", "Check just the seconds");
  equal(moment().toMomentFormatString("ss"), "ss", "Check just the seconds with leading zero");


  equal(moment().toMomentFormatString("S"), "SSS", "Check just the milliseconds S");
  equal(moment().toMomentFormatString("SS"), "SSS", "Check just the milliseconds SS");
  equal(moment().toMomentFormatString("SSS"), "SSS", "Check just the milliseconds SSS");
});

test("Weekday checks", function () {
  equal(moment().toMomentFormatString("E"), "ddd", "Check weekday name short");
  equal(moment().toMomentFormatString("EEEE"), "dddd", "Check weekday name long");

  equal(moment().toMomentFormatString("D"), "DDD", "Check day in year");

  equal(moment().toMomentFormatString("u"), "E", "Check day in week");

  equal(moment().toMomentFormatString("w"), "W", "Check week in year");
  equal(moment().toMomentFormatString("ww"), "WW", "Check week in year with leading zero");
});

test("Timezone checks", function () {
  equal(moment().toMomentFormatString("z"), "ZZ", "Check timezone short");
  equal(moment().toMomentFormatString("zzzz"), "Z", "timezone long");

  equal(moment().toMomentFormatString("Z"), "ZZ", "Check day in year");

  equal(moment().toMomentFormatString("X"), "ZZ", "Check week in year");
  equal(moment().toMomentFormatString("XX"), "ZZ", "Check week in year with leading zero");
  equal(moment().toMomentFormatString("XXX"), "Z", "Check week in month");
});