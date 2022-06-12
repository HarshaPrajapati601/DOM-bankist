//Implement smooth scrollinG
btnScrollTo.addEventListener('click', function(e) {
    //get the coordinates for section 1
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);
    console.log(e.target.getBoundingClientRect());
})
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

     //not effecient as we are attaching the event to 1 or 100000 elements
 //so that's y we use event delegation
// document.querySelectorAll('.nav__link').forEach(function(ele) {
//   ele.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ 
//       behavior: 'smooth'
//     })
//     console.log("links")
//   })
// })

