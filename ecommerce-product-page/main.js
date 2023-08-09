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

// Switch the large product image by clicking on the small thumbnails
const selectImg = (img, isMainBox, idx) => {
  let main = isMainBox ? mainImgBox : mainImg;
  let src = main.getAttribute('src');
  let currentNum = src.charAt(23);
  src = src.replace(/\d/, idx+1);
  main.setAttribute('src', src);

  let current = (isMainBox ? imgListBox : imgList).children[currentNum-1];
  current.setAttribute('class', 'thumb');
  img.setAttribute('class', 'active-thumb');  
};

for (let i=0; i<imgList.children.length; i++) {
  let img = imgList.children[i];
  img.addEventListener('click', () => selectImg(img, false, i));
};

for (let i=0; i<imgListBox.children.length; i++) {
  let img = imgListBox.children[i];
  img.addEventListener('click', () => selectImg(img, true, i));
};

const openLightbox = () => {
  if (window.screen.width > 670) {
    darkBack.style.display = "block";
    box.style.display = 'flex';

    let src = mainImg.getAttribute('src');
    mainImgBox.setAttribute('src', src);

    let num = src.charAt(23);
    let thumb = imgListBox.children[num-1];
    thumb.setAttribute('class', 'active-thumb');

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
  let num = Number(src.charAt(23));
  let next = num < 4 ? num +1 : 1;
  src = src.replace(/\d/, next);

  img.setAttribute('src', src);
  imgListBox.children[num-1].setAttribute('class', 'thumb');
  imgListBox.children[next-1].setAttribute('class', 'active-thumb');
};

next.addEventListener('click', () => nextImg(mainImg));
nextBox.addEventListener('click', () => nextImg(mainImgBox));

const prevImg = (img) => {
  let src = img.getAttribute('src');
  let num = Number(src.charAt(23));
  let pre = num > 1 ? num -1 : 4;
  src = src.replace(/\d/, pre);

  img.setAttribute('src', src);
  imgListBox.children[num-1].setAttribute('class', 'thumb');
  imgListBox.children[pre-1].setAttribute('class', 'active-thumb');
};

pre.addEventListener('click', () => prevImg(mainImg));
preBox.addEventListener('click', () => prevImg(mainImgBox));

// Add Cart element opens/closes by clicking on cart button
const cartItems = [];
let sectionCart = document.getElementById('section-cart');
sectionCart.style.display = 'none';

const toggleCart = () => {
  if (sectionCart.style.display != 'none') {
    sectionCart.style.display = 'none';
  } else {
    sectionCart.style.display = 'block';
  };
}

cart.addEventListener('click', toggleCart);

// Product Quantity buttons increment quantity number before adding to cart
let butAddQty = document.getElementById('add-product'); 
let butRmQty = document.getElementById('rm-product'); 
let inputQty = document.getElementById('num-quantity');

const increment = () => {
  inputQty.textContent = Number(inputQty.textContent) + 1;
}

const decrement = () => {
  let value = Number(inputQty.textContent);
  if (value > 0) inputQty.textContent = value - 1;
}

butAddQty.addEventListener('click', increment);
butRmQty.addEventListener('click', decrement);