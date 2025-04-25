// gsap.registerPlugin(ScrollTrigger);

// document.addEventListener("DOMContentLoaded", function(){
//     const cards = [
//         {id: "#card-1", endTranslateX: -2000, rotate: 45},
//         {id: "#card-1", endTranslateX: -1000, rotate: -30},
//         {id: "#card-1", endTranslateX: -2000, rotate: 45},
//         {id: "#card-1", endTranslateX: -2500, rotate: -30},
//     ];

//     // ScrollTrigger.create({
//     //     trigger: ".wrapper-image", 
//     //     start: "top top",
//     //     end: "+=900vh",
//     //     scrub: 1,
//     //     pin: true,
//     //     onUpdate: (self)=>{
//     //         gsap.to(".wrapper-image", {
//     //             x: `${-350 * self.progress}vw`,
//     //             duration: 0.5,
//     //             ease: "power3.out"
//     //         })
//     //     }
//     // })

//     gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.create({
//   trigger: ".gallery-container",
//   start: "top top",
//   end: "+=8000", // adjust based on width
//   scrub: 1,
//   pin: true,
//   onUpdate: (self) => {
//     gsap.to(".wrapper-image", {
//       x: `${-self.progress * (window.innerWidth * 8)}px`, // 8 = number of screens to scroll
//       ease: "none"
//     });
//   }
// });

// })