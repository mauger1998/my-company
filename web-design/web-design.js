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






















