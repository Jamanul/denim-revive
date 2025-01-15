// const { default: gsap } = require("gsap")

// const section = document.getElementById("horizontal")
// let boxItems =gsap.utils.toArray(".horizontal-item")
// let sectionWidth =section.offsetWidth
// gsap.to(boxItems,{
//     xPercent:-100 * (boxItems.length-1),
//     ease: "sine.out",
//     scrollTrigger:{
//         trigger:section,
//         pin:true,
//         scrub:3,
//         snap:1 /(boxItems.length -1),
//         end: "+=" + sectionWidth
//     } 
// })