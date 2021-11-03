const target = document.querySelectorAll('[data-anime]');
const animateClass = 'animate';
const targetTop = document.querySelectorAll("[data-anime='cima']");
const targetBottom = document.querySelectorAll("[data-anime='baixo']");
const targetLeft = document.querySelectorAll("[data-anime = 'esquerda']");
const targetRigth = document.querySelectorAll("[data-anime = 'direita']");
const targetLeft_1 = document.querySelectorAll("[data-anime = 'esquerda_primeiro']");
const targetRigth_1 = document.querySelectorAll("[data-anime = 'direita_primeiro']");

function animateScroll(){
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;
    targetRigth.forEach(function(e){
        
        if((windowTop) > e.offsetTop){
            e.classList.add(animateClass);
        }
    })
    targetLeft.forEach(function(e){
        
        if((windowTop) > e.offsetTop){
            e.classList.add(animateClass);
        }
    })
    
    targetBottom.forEach(function(e){
        
        if((windowTop) > e.offsetTop){
            e.classList.add(animateClass);
        }
    })
    
}

function animationTop(){
    targetTop.forEach((e)=>{
        e.classList.add(animateClass)
    })
}

function animationLeft(){
    targetLeft_1.forEach((e)=>{
        e.classList.add(animateClass)
    })
}

function animationRight(){
    targetRigth_1.forEach((e)=>{
        e.classList.add(animateClass)
    })
}

window.addEventListener('scroll', function(){
animateScroll();
})

window.addEventListener('load', ()=>{
    animationTop();
    animationLeft();
    animationRight();
    
    })
    