//Add interactive menu for mobile
let menu = document.getElementById('menu');
let darkBack = document.getElementById("dark-background");
let butCloseMenu = document.getElementById("closeMenu");
let butBurgerMenu = document.getElementById("burger-menu");

const openMenu = () => {
  darkBack.style.display = "block";
  menu.style.left = 0;
}

butBurgerMenu.addEventListener('click', openMenu);

const closeMenu = () => {
  menu.style.left = '-250px';
  darkBack.style.display = "none";
}

darkBack.addEventListener("click", closeMenu);
butCloseMenu.addEventListener("click", closeMenu);

//Add hover state for cart button
let cart = document.getElementById("cart");

const hover = (el, display = 'inline-block') => {
  el.children[0].style.display = 'none';
  el.children[1].style.display = display;
};

const leave = (el, display = 'inline-block') => {
  el.children[1].style.display = 'none';
  el.children[0].style.display = display;
};

cart.addEventListener("mouseenter", () => hover(cart));

cart.addEventListener('mouseleave', () => leave(cart));

// Open lightbox when clicking on large img
let box = document.getElementById("lightbox");
let bigImg = document.getElementById("img-big");
let btnCloseLightbox = document.getElementById("btn-close-lightbox");
let btnNextPre = document.getElementById("next-pre-box");

let mainImg = document.getElementById('main-img');
let mainImgBox = document.getElementById('main-img-lightbox');

const imgList = document.getElementsByClassName('img-list')[0];
const imgListBox = document.getElementsByClassName('img-list')[1];

const openLightbox = () => {
  if (window.screen.width > 670) {
    darkBack.style.display = "block";
    box.style.display = 'flex';

    let src = mainImg.getAttribute('src');
    mainImgBox.setAttribute('src', src);

    let num = src.charAt(23);
    console.log(num, imgListBox.children[num-1]);
    let thumb = imgListBox.children[num-1];
    if (thumb.getAttribute('class') == 'thumb') {
      thumb.setAttribute('class', 'active-thumb');
    }

    btnNextPre.style.display = 'flex';
  }
}

const closeLightbox = () => {
  darkBack.style.display = "none";
  box.style.display = 'none';
  btnNextPre.style.display = 'none';
  for (element of imgListBox.children) {
    element.setAttribute('class', 'thumb');    
  };
}

bigImg.addEventListener('click', openLightbox);
darkBack.addEventListener("click", closeLightbox);
btnCloseLightbox.addEventListener("click", closeLightbox);

btnCloseLightbox.addEventListener("mouseenter", () => hover(btnCloseLightbox));
btnCloseLightbox.addEventListener("mouseleave", () => leave(btnCloseLightbox));

// Add hover state for next-pre buttons
let preBox = document.getElementById("butt-pre-box");
let nextBox = document.getElementById("butt-next-box");

preBox.addEventListener('mouseenter', () => hover(preBox));
preBox.addEventListener('mouseleave', () => leave(preBox));

nextBox.addEventListener('mouseenter', () => hover(nextBox));
nextBox.addEventListener('mouseleave', () => leave(nextBox));

// Add click event on next-pre buttons
let pre = document.getElementById("butt-pre");
let next = document.getElementById("butt-next");

const nextImg = (img) => {
  let src = img.getAttribute('src');
  //console.log(src);
  let num = Number(src.charAt(23));
  //console.log(num);
  src = src.replace(/\d/, num < 4 ? num +1 : 1);
  //console.log(src);

  img.setAttribute('src', src);
};

next.addEventListener('click', () => nextImg(mainImg));
nextBox.addEventListener('click', () => nextImg(mainImgBox));

const prevImg = (img) => {
  let src = img.getAttribute('src');
  //console.log(src);
  let num = Number(src.charAt(23));
  //console.log(num);
  src = src.replace(/\d/, num > 1 ? num -1 : 4);
  //console.log(src);

  img.setAttribute('src', src);
};

pre.addEventListener('click', () => prevImg(mainImg));
preBox.addEventListener('click', () => prevImg(mainImgBox));
