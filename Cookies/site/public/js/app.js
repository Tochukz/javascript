/* Create a cookie */
document.cookie = "username=John Doe" 
// This cookie expires and is deleted when the window is closed. It is considered a session cookie.

/* Create a cookie with expiry date */
document.cookie = "user=John Smith; expires=Wed, 24 Dec 2020 08:55:58 UTC";

/* The path parameter tells the browser the path the cookie belongs to */
document.cookie = "admin2=John Kelvin; expires=Wed, 24 Dec 2020 08:55:58 UTC; path='/home'";
// This path doesn't seem to work 

/* Reading a cookie */
const cookie = document.cookie;
// This reads all the cookie as a single string including those set by other sites
// console.log(cookie);

function processCookies(cookieStr) {
  const content = $('#content');
  const cookies = cookieStr.split(';');
  cookies.forEach(ck => {
      content.append(`<p>${ck}</p>`)
  });
}
processCookies(cookie);


/* Update an existing cookie */
document.cookie = "user=Johnny Bravo; expires=Wed, 24 Dec 2020 08:55:58 UTC";

/* Delete a cookie by setting it expire parameter to past date */
document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
// remember to specify the path when you delete a cookie