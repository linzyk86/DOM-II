// Your code goes here
//mouseenter
let welcome = document.querySelector('.intro');
welcome.addEventListener('mouseenter',(event)=>{
    event.target.style.backgroundColor = 'pink';
     event.stopPropagation();   

});

//mouseleave
let body = document.querySelector('body');
body.addEventListener('mouseleave', (event)=>{
    event.target.style.backgroundColor = 'green';
     event.stopPropagation();   

    });

//dblclick
let h2 = document.querySelectorAll('h2');
h2.addEventListener('dblclick', (event)=>{
 event.target.style.color = 'purple';
 event.stopPropagation();   
});




