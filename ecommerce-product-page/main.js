// import url images
let images = [
  '',
  './images/image-product-1.jpg',
  './images/image-product-2.jpg',
  './images/image-product-3.jpg',
  './images/image-product-4.jpg'
];

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

const imgList = document.getElementById('img-list');
const imgListBox = document.getElementById('img-list-box');

// Switch the large product image by clicking on the small thumbnails
const selectImg = (img, isMainBox, idx) => {
  let main = isMainBox ? mainImgBox : mainImg;
  let src = main.getAttribute('src');
  let currentNum = Number(src.match(/(?<=image-product-)[1-4]/)[0]);
  
  main.setAttribute('src', images[idx+1]);

  let current = (isMainBox ? imgListBox : imgList).children[currentNum-1];
  current.setAttribute('class', 'thumb');
  img.setAttribute('class', 'active-thumb');  
};

let imgListItems = imgList.children;

for (let i=0; i<imgListItems.length; i++) {
  let img = imgListItems[i];
  img.addEventListener('click', () => selectImg(img, false, i));
};

let imgBoxListItems = imgListBox.children;
//console.log(imgBoxListItems.length)

for (let i=0; i < imgBoxListItems.length; i++) {
  let img = imgBoxListItems[i];
  //console.log(img)
  img.addEventListener('click', () => selectImg(img, true, i));
};

const openLightbox = () => {
  if (window.screen.width > 670) {
    darkBack.style.display = "block";
    box.style.display = 'flex';

    let src = mainImg.getAttribute('src');
    mainImgBox.setAttribute('src', src);

    let num = Number(src.match(/(?<=image-product-)[1-4]/)[0]);
    let thumb = imgListBox.children[num-1];
    thumb.setAttribute('class', 'active-thumb');

    btnNextPre.style.display = 'flex';
  }
}

const closeLightbox = () => {
  for (element of imgListBox.children) {
    element.setAttribute('class', 'thumb');    
  };

  darkBack.style.display = "none";
  box.style.display = 'none';
  btnNextPre.style.display = 'none';
  
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
  let num = Number(src.match(/(?<=image-product-)[1-4]/)[0]);
  let next = num < 4 ? num +1 : 1;
  let newSrc = images[next];
  
  img.setAttribute('src', newSrc);
  imgListBox.children[num-1].setAttribute('class', 'thumb');
  imgListBox.children[next-1].setAttribute('class', 'active-thumb');
};

next.addEventListener('click', () => nextImg(mainImg));
nextBox.addEventListener('click', () => nextImg(mainImgBox));

const prevImg = (img) => {
  let src = img.getAttribute('src');
  let num = Number(src.match(/(?<=image-product-)[1-4]/)[0]);
  let pre = num > 1 ? num -1 : 4;
  src = images[pre];

  img.setAttribute('src', src);
  imgListBox.children[num-1].setAttribute('class', 'thumb');
  imgListBox.children[pre-1].setAttribute('class', 'active-thumb');
};

pre.addEventListener('click', () => prevImg(mainImg));
preBox.addEventListener('click', () => prevImg(mainImgBox));

// Add Cart element opens/closes by clicking on cart button
let sectionCart = document.getElementById('section-cart');
sectionCart.style.display = 'none';
let cartNum = document.getElementById('num-products');

const updateCart = (quantity) => {
  if (quantity == 0) {
    // show empty cart
    sectionCart.children[1].children[0].style.display = 'block'; 
    sectionCart.children[1].children[1].style.display = 'none'; 
  } else {
    // show filled cart
    sectionCart.children[1].children[0].style.display = 'none'; 
    sectionCart.children[1].children[1].style.display = 'flex'; 

    // update price and quantity
    let price = document.getElementById('product-price').textContent;
    document.getElementsByClassName('total-price-cart')[0].textContent = Number(price) * quantity;
    document.getElementsByClassName('quantity')[0].textContent = quantity;
  }
};

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

// 'Add to cart' button
let butAddToCart = document.getElementById('submit');

const addToCart = () => {
  let value = Number(inputQty.textContent);
  if (value > 0) {
    let cur = Number(cartNum.textContent);
    cur += value;
    cartNum.textContent = cur;
    cartNum.style.visibility = 'visible';

    //update cart element
    updateCart(cur);
  }
}

butAddToCart.addEventListener('click', addToCart);

// Add event to remove items from cart
let butDelete = document.getElementsByClassName('delete')[0];

const removeFromCart = () => {
  cartNum.textContent = 0;
  cartNum.style.visibility = 'hidden';

  //update cart element
  updateCart(0);
}

butDelete.addEventListener('click', removeFromCart);