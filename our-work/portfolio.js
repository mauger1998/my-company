
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