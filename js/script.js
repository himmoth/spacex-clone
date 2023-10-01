const btn = document.querySelector('#menu-btn');
// const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('#mobile-main-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;


btn.addEventListener('click', ()=> {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');

});

document.addEventListener('scroll', scrollPage);

function scrollPage() {
    const scrollPos = window.scrollY;
    if(scrollPos > 100 &&!scrollStarted) {
        countUp();
        scrollStarted = true;
    }else if(scrollPos < 100  && scrollStarted){
        reset();

    }
    
}

function countUp (){
    counters.forEach((counter) => {
       counter.innerText = '0';
    const updateCounter = () => {
        // Get count target 
        const target = +counter.getAttribute('data-target');
        // Get current counter value 
        const c =+counter.innerText;
        // Create increment 
        const increment = target / 100;
    
        // if counter is less than target and increment 
        if(c < target) {
            // Round up and set counter value 
            counter.innerText = `${Math.ceil(c + increment)}`;
        }else {
            counter.innerText = target;
        }
        setTimeout(updateCounter, 75);

    };

    updateCounter();

    })
}

function reset() {
    counters.forEach((counter) => counter.innerHTML ='0');
}





