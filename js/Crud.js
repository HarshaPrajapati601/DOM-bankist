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