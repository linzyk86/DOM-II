// Your code goes here
//mouseenter 
let welcome = document.querySelector('.intro');
welcome.addEventListener('mouseenter',(event)=>{
    event.stopPropagation();
    event.target.style.backgroundColor = 'pink';
    event.target.style.color = 'hotpink'
});

//mouseleave
welcome.addEventListener('mouseleave', (event)=>{
    event.target.style.backgroundColor = 'hotpink';
    event.target.style.color = 'pink';
    });

//mouseover
let image1 = document.querySelector('.img-content');
image1.addEventListener('mouseover', ()=>{
    image1.style.transform = 'scale(1.5)';
    image1.style.transition = 'trasform 1s';
})

//keydown
let body = document.querySelector('body');
body.addEventListener('keydown', (event)=>{
    event.target.style.backgroundColor = 'aqua';
    });

//dblclick
let logo = document.querySelector('.logo-heading');
logo.addEventListener('dblclick', (event)=>{
    event.target.style.color = 'yellow';
    });

//click    
let textContent = document.querySelectorAll('.text-content');
textContent.forEach((element)=>{
    element.addEventListener('click', ()=>{
        element.style.backgroundColor = 'blue';
    })
})


//copy
let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link)=>{
    link.addEventListener('copy',()=>{
        link.textContent = 'Blah';

    })
})

//drag
let img2 = document.querySelector('.inverse-content .img-content img');
img2.addEventListener('drag', ()=>{
    img2.style.display = 'none';
})

//cut
let textSelect = document.querySelector('.content-destination p');
textSelect.addEventListener('cut', (event)=>{
    event.target.textContent = "Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.";

})

window.addEventListener('resize', ()=>{
    console.log('blah');
    logo.style.transform = 'scale(1.9)';
    logo.style.transition = 'transform 1s';

})









