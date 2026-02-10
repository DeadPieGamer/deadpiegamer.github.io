var originalContent = $('#part-with-age').html();
var alteredContent = replaceAgeInString(originalContent);
$('#part-with-age').html(alteredContent)

function replaceAgeInString(stringWithAge){
    var birthday = new Date(2003, 9, 6, 14, 4)
    stringWithAge = stringWithAge.replace('{age}', calculateAge(birthday))
    return stringWithAge;
}

// Source - https://stackoverflow.com/a/24181701
// Posted by testUserPleaseIgnore, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-08, License - CC BY-SA 4.0

 function calculateAge(birthday) { // birthday is a date
   var ageDifMs = Date.now() - birthday;
   var ageDate = new Date(ageDifMs); // miliseconds from epoch
   return Math.abs(ageDate.getUTCFullYear() - 1970);
 }
