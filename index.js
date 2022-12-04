const contactButtonHeader = document.querySelector("header button")
const contactSection = document.querySelector(".contact")
const seeWorkButtonHero = document.querySelector(".hero-section button")
const portfolioSection = document.querySelector(".wrapper-test")
const whatWeDoContactButton = document.querySelector(".what-we-do-left button")

contactButtonHeader.addEventListener("click", (e) => {
    contactSection.scrollIntoView()
})

seeWorkButtonHero.addEventListener("click", (e) => {
    portfolioSection.scrollIntoView()
})

whatWeDoContactButton.addEventListener("click", (e => {
    contactSection.scrollIntoView()
}))

/****************************************/
const header = document.querySelector("header")
const nav = document.querySelectorAll("nav ul li")
const hero = document.querySelector(".hero-section")
const paragraphSection = document.querySelector(".paragraph-section")
const homeNav = document.querySelector(".home")
const pricingNav = document.querySelector(".pricingNav")
const pricingSection = document.querySelector(".pricing-section")
const dropDownHome = document.querySelector(".dropDownHome")
const dropDownOurWork = document.querySelector(".dropDownOurWork")
const dropDownPricing = document.querySelector(".dropDownPricing")
const dropDownContact = document.querySelector(".drop-down button")
const dropDownWhyUs = document.querySelector(".dropDownWhyUs")

contactButtonHeader 

const sectionOneOptions = { }
const navChangeOptions = { }
const whyUsOptions = { rootMargin: "-300px" }
const ourWorkOptions = { rootMargin: "-300px" }
const priceOptions = { rootMargin: "-300px" }
const homeOptions = { }




/***********************************************/
const menu = document.querySelector(".menu")
const dropDown = document.querySelector(".drop-down")
const ourWorkNav = document.querySelector(".our-work-nav")
const whyUsNav = document.querySelector(".why-us-nav")
const whyUsSection = document.querySelector(".why-us")


menu.addEventListener("click", (e) => {
    dropDown.classList.toggle("toggle")
})



const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("header-add")
            header.style.transition = "1s"
            nav.forEach(link => {
                link.classList.add("nav-add")
            })
            dropDown.classList.add("drop-down-add")
        } else {
            header.classList.remove("header-add")
            nav.forEach(link => {
                link.classList.remove("nav-add")
            })
            dropDown.classList.remove("drop-down-add")
        }
        
    })
}, sectionOneOptions)



const sectionWhyUsObserver = new IntersectionObserver(function(entries, sectionWhyUsObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            whyUsNav.classList.remove("scrolling")
            dropDownWhyUs.classList.remove("scrolling")
            
        } else {
            whyUsNav.classList.add("scrolling")
            dropDownWhyUs.classList.add("scrolling")
        }
    })
}, whyUsOptions)



const navChangeWorkObserver = new IntersectionObserver(function(entries, navChangeWorkObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            ourWorkNav.classList.remove("scrolling")
            dropDownOurWork.classList.remove("scrolling")
        } else {
            ourWorkNav.classList.add("scrolling")
            dropDownOurWork.classList.add("scrolling")
        }
    })
}, ourWorkOptions)





const navChangePriceObserver = new IntersectionObserver(function(entries, navChangePriceObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            pricingNav.classList.remove("scrolling")
            dropDownPricing.classList.remove("scrolling")
        } else {
            pricingNav.classList.add("scrolling")
            dropDownPricing.classList.add("scrolling")
        }
    })
}, priceOptions)




const navChangeHomeObserver = new IntersectionObserver(function(entries, navChangeHomeObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            homeNav.classList.remove("scrolling")
            dropDownHome.classList.remove("scrolling")
        } else {
            homeNav.classList.add("scrolling")
            dropDownHome.classList.add("scrolling")
        }
    })
}, homeOptions)

sectionOneObserver.observe(hero)
sectionWhyUsObserver.observe(whyUsSection)
navChangeWorkObserver.observe(portfolioSection)
navChangePriceObserver.observe(pricingSection)
navChangeHomeObserver.observe(hero)



/**********************************/


ourWorkNav.addEventListener("click", (e) => {
    portfolioSection.scrollIntoView()
})

homeNav.addEventListener("click", (e) => {
    hero.scrollIntoView()
})

pricingNav.addEventListener("click", (e) => {
    pricingSection.scrollIntoView()
})

dropDownHome.addEventListener("click", (e) => {
    hero.scrollIntoView()
})

dropDownOurWork.addEventListener("click", (e) => {
    portfolioSection.scrollIntoView()
})

dropDownPricing.addEventListener("click", (e => {
    pricingSection.scrollIntoView()
}))

dropDownContact.addEventListener("click", (e) => {
    contactSection.scrollIntoView()
})


whyUsNav.addEventListener("click", (e) => {
    whyUsSection.scrollIntoView()
})


