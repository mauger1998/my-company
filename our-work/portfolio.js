
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


/*************Thumbnail Scroll Animations */


ScrollTrigger.matchMedia({
    "(max-width:1094px)": function() {
        gsap.to(".item-first img", {
            scrollTrigger: {
                trigger: ".item-first img",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            x:1,
            opacity:1,
            stagger:0.3,
            
        })
        gsap.to(".item-first .stagger", {
            scrollTrigger: {
                trigger: ".item-first .stagger",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            y:1,
            opacity:1,
            stagger:0.3,
            
        })
        gsap.to(".item-first .line", {
            scrollTrigger: {
                trigger: ".item-first .line",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            scaleX:1,
            opacity:1,
            stagger:0.3,
            
        })
        gsap.to(".item-second img", {
            scrollTrigger: {
                trigger: ".item-second img",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            x:1,
            opacity:1,
            stagger:0.3,
            
        })
        gsap.to(".item-second .stagger", {
            scrollTrigger: {
                trigger: ".item-second .stagger",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            y:1,
            opacity:1,
            stagger:0.3,
            
        })
        gsap.to(".item-second .line", {
            scrollTrigger: {
                trigger: ".item-second .line",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            scaleX:1,
            opacity:1,
            stagger:0.3,
            
        })
        gsap.to(".item-third img", {
            scrollTrigger: {
                trigger: ".item-third img",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            x:1,
            opacity:1,
            stagger:0.3,
            
        })
        gsap.to(".item-third .stagger", {
            scrollTrigger: {
                trigger: ".item-third .stagger",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            y:1,
            opacity:1,
            stagger:0.3,
            
        })
        gsap.to(".item-third .line", {
            scrollTrigger: {
                trigger: ".item-third .line",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            scaleX:1,
            opacity:1,
            stagger:0.3,
            
        })
        gsap.to(".item-fourth img", {
            scrollTrigger: {
                trigger: ".item-fourth img",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            x:1,
            opacity:1,
            stagger:0.3,
            
        })
        gsap.to(".item-fourth .stagger", {
            scrollTrigger: {
                trigger: ".item-fourth .stagger",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            y:1,
            opacity:1,
            stagger:0.3,
            
        })
        gsap.to(".item-fourth .line", {
            scrollTrigger: {
                trigger: ".item-fourth .line",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            scaleX:1,
            opacity:1,
            stagger:0.3,
            
        })
        gsap.to(".item-fifth img", {
            scrollTrigger: {
                trigger: ".item-fifth img",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            x:1,
            opacity:1,
            stagger:0.3,
            
        })
        gsap.to(".item-fifth .stagger", {
            scrollTrigger: {
                trigger: ".item-fifth .stagger",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            y:1,
            opacity:1,
            stagger:0.3,
            
        })
        gsap.to(".item-fifth .line", {
            scrollTrigger: {
                trigger: ".item-fifth .line",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            scaleX:1,
            opacity:1,
            stagger:0.3,
            
        })
    },
    "(min-width:1095px)": function() {
        gsap.to(".grid-item img", {
            scrollTrigger: {
                trigger: ".grid-item img",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            x:1,
            opacity:1,
            stagger:0.3,
            
        })
        gsap.to(".grid-item .stagger", {
            scrollTrigger: {
                trigger: ".grid-item .stagger",
                scrub:true,
                start:"top bottom",
                end:"+=400",
            },
            y:1,
            opacity:1,
            stagger:0.3,
            
        })
        gsap.to(".grid-item .line", {
            scrollTrigger: {
                trigger: ".grid-item .line",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            scaleX:1,
            opacity:1,
            stagger:0.3,
            
        })
        
        gsap.to(".grid-item-one img", {
            scrollTrigger: {
                trigger: ".grid-item-one img",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            x:1,
            opacity:1,
            stagger:0.3,
            
        })
        gsap.to(".grid-item-one .stagger", {
            scrollTrigger: {
                trigger: ".grid-item-one .stagger",
                scrub:true,
                start:"top bottom",
                end:"+=400",
            },
            y:1,
            opacity:1,
            stagger:0.3,
            
        })
        gsap.to(".grid-item-one .line", {
            scrollTrigger: {
                trigger: ".grid-item-one .line",
                scrub:true,
                start:"top bottom",
                end:"+=300",
            },
            scaleX:1,
            opacity:1,
            stagger:0.3,
            
        })
        
    }
})

/*********************** */

gsap.to(".goodbye-titles h2", {
    scrollTrigger: {
        trigger: ".goodbye-titles h2",
        scrub:true,
        start:"top bottom",
        end:"+=400",
        
    },
    y:1,
    opacity:1,
    stagger: 0.3,

})
gsap.to(".goodbye-titles p", {
    scrollTrigger: {
        trigger: ".goodbye-titles p",
        scrub:true,
        start:"top bottom",
        end:"+=400",
        
    },
    y:1,
    opacity:1,
    stagger: 0.3,

})
gsap.to(".goodbye-titles a", {
    scrollTrigger: {
        trigger: ".goodbye-titles a",
        scrub:true,
        start:"top bottom",
        end:"+=400",
        
    },
    y:1,
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












