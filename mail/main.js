/*define allowed email addresses*/
var allowed_emails = [
  "mail001@mail.com",
  "mail002@mail.com",
  "mail003@mail.com",
  "mail004@mail.com",
  "mail005@mail.com",
]

/*prompt user to give own addresses*/
var userEmail = prompt('Il tuo indirizzo email');

/*define test variable*/
var email_match = false;

/*check against allowed addresses*/
for (var i = 0; i < allowed_emails.length; i++) {
  if (userEmail == allowed_emails[i]) {
    email_match = true;
  }
}

/*show findings*/
if (email_match == true) {
  document.writeln('access granted');
} else {
  document.writeln('access denied');
}
