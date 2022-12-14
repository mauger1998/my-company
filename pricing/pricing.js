
const menu = document.querySelector(".menu")
const dropDown = document.querySelector(".drop-down")
const ourWorkNav = document.querySelector(".our-work-nav")
const whyUsNav = document.querySelector(".why-us-nav")
const whyUsSection = document.querySelector(".why-us")


menu.addEventListener("click", (e) => {
    dropDown.classList.toggle("toggle")
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
/****************** */
gsap.registerPlugin(ScrollTrigger)

gsap.to(".updateScroll", {
    scrollTrigger: {
        trigger: ".updateScroll",
        scrub:true,
        start:"top bottom",
        end:"+=300",
        
    },
    y:1,
    opacity:1,
    stagger: 0.3,
   
})
gsap.to(".updates-img", {
    scrollTrigger: {
        trigger: ".updates-img",
        scrub:true,
        start:"top bottom",
        end:"+=400",
        
    },
    x:1,
    opacity:1,
    stagger: 0.3,
   
})
gsap.to(".maintenanceScroll", {
    scrollTrigger: {
        trigger: ".maintenanceScroll",
        scrub:true,
        start:"top bottom",
        end:"+=200",
        
    },
    y:1,
    opacity:1,
    stagger: 0.3,
   
})
gsap.to(".maintenance-img", {
    scrollTrigger: {
        trigger: ".maintenance-img",
        scrub:true,
        start:"top bottom",
        end:"+=400",
        
    },
    x:1,
    opacity:1,
    stagger: 0.3,
   
})
gsap.to(".container", {
    scrollTrigger: {
        trigger: ".maintenance-img",
        scrub:true,
        start:"top top",
        end:"+=2000",
        
    },
    scaleX:1,
    opacity:1,
    stagger: 0.3,
   
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
gsap.to(".enter-scroll", {
    scrollTrigger: {
        trigger: ".enter-scroll",
        scrub:true,
        start:"top bottom",
        end:"+=400",
        
    },
    y:1,
    opacity:1,
    stagger:0.3,
   
})
gsap.to(".right-card", {
    scrollTrigger: {
        trigger: ".right-card",
        scrub:true,
        start:"top bottom",
        end:"+=400",
        
    },
    scaleY:1,
    opacity:1,
    stagger:0.1,
   
})


const pricingTiersClick = document.querySelector(".pricingTiersClick")
const maintenanceClick = document.querySelector(".maintenanceClick")
const dropPricingTiersClick = document.querySelector(".dropPricingClick")
const dropMaintenanceClick = document.querySelector(".dropMaintenanceClick")

pricingTiersClick.addEventListener("click", (e) => {
    pricingMenu.classList.remove("add-to-drop")
    pricingMenuP.forEach(p => {
        p.classList.remove("cursor")
    })
   
})
maintenanceClick.addEventListener("click", (e) => {
    pricingMenu.classList.remove("add-to-drop")
    pricingMenuP.forEach(p => {
        p.classList.remove("cursor")
    })
   
})



dropPricingTiersClick.addEventListener("click", (e) => {
    burgepricingMenu.classList.remove("drop-down-burger-add")
    dropDown.classList.remove("toggle")
   
})
dropMaintenanceClick.addEventListener("click", (e) => {
    burgepricingMenu.classList.remove("drop-down-burger-add")
    dropDown.classList.remove("toggle")
   
})





