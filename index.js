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

