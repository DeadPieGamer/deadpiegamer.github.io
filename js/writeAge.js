var originalContent = $("#part-with-age").html();
if (originalContent != null) {
  var alteredContent = replaceAgeInString(originalContent);
  $("#part-with-age").html(alteredContent);
}

function replaceAgeInString(stringWithAge) {
  var birthday = new Date(2003, 9, 6, 14, 4);
  stringWithAge = stringWithAge.replace("{age}", calculateAge(birthday));
  return stringWithAge;
}

// Source - https://stackoverflow.com/a/24181701
// Posted by testUserPleaseIgnore, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-08, License - CC BY-SA 4.0

function calculateAge(birthday) {
  // birthday is a date
  var ageDifMs = Date.now() - birthday;
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  ageDate = Math.abs(ageDate.getUTCFullYear() - 1970);
  return ageDate;
}

$(".replace-year").map(function getAndReplaceYears() {
  const ogContent = this.innerHTML;
  const altrdContent = replaceYearInString(ogContent);
  this.innerHTML = altrdContent;
});

function replaceYearInString(stringWithYear) {
  function convertYearToYearsAgo(str, p1, offset, s) {
    const yearsSince = calculateAge(new Date(p1, 0, 1))
    return `${yearsSince > 0 ? yearsSince : "Less than 1"} year${yearsSince > 1 ? "s" : ""}`;
  }

  return stringWithYear.replace(/{year:(\d{4})}/g, convertYearToYearsAgo);
}
