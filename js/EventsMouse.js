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
