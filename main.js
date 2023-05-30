

const homeBtn = document.querySelector(".home__btn");
homeBtn.addEventListener("click",()=>{
    const scrollTo = document.querySelector("#contact");
    scrollTo.scrollIntoView({behavior:"smooth"});
})


const nav = document.querySelector("#navbar");
const navHeight = nav.getBoundingClientRect().height;
document.addEventListener("scroll",()=>{
    if(window.scrollY> navHeight){
        nav.classList.add("dark");
    }else{
        nav.classList.remove("dark");
    }
})

const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll",()=>{
    home.style.opacity = 1 - window.scrollY/homeHeight;
})

const arrow = document.querySelector(".arrow__up");

document.addEventListener("scroll",()=>{
    if(window.scrollY>homeHeight/2){
        arrow.classList.add("visiable")
    }else{
        arrow.classList.remove("visiable")
    }
})

arrow.addEventListener("click",()=>{
    const scrollTo = document.querySelector("#home");
    scrollTo.scrollIntoView({behavior:"smooth"});
})

const navabarMenu = document.querySelector(".navbar__menu");
navabarMenu.addEventListener("click",(e)=>{
    const scrollTo =document.querySelector(e.target.dataset.link);
    scrollTo.scrollIntoView({behavior:"smooth"});
    
})

    