const ourWorkMenu = document.querySelector(".our-work-menu") 
const ourWorkLink = document.querySelector(".our-work-drop")

const ourWorkMenuP = document.querySelectorAll(".our-work-menu p")
const pricingMenuP = document.querySelectorAll(".pricing-menu p")
const webDesignMenuP = document.querySelectorAll(".web-design-menu p")

const pointerLinkWork = document.querySelector(".point")
const pointerLinkDesign = document.querySelector(".pointer")
const pointerLinkPrice = document.querySelector(".pointing")



ourWorkLink.addEventListener("click", (e) => {
    ourWorkMenu.classList.toggle("add-to-drop")
    pointerLinkWork.classList.toggle("addme")

    ourWorkMenuP.forEach(p => {
        p.classList.toggle("cursor")
    })
    
})



const ourWorkDropDownLinks = Array.from(document.querySelectorAll(".drop-down-our-work-burger p"))
const webDesignDropDownLinks = Array.from(document.querySelectorAll(".drop-down-web-design-burger p"))
const pricingDropDownLinks = Array.from(document.querySelectorAll(".drop-down-pricing-burger p"))

const webDesignMenu = document.querySelector(".web-design-menu") 
const webDesignLink = document.querySelector(".web-design-drop")

webDesignLink.addEventListener("click", (e) => {
    webDesignMenu.classList.toggle("add-to-drop")
    pointerLinkDesign.classList.toggle("addme")

    webDesignDropDownLinks.forEach(p => {
        p.classList.toggle("cursor")
    })
   
    
})

const pricingMenu = document.querySelector(".pricing-menu") 
const pricingLink = document.querySelector(".pricing-drop")

pricingLink.addEventListener("click", (e) => {
    pricingMenu.classList.toggle("add-to-drop")
        pointerLinkPrice.classList.toggle("addme")

    pricingMenuP.forEach(p => {
        p.classList.toggle("cursor")
    })
})

const burger = document.querySelector(".menu")
const dropDown = document.querySelector(".drop-down")

burger.addEventListener("click", (e) => {
    dropDown.classList.toggle("addToDrop")
})

const dropDownOurWorkLink = document.querySelector(".burger-our-work-drop")
const dropDownOurWorkMenu = document.querySelector(".drop-down-our-work-burger")

dropDownOurWorkLink.addEventListener("click", (e) => {
    dropDownOurWorkMenu.classList.toggle("addToOurWork")
    ourWorkDropDownLinks.forEach(link => {
        link.classList.toggle("cursor")
    })

})

const dropDownWebDesignLink = document.querySelector(".burger-web-design-drop")
const dropDownWebDesignMenu = document.querySelector(".drop-down-web-design-burger")

dropDownWebDesignLink.addEventListener("click", (e) => {
    dropDownWebDesignMenu.classList.toggle("addToOurWork")
    webDesignDropDownLinks.forEach(link => {
        link.classList.toggle("cursor")
    })
})

const dropDownPricingLink = document.querySelector(".burger-pricing-drop")
const dropDownPricingMenu = document.querySelector(".drop-down-pricing-burger")

dropDownPricingLink.addEventListener("click", (e) => {
    dropDownPricingMenu.classList.toggle("addToOurWork")
    pricingDropDownLinks.forEach(link => {
        link.classList.toggle("cursor")
    })
})

/************* Scroll Animations */

gsap.registerPlugin(ScrollTrigger)



ScrollTrigger.matchMedia({
    "(max-width:1001px)": function() {
        gsap.to(".processScroll", {
            scrollTrigger: {
                trigger: ".processScroll",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            y:0,
            opacity:1,
            stagger: 0.3,
        })
    },
    "(min-width:1002px)": function() {
        gsap.to(".processScroll", {
            scrollTrigger: {
                trigger: ".processScroll",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            y:0,
            opacity:1,
            stagger: 0.3,
        })
    }
})


gsap.to(".processScroll", {
    scrollTrigger: {
        trigger: ".processScroll",
        scrub:true,
        start:"top bottom",
        end:"+=300",
    },
    y:0,
    opacity:1,
    stagger: 0.3,
})
gsap.to(".icon", {
    scrollTrigger: {
        trigger: ".icon",
        scrub:true,
        start:"top bottom",
        end:"+=1000",
    },
    y:0,
    opacity:1,
    stagger: 0.5,
})
gsap.to(".icon-text", {
    scrollTrigger: {
        trigger: ".icon-text",
        scrub:true,
        start:"top bottom",
        end:"+=1000",
    },
    x:0,
    opacity:1,
    stagger: 0.5,
})
gsap.to(".left-transparent", {
    scrollTrigger: {
        trigger: ".left-transparent",
        scrub:true,
        start:"top bottom",
        end:"+=400",
    },
    x:0,
    opacity:1,
    stagger: 0.5,
})
gsap.to(".orderScroll", {
    scrollTrigger: {
        trigger: ".orderScroll",
        scrub:true,
        start:"top bottom",
        end:"+=400",
    },
    y:0,
    opacity:1,
    stagger: 0.5,
})
gsap.to(".orderScrolled", {
    scrollTrigger: {
        trigger: ".orderScrolled",
        scrub:true,
        start:"top bottom",
        end:"+=550",
    },
    y:0,
    opacity:1,
    stagger: 0.5,
})
gsap.to(".right-assets", {
    scrollTrigger: {
        trigger: ".right-assets",
        scrub:true,
        start:"top bottom",
        end:"+=400",
    },
    x:0,
    opacity:1,
    stagger: 0.5,
})
gsap.to(".cardTitleScroll", {
    scrollTrigger: {
        trigger: ".cardTitleScroll",
        scrub:true,
        start:"top bottom",
        end:"+=400",
    },
    x:0,
    opacity:1,
    stagger: 0.5,
})
/*******Cards******/


ScrollTrigger.matchMedia({
    "(max-width:1149px)": function() {
        gsap.to(".first-card", {
            scrollTrigger: {
                trigger: ".first-card",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            scaleY:1,
            opacity:1,
            stagger: 0.5,
        })
        gsap.to(".second-card", {
            scrollTrigger: {
                trigger: ".second-card",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            scaleY:1,
            opacity:1,
            stagger: 0.5,
        })
        gsap.to(".third-card", {
            scrollTrigger: {
                trigger: ".third-card",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            scaleY:1,
            opacity:1,
            stagger: 0.5,
        })
        gsap.to(".fourth-card", {
            scrollTrigger: {
                trigger: ".fourth-card",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            scaleY:1,
            opacity:1,
            stagger: 0.5,
        })
    },
    "(min-width:1150px)": function() {
        gsap.to(".card", {
            scrollTrigger: {
                trigger: ".card",
                scrub:true,
                start:"top bottom",
                end:"+=600",
            },
            scaleY:1,
            opacity:1,
            stagger: 0.5,
        })
    }
})




/*************/

gsap.to(".goodbyeScroll", {
    scrollTrigger: {
        trigger: ".goodbyeScroll",
        scrub:true,
        start:"top bottom",
        end:"+=300",
    },
    y:0,
    opacity:1,
    stagger: 0.5,
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




























