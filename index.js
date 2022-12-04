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
const homeNav = document.querySelector(".nav-add")
const pricingNav = document.querySelector(".pricingNav")
const pricingSection = document.querySelector(".pricing-section")
const dropDownHome = document.querySelector(".dropDownHome")
const dropDownOurWork = document.querySelector(".dropDownOurWork")
const dropDownPricing = document.querySelector(".dropDownPricing")
const dropDownContact = document.querySelector(".drop-down button")

contactButtonHeader 

const sectionOneOptions = { }
const navChangeOptions = { }




/***********************************************/
const menu = document.querySelector(".menu")
const dropDown = document.querySelector(".drop-down")
const ourWorkNav = document.querySelector(".our-work-nav")


menu.addEventListener("click", (e) => {
    dropDown.classList.toggle("toggle")
})

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        header.classList.toggle("header-add")
        nav.forEach(link => {
            link.classList.toggle("nav-add")
        })
        dropDown.classList.toggle("drop-down-add")
        contactButtonHeader.classList.toggle("button-add")
    })
}, sectionOneOptions)

const navChangeWorkObserver = new IntersectionObserver(function(entries, navChangeWorkObserver) {
    entries.forEach(entry => {
        ourWorkNav.classList.toggle("scrolling")
        dropDownOurWork.classList.toggle("scrolling")
    })
}, navChangeOptions)

const navChangePriceObserver = new IntersectionObserver(function(entries, navChangePriceObserver) {
    entries.forEach(entry => {
        pricingNav.classList.toggle("scrolling")
        dropDownPricing.classList.toggle("scrolling")
    })
}, navChangeOptions)

const navChangeHomeObserver = new IntersectionObserver(function(entries, navChangeHomeObserver) {
    entries.forEach(entry => {
        homeNav.classList.toggle("scrolling")
        dropDownHome.classList.toggle("scrolling")
    })
}, navChangeOptions)

sectionOneObserver.observe(hero)
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



