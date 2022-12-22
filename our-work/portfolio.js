
const menu = document.querySelector(".menu")
const dropDown = document.querySelector(".drop-down")
const ourWorkNav = document.querySelector(".our-work-nav")
const whyUsNav = document.querySelector(".why-us-nav")
const whyUsSection = document.querySelector(".why-us")


menu.addEventListener("click", (e) => {
    dropDown.classList.toggle("toggle")
})

/***********************************************/

const skipToProjectsButton = document.querySelector(".hero-section button")
const projectThumbnails = document.querySelector(".portfolio-thumbnails")
const gridItemThumbnailArray = Array.from(document.querySelectorAll(".grid-item"))
const projectArray = document.querySelectorAll(".cilighting")

skipToProjectsButton.addEventListener("click", (e) => {
    projectThumbnails.scrollIntoView()
})

gridItemThumbnailArray.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", (e) => {
        projectArray[index].scrollIntoView()
    })
})



/****************************************/
const burgerOurWorkDrop = document.querySelector(".burger-our-work-drop")
const burgerOurWorkMenu = document.querySelector(".drop-down-our-work-burger")

burgerOurWorkDrop.addEventListener("click", (e) => {
    burgerOurWorkMenu.classList.toggle("drop-down-burger-add")
})

const burgerWebDesignDrop = document.querySelector(".burger-web-design-drop")
const burgerWebDesignMenu = document.querySelector(".drop-down-web-design-burger")

burgerWebDesignDrop.addEventListener("click", (e) => {
    burgerWebDesignMenu.classList.toggle("drop-down-burger-add")
})

const burgepricingDrop = document.querySelector(".burger-pricing-drop")
const burgepricingMenu = document.querySelector(".drop-down-pricing-burger")

burgepricingDrop.addEventListener("click", (e) => {
    burgepricingMenu.classList.toggle("drop-down-burger-add")
})



/***********************/

const ourWorkMenu = document.querySelector(".our-work-menu") 
const ourWorkLink = document.querySelector(".our-work-drop")

const ourWorkMenuP = document.querySelectorAll(".our-work-menu p")
const webDesignMenuP = document.querySelectorAll(".web-design-menu p")
const pricingMenuP = document.querySelectorAll(".pricing-menu p")



ourWorkLink.addEventListener("click", (e) => {
    ourWorkMenu.classList.toggle("add-to-drop")
    ourWorkMenuP.forEach(p => {
        p.classList.toggle("cursor")
    })
    
})




const webDesignMenu = document.querySelector(".web-design-menu") 
const webDesignLink = document.querySelector(".web-design-drop")

webDesignLink.addEventListener("click", (e) => {
    webDesignMenu.classList.toggle("add-to-drop")
    webDesignMenuP.forEach(p => {
        p.classList.toggle("cursor")
    })
   
    
})



const pricingMenu = document.querySelector(".pricing-menu") 
const pricingLink = document.querySelector(".pricing-drop")

pricingLink.addEventListener("click", (e) => {
    pricingMenu.classList.toggle("add-to-drop")
    pricingMenuP.forEach(p => {
        p.classList.toggle("cursor")
    })

   
    
})
/*****************************/
gsap.registerPlugin(ScrollTrigger)

gsap.to(".portfolioTitleScroll", {
    scrollTrigger: {
        trigger: ".portfolioTitleScroll",
        scrub:true,
        start:"top bottom",
        end:"+=300",
        
    },
    x:1,
    opacity:1,
    stagger: 0.3,
   
})
gsap.to(".grid-item img", {
    scrollTrigger: {
        trigger: ".grid-item img",
        scrub:true,
        start:"top bottom",
        end:"+=300",
        
    },
    x:0,
    opacity:1,
    stagger: 0.3,
   
})

gsap.to(".staggered", {
    scrollTrigger: {
        trigger: ".staggered",
        scrub:true,
        start:"top bottom",
        end:"+=300",
        
    },
    y:1,
    opacity:1,
    stagger: 0.3,
   
})
gsap.to(".stagger", {
    scrollTrigger: {
        trigger: ".stagger",
        scrub:true,
        start:"top bottom",
        end:"+=300",
        
    },
    y:1,
    opacity:1,
    stagger: 0.3,
   
})

gsap.to(".lined", {
    scrollTrigger: {
        trigger: ".lined",
        scrub:true,
        start:"top bottom",
        end:"+=300",
        
    },
    scale:1,
    opacity:1,
    stagger: 0.3,
   
})
gsap.to(".line-one", {
    scrollTrigger: {
        trigger: ".line-one",
        scrub:true,
        start:"top bottom",
        end:"+=300",
        
    },
    scale:1,
    opacity:1,
    stagger: 0.3,
   
})
gsap.to(".img", {
    scrollTrigger: {
        trigger: ".img",
        scrub:true,
        start:"top bottom",
        end:"+=300",
        
    },
    x:0,
    opacity:1,
    stagger: 1,
   
})





