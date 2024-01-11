// Add click event on burger menu icon for mobile device
const iconMenu = document.getElementById('burger-icon');
const logo = document.getElementById('logo');
const nav = document.getElementsByTagName('nav')[0];
const header = document.getElementsByTagName('header')[0];
const darkBackground = document.getElementById('dark-background');

const openMenu = () => {
  header.style.backgroundColor = 'white';
  darkBackground.style.display = 'block';
  iconMenu.setAttribute('src', './images/icon-close.svg');
  logo.style.display = 'none';
  nav.style.marginLeft = '0';
  iconMenu.setAttribute('active', 'true');
}

iconMenu.addEventListener('click', () => {
  let isActive = iconMenu.getAttribute('active');
  console.log(isActive)
  if (isActive == 'false' ) {
    console.log('open Menu')
    openMenu()
  };
})