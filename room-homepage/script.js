const iconMenu = document.getElementById('burger-icon');
const logo = document.getElementById('logo');
const nav = document.getElementsByTagName('nav')[0];
const header = document.getElementsByTagName('header')[0];
const darkBackground = document.getElementById('dark-background');
const headerBackground = document.getElementById('header-background');

headerBackground.animate({
  backgroundColor: ['transparent', '#000000'],
  opacity: [1, 0.5],
}, {
  timeline: new ScrollTimeline({
    source: document.documentElement,
  }),
})

// Add click event on burger menu icon for mobile device

const openMenu = () => {
  header.style.backgroundColor = 'white';
  darkBackground.style.display = 'block';
  iconMenu.setAttribute('src', './images/icon-close.svg');
  logo.style.display = 'none';
  nav.style.marginLeft = '0';
  iconMenu.setAttribute('active', 'true');
}

const closeMenu = () => {
  header.style.backgroundColor = 'unset';
  darkBackground.style.display = 'none';
  iconMenu.setAttribute('src', './images/icon-hamburger.svg');
  logo.style.display = 'block';
  nav.style.marginLeft = '100vw';
  iconMenu.setAttribute('active', 'false');
}

iconMenu.addEventListener('click', () => {
  let isActive = iconMenu.getAttribute('active');
  if (isActive == 'false' ) openMenu();
  else closeMenu();
})

// ---------------------------------- slider code ------------------------------------
const btnNext = document.getElementById('next');
const btnPre = document.getElementById('pre');

let slideIndex = 0;
const imgWidth = window.screen.width < 910 ? 100 : 59;

function showNextSlide(n) {
  const slides = document.getElementsByClassName("hero-imgs");
  const articles = document.getElementById('article-conteiner').children;
  const articleBg = articles[0];
  
  // animate current image that is going out
  slides[n].animate({
    left: ['0', `-${imgWidth}%`],
    opacity: ['1', '0.5'],
    display: ['block', 'none'],
  }, {
    duration: 800,
    timingFunction: 'easy-out',
  })
  slides[n].style.left = `-${imgWidth}%`;
  slides[n].style.display = 'none';

  // hidden current article
  articleBg.animate({
    backgroundColor: ['transparent', '#ffffff'],
  }, {
    duration: 800,
    timingFunction: 'easy-out',
  })
  articleBg.style.backgroundColor = '#ffffff';
  articles[n+1].style.display = 'none';

  // set next index
  slideIndex++;

  // if it's the end return to initial index
  if (slideIndex >= slides.length) {slideIndex = 0}

  // animate next image that is going in
  slides[slideIndex].style.left = `${imgWidth}%`;
  slides[slideIndex].style.display = 'block';

  slides[slideIndex].animate({
    left: [`${imgWidth}%`, '0'],
    opacity: ['0.5', '1'],
  }, {
    duration: 800,
    timingFunction: 'easy-in',
  })  
  slides[slideIndex].style.left = 0;

  // display correct article
  articles[slideIndex+1].style.display = 'block';
  articleBg.animate({
    backgroundColor: ['#ffffff', 'transparent'],
  }, {
    duration: 800,
    timingFunction: 'easy-in',
  })
  articleBg.style.backgroundColor = 'transparent';
}

function showPreSlide(n) {
  const slides = document.getElementsByClassName("hero-imgs");
  const articles = document.getElementById('article-conteiner').children;
  const articleBg = articles[0];
  
  // animate current image is going out
  slides[n].animate({
    left: ['0', `${imgWidth}%`],
    opacity: ['1', '0.5'],
    display: ['block', 'none'],
  }, {
    duration: 800,
    timingFunction: 'easy-out',
  })
  slides[n].style.left = `${imgWidth}%`;
  slides[n].style.display = 'none';

  // hidden current article
  articleBg.animate({
    backgroundColor: ['transparent', '#ffffff'],
  }, {
    duration: 800,
    timingFunction: 'easy-out',
  })
  articleBg.style.backgroundColor = '#ffffff';
  articles[n+1].style.display = 'none';

  // set next index
  slideIndex--;

  // if it's the end return to initial index
  if (slideIndex < 0) {slideIndex = slides.length - 1}
  
  // animate next image that is going in
  slides[slideIndex].style.left = `-${imgWidth}%`;
  slides[slideIndex].style.display = 'block';
  slides[slideIndex].animate({
    left: [`-${imgWidth}%`, '0'],
    opacity: ['0.5', '1'],
  }, {
    duration: 800,
    timingFunction: 'easy-in',
  })  
  slides[slideIndex].style.left = 0;

  // display correct article
  articles[slideIndex+1].style.display = 'block';
  articleBg.animate({
    backgroundColor: ['#ffffff', 'transparent'],
  }, {
    duration: 800,
    timingFunction: 'easy-in',
  })
  articleBg.style.backgroundColor = 'transparent';
}

btnNext.addEventListener('click', () => {
  showNextSlide(slideIndex);
})

btnPre.addEventListener('click', () => {
  showPreSlide(slideIndex);
})

// ---------------------------------- keypress event for slider ------------------------------------
window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    switch (event.key) {
      case "ArrowLeft":
        // Do something for "left arrow" key press.
        showPreSlide(slideIndex);
        break;
      case "ArrowRight":
        // Do something for "right arrow" key press.
        showNextSlide(slideIndex);
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  },
  true,
);

// ---------------------------------- scroll event on slider ------------------------------------
const hero = document.getElementById('hero-img');
hero.addEventListener('wheel', e => {
  e.preventDefault();
  if (e.deltaY > 10 || e.deltaX < -10) showPreSlide(slideIndex);
  else if (e.deltaY < -10 || e.deltaX > 10) showNextSlide(slideIndex);
})