// Your code goes here
let navLinks = document.querySelector('.intro');
navLinks.addEventListener('mouseenter',(event)=>{
    event.target.style.backgroundColor = 'pink';
    
});

let body = document.querySelector('body');
body.addEventListener('onscroll', (event)=>{
    event.target.style.backgroundColor = 'lightgreen';
});




