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

// slider code
const btnNext = document.getElementById('next');
const btnPre = document.getElementById('pre');

let slideIndex = 0;

function showNextSlide(n) {
  const slides = document.getElementsByClassName("hero-imgs");
  
  slides[n].animate({
    left: ['0', '-59%'],
    opacity: ['1', '0.5'],
  }, {
    duration: 800,
    timingFunction: 'easy-in-out',
  })
  slides[n].style.left = '-59%';
  slideIndex++;

  if (slideIndex >= slides.length) {slideIndex = 0}
  slides[slideIndex].style.left = '59%';

  slides[slideIndex].animate({
    left: ['59%', '0'],
    opacity: ['0.5', '1'],
  }, {
    duration: 800,
    timingFunction: 'easy-in-out',
  })  
  slides[slideIndex].style.left = 0;
}

function showPreSlide(n) {
  const slides = document.getElementsByClassName("hero-imgs");
  
  slides[n].animate({
    left: ['0', '59%'],
    opacity: ['1', '0.5'],
  }, {
    duration: 800,
    timingFunction: 'easy-in-out',
  })
  slides[n].style.left = '59%';
  slideIndex--;

  if (slideIndex < 0) {slideIndex = slides.length - 1}
  slides[slideIndex].style.left = '-59%';

  slides[slideIndex].animate({
    left: ['-59%', '0'],
    opacity: ['0.5', '1'],
  }, {
    duration: 800,
    timingFunction: 'easy-in-out',
  })  
  slides[slideIndex].style.left = 0;
}

btnNext.addEventListener('click', () => {
  console.log('cur',slideIndex)
  showNextSlide(slideIndex);
  console.log('next',slideIndex)
})

btnPre.addEventListener('click', () => {
  console.log('cur',slideIndex)
  showPreSlide(slideIndex);
  console.log('next',slideIndex)
})