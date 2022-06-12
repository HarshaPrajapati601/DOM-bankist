'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Implement smooth scrollinG
btnScrollTo.addEventListener('click', function(e) {
  //get the coordinates for section 1
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
 //current scrolling posiition
  // console.log(window.pageXOffset, pageYOffset );
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //    s1coords.top + window.pageYOffset
  //    );

  //old way manually
  // window.scrollTo({
  //   left:  s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // })

    //new way  only for modern browsers
  section1.scrollIntoView({
    behavior: 'smooth'
  })
});

//page navigation

document.querySelectorAll('.nav__link').forEach(function(ele) {
  ele.addEventListener('click', function(e) {
    e.preventDefault();
    console.log("linkss")
  })
})
 //returns a nodelist
 






// CRUD OPERATIONS --------------------------

console.log(document.documentElement)

//creates a dom element.. but its not yet in dom
const message = document.createElement('div');
//add classes to it
message.classList.add('cookie-message');
//add text
// message.textContent = 'We use cookies to improve the analytics and functionlity';
message.innerHTML =  `We use cookies to improve the analytics and functionlity.
 <button class="btn btn--close-cookie">Got it!</button>`;

//  header.prepend(message);
 header.append(message);
//  header.before(message); //before the header as a sibling
//  header.after(message); //after the header as a sibling

//Delete the element
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove();
})


// STYLE ATTRIBUTE AND CLASSES --------------------------

message.style.backgroundColor = '#37383d';
message.style.width = '120%'

// console.log(getComputedStyle(message).height)

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

//css custom properties

//root property changing th style of page
document.documentElement.style.setProperty('--color-primary', 'blue');

//Attributes -src, class , id , href --only standard properties

const logo = document.querySelector('.nav__logo');
//set 
logo.alt = 'Beautfili'
logo.setAttribute('company', 'harsha')
logo.getAttribute('src')

//Data attributtes --start with data




//Events - s//Mouse enter

const h1  = document.querySelector('h1');
const alertH1 =  function(e) {
  alert("from heading")
};
//this is better to listen for the event once
h1.addEventListener('mouseenter', alertH1 );

// //for mouseenter --old school
setTimeout(() => h1.removeEventListener('mouseenter', alertH1
), 2000);

// h1.onmouseenter = function(e) {
//   alert("from heading")
// }

//Event bubbling

const randomColorGenerator = (min, max) => Math.floor(Math.random() * ( max - min + 1) + min);

const randomColor = (e) =>  `rgb(${randomColorGenerator(0, 122)}, ${randomColorGenerator(0, 255)}, ${randomColorGenerator(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
// console.log("1", e.target, e.currentTarget)

//stop propagation
e.stopPropagation();
})

document.querySelector('.nav__links').addEventListener('click', function(e) {
  // console.log("2", e.target, e.currentTarget)
  // this.style.backgroundColor = randomColor();
})

document.querySelector('.nav').addEventListener('click', function(e) {
  // this.style.backgroundColor = randomColor();
  // console.log("3", e.target, e.currentTarget)
})

 //to listen to capture events
// document.querySelector('.nav').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log("3", e.target, e.currentTarget)
// }, true)



