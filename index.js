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


/**** Services Section Scroll Aniamtions */


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
/*****************************************/


/*****************Portfolio Section Scroll Animations************************/

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

/***** Scroll Trigger for Portfolio Section thumbanils */



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


/*****************************************/

/*****************Scroll Animations Testimonial Section************************/




    





gsap.to(".testimonial-card", {
    scrollTrigger: {
        trigger: ".testimonial-card",
        scrub:true,
        start:"top bottom",
        end:"+=450",
        
    },
    x:0,
    opacity:1,
    stagger:0.2,
})
gsap.to(".stars img", {
    scrollTrigger: {
        trigger: ".stars img",
        scrub:true,
        start:"top bottom",
        end:"+=350",
        
    },
    x:0,
    opacity:1,
    stagger:0.2,
})
gsap.to(".testimonial-card > p", {
    scrollTrigger: {
        trigger: ".testimonial-card > p",
        scrub:true,
        start:"top bottom",
        end:"+=300",
        
    },
    y:0,
    opacity:1,
    stagger:0.2,
})
gsap.to(".testimonial-card-bottom > img", {
    scrollTrigger: {
        trigger: ".testimonial-card-bottom > img",
        scrub:true,
        start:"top bottom",
        end:"+=200",
        
    },
    scaleY:1,
    opacity:1,
    stagger:0.2,
})
gsap.to(".profile p", {
    scrollTrigger: {
        trigger: ".profile p",
        scrub:true,
        start:"top bottom",
        end:"+=300",
        
    },
    scaleY:1,
    opacity:1,
    stagger:0.2,
})
gsap.to(".scrollTestimonial", {
    scrollTrigger: {
        trigger: ".scrollTestimonial",
        scrub:true,
        start:"top bottom",
        end:"+=500",
        
    },
    x:0,
    opacity:0.05,
})
gsap.to(".titleScroll", {
    scrollTrigger: {
        trigger: ".titleScroll",
        scrub:true,
        start:"top bottom",
        end:"+=400",
        
    },
    y:0,
    opacity:1,
    stagger:0.2,
})

/*****************************************/


/*******************Pricing Section Scroll Animations**********************/





gsap.to(".scrollPrice", {
    scrollTrigger: {
        trigger: ".scrollPrice",
        scrub:true,
        start:"top bottom",
        end:"+=400",
        
    },
    x:1,
    opacity:0.05,
   
})
gsap.to(".priceTitle", {
    scrollTrigger: {
        trigger: ".priceTitle",
        scrub:true,
        start:"top bottom",
        end:"+=400",
        
    },
    y:1,
    opacity:1,
    stagger: 0.2,
   
})





gsap.to(".priceCard", {
    scrollTrigger: {
        trigger: ".priceCard",
        scrub:true,
        start:"top bottom",
        end:"+=200",
        
    },
    scaleY:1,
    opacity:1,
    stagger: 0.1,
   
})


/*****************************************/

/****************Contact Section Scroll Animations*************************/





gsap.to(".contact", {
    scrollTrigger: {
        trigger: ".contact",
        scrub:true,
        start:"top bottom",
        end:"+=500",
        
    },
    scaleX:1,
    opacity:1,
   
})
gsap.to("form", {
    scrollTrigger: {
        trigger: ".contact",
        scrub:true,
        start:"top bottom",
        end:"+=600",
        
    },
    scaleY:1,
    opacity:1,
    stagger:0.1,
   
})
gsap.to("footer p", {
    scrollTrigger: {
        trigger: "footer p",
        scrub:true,
        start:"top bottom",
        end:"+=400",
        
    },
    x:1,
    opacity:1,
    stagger:0.1,
   
})
gsap.to("footer img", {
    scrollTrigger: {
        trigger: "footer img",
        scrub:true,
        start:"top bottom",
        end:"+=400",
        
    },
    x:1,
    opacity:1,
    stagger:0.1,
   
})
gsap.to("footer ul a li", {
    scrollTrigger: {
        trigger: "footer ul a li",
        scrub:true,
        start:"top bottom",
        end:"+=400",
        
    },
    x:1,
    opacity:1,
    stagger:0.1,
   
})
gsap.to(".enterprise-img", {
    scrollTrigger: {
        trigger: ".enterprise-img",
        scrub:true,
        start:"top bottom",
        end:"+=400",
        
    },
    x:1,
    opacity:1,
   
})
gsap.to(".enter-scroll", {
    scrollTrigger: {
        trigger: ".enter-scroll",
        scrub:true,
        start:"top bottom",
        end:"+=300",
        
    },
    y:1,
    opacity:1,
    stagger:0.3,
   
})





