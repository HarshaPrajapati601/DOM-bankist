//Dom TRaversing    - Walking through the dom   ------------------------------------------ ------------------------------------------

// const h1 = document.querySelector('h1');

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children); //only7 fpr the direct children -- 1, 2 ,3 

// // /going upwards : parents  ------------------------------------------ ------------------------------------------
// console.log(h1.parentElement);
// console.log(h1.parentNode);

//closest parent element - used for event delegation  ------------------------------------------ ------------------------------------------
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// h1.closest('h1').style.background = 'var(--gradient-primary)'

// h1.firstElementChild.style.color = 'red';

//sideways ------------------------------------------ ------------------------------------------

// console.log(h1.previousElementSibling)
// console.log(h1.nextElementSibling)

// console.log(h1.previousSibling)
// console.log(h1.nextSibling)

//to get the parent element and then access the direct children  ------------------------------------------ ------------------------------------------

// console.log(h1.parentElement.children)

// [...h1.parentElement.children].forEach(function(element) {
//   if(element !== h1) element.style.transform = 'scale(0.5)'
  
// })
