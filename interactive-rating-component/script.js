// -------  toggle checked option for rating status ---------------------------------

const ratingList = document.getElementById('select-rating');

const toggleCheck = (el) => {
  if (!el) return;
  let checked = el.getAttribute('aria-selected');
  el.setAttribute('aria-selected', checked == 'true' ? 'false' : 'true');
}

function checkClickHandler (event) {
  let checked = document.querySelector("li[aria-selected='true']");
  toggleCheck(checked);
  toggleCheck(event.target);
}

function checkKeyHandler (event) {
  let checked = document.querySelector("li[aria-selected='true']");
  if (!checked) {
    checked = event.target.firstElementChild;
    toggleCheck(checked);
  } else {
    //console.log(event.key, checked.getAttribute('value'))
    let value = checked.getAttribute('value');

    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        //move ->
        toggleCheck(checked);
        if (Number(value) < 5) {
          toggleCheck(checked.nextElementSibling);
        } else {
          toggleCheck(event.target.firstElementChild);
        }
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        //move <-
        toggleCheck(checked);
        if (Number(value) > 1) {
          toggleCheck(checked.previousElementSibling);
        } else {
          toggleCheck(event.target.lastElementChild);
        }
        break;
      default: return;
    }
  }

}

ratingList.addEventListener('click', checkClickHandler);
ratingList.addEventListener('keydown', checkKeyHandler);

//--------------- submit valid rating ---------------------------
const submitBtn = document.getElementById('submit-btn');
let rating = 0;

const validateRating = () => {
  let checked = document.querySelector("li[aria-selected='true']");
  if (checked) rating = Number(checked.getAttribute('value'));
  else alert('Please select a value before confirming');
}

submitBtn.addEventListener('click', () => {
  validateRating();
  if (rating) {
    //change message status --> thank you
    let sections = document.getElementsByTagName('section');
    sections[0].style.display = 'none';
    sections[1].style.display = 'flex';
  }
});