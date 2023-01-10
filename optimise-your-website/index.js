const contactButtonHeader = document.querySelector("header button")


contactButtonHeader.addEventListener("click", (e) => {
    contactSection.scrollIntoView()
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

/************** Timer */


   // The data/time we want to countdown to
   var countDownDate = new Date("Jan 18, 2023 00:00:00").getTime();

   // Run myfunc every second
   var myfunc = setInterval(function() {

   var now = new Date().getTime();
   var timeleft = countDownDate - now;
       
   // Calculating the days, hours, minutes and seconds left
   var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
   var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
       
   // Result is output to the specific element
   document.querySelector(".days").innerHTML = days
   document.querySelector(".hours").innerHTML = hours
   document.querySelector(".mins").innerHTML = minutes
   document.querySelector(".secs").innerHTML = seconds
       
   // Display the message when countdown is over
   if (timeleft < 0) {
       clearInterval(myfunc);
       document.querySelector(".days").innerHTML = "Time"
       document.querySelector(".hours").innerHTML = "is" 
       document.querySelector(".mins").innerHTML = "now"
       document.querySelector(".secs").innerHTML = "up"
   }
   }, 1000);
