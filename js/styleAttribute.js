
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