const ratingList = document.getElementById('select-rating');

const toggleCheck = (el) => {
  if (!el) return;
  let checked = el.getAttribute('aria-selected');
  el.setAttribute('aria-selected', checked == 'true' ? 'false' : 'true');
}

function checkHandler (event) {
  let checked = document.querySelector("li[aria-selected='true']");
  toggleCheck(checked);
  toggleCheck(event.target);
}

ratingList.addEventListener('click', checkHandler);
ratingList.addEventListener('keydown', checkHandler);