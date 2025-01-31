let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
 searchBtn.classList.remove('fa-times');
 searchBar.classList.remove('active');
 menu.classList.remove('fa-times');
 navbar.classList.remove('active');
 loginForm.classList.remove('active');
}

// Navbar Toggle --> Toggles the mobile navigation menu when the user clicks the menu icon (#menu-bar).
menu.addEventListener('click', () => {
 menu.classList.toggle('fa-times');
 navbar.classList.toggle('active');
 });

// Search Bar toggle -->Shows/hides the search bar when clicking the search button.
searchBtn.addEventListener('click', () => {
 searchBtn.classList.toggle('fa-times');
 searchBar.classList.toggle('active');
 });

// Login form Popup --> Clicking "Login" opens the form, clicking "Close" hides it
 formBtn.addEventListener('click', () => {
 loginForm.classList.add('active');
 });

 formClose.addEventListener('click', () => {
 loginForm.classList.remove('active');
 });

// Video Switching -> 

videoBtn.forEach(btn =>{
 btn.addEventListener('click', ()=>{
  document.querySelector('.controls .active').classList.remove('active'); //remmove active video
  btn.classList.add('active');  // add the active class
  let src = btn.getAttribute('data-src');
  document.querySelector('#video-slider').src= src;
 });
});


// Swiper Sliders for Reviews

var swiper = new Swiper(".review-slider", {
 spaceBetween: 20,
 loop:true,
 autoplay: {
  delay: 2500,
  disableOnInteraction: false,
 },
 breakpoints: {
  640: {
   slidesPerView: 1,
  },
  768: {
   slidesPerView: 2,
  },
  1024: {
   slidesPerView: 3,
  },
 },
});


// Swiper Sliders for Brands logos

var swiper = new Swiper(".brand-slider", {
 spaceBetween: 20,
 loop:true,
 autoplay: {
  delay: 2500,
  disableOnInteraction: false,
 },
 breakpoints: {
  450: {
   slidesPerView: 2,
  },
  768: {
   slidesPerView: 3,
  },
  991: {
   slidesPerView: 4,
  },
  1200: {
   slidesPerView: 5,
  },
 },
});


/*
 Feature	Function
Navbar Toggle	Opens/closes menu on click
Search Bar Toggle	Shows/hides search bar on click
Login Form	Opens when clicking "Login", closes on "X"
Auto Close on Scroll	Closes navbar, search, and login form when scrolling
Video Switcher	Updates video when clicking a button
Review Slider	Auto-scrolls reviews
Brand Slider	Auto-scrolls brand logos

*/









