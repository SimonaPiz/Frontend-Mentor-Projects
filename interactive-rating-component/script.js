// -------  toggle checked option for rating status ---------------------------------

const toggleCheck = (el) => {
  if (!el) return;
  let checked = el.getAttribute('checked');
  el.setAttribute('checked', checked == 'true' ? 'false' : 'true');
  el.nextElementSibling.setAttribute('class', checked == 'true' ? '' : 'checked');
}

// ------ Add input's events -------------------
const inputs = document.querySelectorAll("input[type='radio']");

inputs.forEach(input => {
  // ------ Add hover/focus state for input's labels -------------------
  input.addEventListener('focusin', (event) => {
    let checked = document.querySelector("input[checked='true']");
    toggleCheck(checked);
    toggleCheck(event.target);
  })
});

//--------------- submit valid rating ---------------------------
const submitBtn = document.getElementById('submit-btn');
let rating = 0;

const validateRating = () => {
  let checked = document.querySelector("input[checked='true']");
  if (checked) rating = Number(checked.getAttribute('value'));
  else alert('Please select a value before confirming');
}

submitBtn.addEventListener('click', () => {
  validateRating();
  if (rating) {
    let ratingResult = document.getElementById('rating-result-num');
    ratingResult.innerText = rating;
    
    //change message status --> thank you
    let sections = document.getElementsByTagName('section');
    sections[0].style.display = 'none';
    sections[1].style.display = 'flex';
  }
});