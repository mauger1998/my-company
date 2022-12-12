const contactButtonHeader = document.querySelector("header button")
const contactSection = document.querySelector(".contact")
const seeWorkButtonHero = document.querySelector(".hero-section button")
const portfolioSection = document.querySelector(".portfolio-section")
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
const pricingSection = document.querySelector(".priceScroll")
const dropDownHome = document.querySelector(".dropDownHome")
const dropDownOurWork = document.querySelector(".dropDownOurWork")
const dropDownPricing = document.querySelector(".dropDownPricing")
const dropDownContact = document.querySelector(".drop-down button")
const dropDownWhyUs = document.querySelector(".dropDownWhyUs")







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


