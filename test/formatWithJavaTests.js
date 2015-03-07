module("From Java Format Tests");

test("Date checks", function () {
  equal(moment("2013-12-24 14:30").formatWithJDF("dd."), "24.", "Check day");
  equal(moment("2013-12-24 14:30").formatWithJDF("dd.MM."), "24.12.", "Check day and Month");
  equal(moment("2013-12-24 14:30").formatWithJDF("dd.MM.yyyy"), "24.12.2013", "Check date");

  equal(moment("2013-12-24 14:30").formatWithJDF("d.M.yyyy"), "24.12.2013", "Check date single day and month");
  equal(moment("2013-07-04 14:30").formatWithJDF("d.M.yyyy"), "4.7.2013", "Check date single day and month");

  equal(moment("2013-07-04 14:30").formatWithJDF("yyyy"), "2013", "Check just the year with 4 digits");
  equal(moment("2013-07-04 14:30").formatWithJDF("yy"), "13", "Check just the year with 2 digits");
  equal(moment("2013-07-04 14:30").formatWithJDF("y"), "2013", "Check just the year with 1 digit resolves to 4 digits");

  equal(moment("2013-07-04 14:30").formatWithJDF("M"), "7", "Check just the month");
  equal(moment("2013-07-04 14:30").formatWithJDF("MM"), "07", "Check just the month with leading zero");

  equal(moment("2013-07-04 14:30").formatWithJDF("MMM"), "Jul", "Check the month name short");
  equal(moment("2013-07-04 14:30").formatWithJDF("MMMM"), "July", "Check the month name long");
});

test("Hour and minute checks", function () {
  equal(moment("2013-12-24 14:30").formatWithJDF("HH:mm"), "14:30", "Check 24h time");
  equal(moment("2013-12-24 14:30").formatWithJDF("hh:mm"), "02:30", "Check 12h time");

  equal(moment("2013-12-24 14:30").formatWithJDF("hh:mm A"), "02:30 PM", "Check pm upper case");
  equal(moment("2013-12-24 14:30").formatWithJDF("hh:mm a"), "02:30 pm", "Check pm lower case");
  equal(moment("2013-12-24 04:30").formatWithJDF("hh:mm A"), "04:30 AM", "Check am upper case");
  equal(moment("2013-12-24 04:30").formatWithJDF("hh:mm a"), "04:30 am", "Check am lower case");

  equal(moment("2013-12-24 14:09").formatWithJDF("h:mm A"), "2:09 PM", "Check pm upper case single hour");
  equal(moment("2013-12-24 14:09").formatWithJDF("h:mm a"), "2:09 pm", "Check pm lower case single hour");
  equal(moment("2013-12-24 04:09").formatWithJDF("h:mm A"), "4:09 AM", "Check am upper case single hour");
  equal(moment("2013-12-24 04:09").formatWithJDF("h:mm a"), "4:09 am", "Check pm lower case single hour");

  equal(moment("2013-12-24 14:09").formatWithJDF("m"), "9", "Check single minute");
  equal(moment("2013-12-24 14:09").formatWithJDF("h"), "2", "Check single hour (12 hour format)");
  equal(moment("2013-12-24 14:09").formatWithJDF("H"), "14", "Check single hour (24 hour format)");
});

test("Seconds and milliseconds checks", function () {
  equal(moment("2013-12-24 14:30:49.257").formatWithJDF("HH:mm:ss"), "14:30:49", "Check time with seconds of the minute");
  equal(moment("2013-12-24 14:30:49.257").formatWithJDF("HH:mm:ss.SSS"), "14:30:49.257", "Check time with milliseconds");

  equal(moment("2013-12-24 14:30:09.257").formatWithJDF("s"), "9", "Check just the seconds");
  equal(moment("2013-12-24 14:30:09.257").formatWithJDF("ss"), "09", "Check just the seconds with leading zero");


  equal(moment("2013-12-24 14:30:49.257").formatWithJDF("S"), "257", "Check just the milliseconds S");
  equal(moment("2013-12-24 14:30:49.257").formatWithJDF("SS"), "257", "Check just the milliseconds SS");
  equal(moment("2013-12-24 14:30:49.257").formatWithJDF("SSS"), "257", "Check just the milliseconds SSS");
});

test("Weekday checks", function () {
  equal(moment("2013-12-24 14:30").formatWithJDF("E"), "Tue", "Check weekday name short");
  equal(moment("2013-12-24 14:30").formatWithJDF("EEEE"), "Tuesday", "Check weekday name long");

  equal(moment("2013-12-24 14:30").formatWithJDF("D"), "358", "Check day in year");

  equal(moment("2013-12-10 14:30").formatWithJDF("u"), "2", "Check day in week");

  equal(moment("2013-01-10 14:30").formatWithJDF("w"), "2", "Check week in year");
  equal(moment("2013-01-10 14:30").formatWithJDF("ww"), "02", "Check week in year with leading zero");
});

test("Timezone checks", function () {
  equal(moment("2013-12-24 14:30").utc().formatWithJDF("z"), "+0000", "Check timezone short");
  equal(moment("2013-12-24 14:30").utc().formatWithJDF("zzzz"), "+00:00", "timezone long");

  equal(moment("2013-12-24 14:30").utc().formatWithJDF("Z"), "+0000", "Check day in year");

  equal(moment("2013-01-10 14:30").utc().formatWithJDF("X"), "+0000", "Check week in year");
  equal(moment("2013-01-10 14:30").utc().formatWithJDF("XX"), "+0000", "Check week in year with leading zero");
  equal(moment("2013-01-10 14:30").utc().formatWithJDF("XXX"), "+00:00", "Check week in month");
});