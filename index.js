const contactButtonHeader = document.querySelector("header button")
const contactSection = document.querySelector(".contact")
const seeWorkButtonHero = document.querySelector(".hero-section button")
const portfolioSection = document.querySelector(".portfolio-section")

contactButtonHeader.addEventListener("click", (e) => {
    contactSection.scrollIntoView()
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








/***********************************************/
const menu = document.querySelector(".menu")
const dropDown = document.querySelector(".drop-down")
const ourWorkNav = document.querySelector(".our-work-nav")
const whyUsNav = document.querySelector(".why-us-nav")
const whyUsSection = document.querySelector(".why-us")


menu.addEventListener("click", (e) => {
    dropDown.classList.toggle("toggle")
})

















/**********************************/







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

/********************* Animations
 * ************************
 */

gsap.registerPlugin(ScrollTrigger)


gsap.to(".services-left img", {
    scrollTrigger: {
        trigger: ".services-left img",
        scrub:true,
        start:"top bottom",
        end:"+=600",
    },
    x:0,
    opacity:1
})
gsap.to(".services-right h2", {
    scrollTrigger: {
        trigger: ".services-left img",
        scrub:true,
        start:"top bottom",
        end:"+=600",
    },
    y:0,
    opacity:1
})
gsap.to(".list", {
    scrollTrigger: {
        trigger: ".list",
        scrub:true,
        start:"top bottom",
        end:"+=400",
        
    },
    y:0,
    opacity:1,
    stagger:0.3
   
})
gsap.to(".services-titles p", {
    scrollTrigger: {
        trigger: ".services-titles p",
        scrub:true,
        start:"top bottom",
        end:"+=400",
        
    },
    y:0,
    opacity:1,
    
   
})
gsap.to(".services-wrapper button", {
    scrollTrigger: {
        trigger: ".services-titles p",
        scrub:true,
        start:"bottom bottom",
        end:"+=400",
        
    },
    y:0,
    opacity:1,
    
   
})
gsap.to(".scrollPortfolio", {
    scrollTrigger: {
        trigger: ".scrollPortfolio",
        scrub:true,
        start:"top bottom",
        end:"+=500",
        
    },
    x:0,
    opacity:0.05,
})
gsap.to(".ourWorkScroll", {
    scrollTrigger: {
        trigger: ".ourWorkScroll",
        scrub:true,
        start:"top bottom",
        end:"+=500",
        
    },
    y:0,
    opacity:1,
    stagger:0.3,
})
gsap.to(".first-item", {
    scrollTrigger: {
        trigger: ".first-item",
        scrub:true,
        start:"top bottom",
        end:"+=300",
        
    },
    x:0,
    opacity:1,
    stagger:-0.4,
})
gsap.to(".grid-item-one", {
    scrollTrigger: {
        trigger: ".grid-item-one",
        scrub:true,
        start:"top bottom",
        end:"+=300",
        
    },
    x:0,
    opacity:1,
    stagger:0.4,
})





