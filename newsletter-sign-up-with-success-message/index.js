// Grab values from the submitted form in the URL
const email = new URLSearchParams(window.location.search).get('email');
//console.log(email);

// Populating the span element
const span = document.getElementById("signed-email");
span.innerText = email;