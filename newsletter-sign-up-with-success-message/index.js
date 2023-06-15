// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);
console.log(words.get('email'));