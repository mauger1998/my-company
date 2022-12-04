const contactButtonHeader = document.querySelector("header button")
const contactSection = document.querySelector(".contact")
const seeWorkButtonHero = document.querySelector(".hero-section button")
const portfolioSection = document.querySelector(".wrapper-test")
const whatWeDoContactButton = document.querySelector(".what-we-do-left button")
console.log(contactButtonHeader)

contactButtonHeader.addEventListener("click", (e) => {
    contactSection.scrollIntoView()
    console.log("hello")
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
contactButtonHeader 

const sectionOneOptions = { }
const paragraphSectionOptions = { }




/***********************************************/
const menu = document.querySelector(".menu")
const dropDown = document.querySelector(".drop-down")

menu.addEventListener("click", (e) => {
    dropDown.classList.toggle("toggle")
})

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        console.log(entry.target)
        header.classList.toggle("header-add")
        nav.forEach(link => {
            link.classList.toggle("nav-add")
        })
        dropDown.classList.toggle("drop-down-add")
        contactButtonHeader.classList.toggle("button-add")
    })
}, sectionOneOptions)
sectionOneObserver.observe(hero)


/**********************************/

const ourWorkNav = document.querySelector(".our-work-nav")
const homeNav = document.querySelector(".nav-add")
const pricingNav = document.querySelector(".pricingNav")
const pricingSection = document.querySelector(".pricing-section")

ourWorkNav.addEventListener("click", (e) => {
    portfolioSection.scrollIntoView()
})

homeNav.addEventListener("click", (e) => {
    hero.scrollIntoView()
})

pricingNav.addEventListener("click", (e) => {
    pricingSection.scrollIntoView()
})



