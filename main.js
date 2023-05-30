

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