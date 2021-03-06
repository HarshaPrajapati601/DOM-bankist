'use strict';

///////////////////////////////////////
// Modal window ------------------
 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

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

//Implement smooth scrollinG ----------------- SCROLLS --SMOOTH --------------
btnScrollTo.addEventListener('click', function(e) {
  //get the coordinates for section 1
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  section1.scrollIntoView({
    behavior: 'smooth'
  })
});

//page navigation
//Event Delegation
//1. choose a common parent and add event listener to it
//2. Determine what element originated the event by e.target property
 
document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();
  //Matching strategy
   if(e.target.classList.contains('nav__link')) { // 1.
      const id = e.target.getAttribute('href'); // 2.
      document.querySelector(id).scrollIntoView({ 
        behavior: 'smooth'
      });
   }

})

//Tabs component -------------- +++++ ---------------Tabs clicks

tabsContainer.addEventListener('click', function(e) {
//  if(e.target.classList.contains(' operations__tab') ) {
  const clicked = e.target.closest('.operations__tab'); //dynamiclly setting the closest
   console.log(clicked)

   if(!clicked) return;
   tabs.forEach(tab => {
     tab.classList.remove('operations__content--active')
   })
   clicked.classList.add('operations__content--active');
  
 //Remove the content area before adding
 tabsContent.forEach(tab => {
  tab.classList.remove('operations__content--active')
})
   //Activate the content area
   document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
//  }
})

const handleHover  = function(e) {
  if(e.target.classList.contains('nav__link')) {
    //selecting the target
 const link = e.target;
 //selecting its other nav-link siblings
 const siblings = e.target.closest('.nav').querySelectorAll('.nav__link');
 const logo = e.target.closest('.nav').querySelector('img');
 siblings.forEach(el => {
   if(el !== link) {
     el.style.opacity = this;
   }
 })
 logo.style.opacity = this;
}
}

// -MENU FADE ANIMATION -ON HOVER
nav.addEventListener('mouseover', handleHover.bind(0.5))

nav.addEventListener('mouseout', handleHover.bind(1))
 
//sticky scroll event available on window

const initCoords = section1.getBoundingClientRect();
const navHeader = nav.getBoundingClientRect().height;
window.addEventListener('scroll', function(e) {

  if(window.scrollY > initCoords.top ) nav.classList.add('sticky')
  else  nav.classList.remove('sticky')
})

const stickyNavCallback = function(entries) {
  const[entry] = entries;
  if(!entry.isIntersecting) {
    nav.classList.add('sticky')
  } else {
    nav.classList.remove('sticky')
  }
}

const headerObserver = new IntersectionObserver(stickyNavCallback, {
  root: null,
  threshold: 0, //when the header is completky out of view / 0 percent ovf header is in view
  rootMargin: `-${navHeader}px`
});

headerObserver.observe(header);

// Reveal sections

const allSections = document.querySelectorAll('.section');

const revealSectionCb = function(entries, observer) {
  const [entry] = entries;
  entry.target.classList.remove('section--hidden')

}

const sectionObserver = new IntersectionObserver(revealSectionCb, {
  root: null,
  threshold: 0.15
});
//which section intercepted the viewport

allSections.forEach(function(section) {
  // sectionObserver.observe(section);
  // section.classList.add('section--hidden')
})

//lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');
//called observer when the target intersects the viewport
const loadImgCb = (entries, observer) => {
  const [entry] = entries;
  if(!entry.isIntersecting) return;

  //Replace src with data-src
  entry.target.src =  entry.target.dataset.src;

  entry.target.addEventListener('load', function() {
    entry.target.classList.remove('lazy-img')
  })
  //stop observing
  observer.unobserve(entry.target);
}


const imgObserver = new IntersectionObserver(loadImgCb, {
  root: null,
  threshold: 0,
  rootMargin: '200px' //to load before the threshhold was actully reached
});
imgTargets.forEach(img => imgObserver.observe(img));


//slider component

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
let currentSlide = 0;
let slideLength = slides.length - 1;
const dotsContainer = document.querySelector('.dots');

// slider.style.transform = 'scale(0.5) translateX(-300px)';
// slider.style.overflow = 'visible';
const goToCurrentSlide = (slide) => {
  slides.forEach((s, index) => {
    s.style.transform = `translateX(${100 * (index - slide)}%)`
  })
}
goToCurrentSlide(0)

//slide right

const nextSlide = function() {
  if(currentSlide === slideLength) {
    currentSlide = 0;
  }
  else {
    currentSlide++;
  }
  goToCurrentSlide(currentSlide);
  activateDot(slide);
}

//slide left

const prevSlide = function(){
  if(currentSlide === 0) {
    currentSlide = slideLength;
  }
  else {
    currentSlide--;
  }
  goToCurrentSlide(currentSlide);
  activateDot(slide);
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

//Adding listeners on key press

document.addEventListener('keydown', function(e) {
  e.key === 'ArrowLeft' && nextSlide()
  e.key === 'ArrowRight' && prevSlide()
});

//Creating dots

const createDots = function()  {
  slides.forEach(function(_, i) {
    {
      dotsContainer.insertAdjacentHTML('beforeend', 
      `<button class="dots__dot" data-slide=${i}></button>`)
    }
  })
}

createDots();

const activateDot = (slide) => {
  document.querySelectorAll('.dots__dot').forEach(dot=> {
    dot.classList.remove('dots__dot--active');
  })
  document
    .querySelector(`dots__dot[data-slide]=${slide}`)
    .classList.add('dots__dot--active');
}
activateDot(0);
dotsContainer.addEventListener('click', function(e) {
  if(e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToCurrentSlide(slide);
    activateDot(slide);

  }
})




//Progress bar addition ----------------------- --------------------- ---------------------------------  -------------------

const progressBar = document.getElementById('reading-progress-fill');

function getVerticalScrollPercentage( elm ){
  var p = elm.parentNode
  return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100
}


document.onscroll = function(){ 
  var pos = getVerticalScrollPercentage(document.body)
  progressBar.style.width = `${pos}%`;
}












