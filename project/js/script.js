$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            items:2,
            margin:25,
            nav:true,
            navSpeed: 300,
            loop: true,
            navText : [ "<i class='fa-solid fa-arrow-left-long text-white bg-primary rounded-start-pill py-1 px-3 mt-4'></i>" ,
            "<i class='fa-solid fa-arrow-right-long text-white bg-primary rounded-end-pill ms-3 py-1 px-3'></i>" ],
            responsive : {
                // breakpoint from 0 up
                0 : {
                items: 1,
                },
                768 : {
                items: 2,
                }
            }
        }
    );
});
let navBtn = document.querySelector(".owl-nav")
navBtn.classList.add("text-center")
let scrollButton = document.getElementById('scrollButton')
window.addEventListener('scroll',function(){
    if(this.document.body.scrollTop > 90 || document.documentElement.scrollTop > 90)
    {
        scrollButton.style.display = "block"
    }
    else
    {
        scrollButton.style.display = "none"
    }
})



let totalProjects= document.getElementById('total-projects')
let i=0
let set= setInterval(()=>{
    if(i == 8000) clearInterval(set)
    totalProjects.innerText = i
    i+=100
},200)