//Event bubbling

// const randomColorGenerator = (min, max) => Math.floor(Math.random() * ( max - min + 1) + min);

// const randomColor = (e) =>  `rgb(${randomColorGenerator(0, 122)}, ${randomColorGenerator(0, 255)}, ${randomColorGenerator(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function(e) {
// //   this.style.backgroundColor = randomColor();
// // console.log("1", e.target, e.currentTarget)

// //stop propagation
// e.stopPropagation();
// })

// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   // console.log("2", e.target, e.currentTarget)
//   // this.style.backgroundColor = randomColor();
// })

// document.querySelector('.nav').addEventListener('click', function(e) {
//   // this.style.backgroundColor = randomColor();
//   // console.log("3", e.target, e.currentTarget)
// })

 //to listen to capture events
// document.querySelector('.nav').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log("3", e.target, e.currentTarget)
// }, true)

//Event Delegation
//choose a common parent and add event listener to it
//Determine what element originated the event by e.target property