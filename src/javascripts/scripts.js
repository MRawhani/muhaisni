import { gsap } from "gsap";
import { tabFunctions } from "./Tabs";
import swipe from "./swiperMain";


const tl = gsap.timeline({});

// init Swiper:
const body = document.querySelector("body");
function setUpmobileHeight() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function initAnimation() {
  gsap.to("body", { css: { visibility: "visible" }, duration: 1 });
  gsap.from(body, {
    opacity: 0,
    duration: 1,
    ease: "Power3.easeInOut",
  });
  tl.from(".logo-loading img", {
    scale: 1.5,
    opacity: 0,
    delay: 1,
    duration: 1,
    ease: "Power2.easeInOut",
    rotationZ: 0.01,
  })
    .from(".loading .top .line", {
      yPercent: -200,
      duration: 1.6,
      ease: "expo.inOut",
      stagger: {
        amount: 0.4,
      },
    })
    .from(".loading .bottom .line", {
      yPercent: 200,
      duration: 1.6,
      delay: -2.1,
      ease: "expo.inOut",
      stagger: {
        amount: 0.4,
      },
    })
    .to(".loading .top ", {
      yPercent: -200,
      duration: 1.6,
      delay: 1.5,
      ease: "expo.inOut",
    })
    .to(".loading .bottom ", {
      yPercent: 200,
      duration: 1.6,
      delay: -2.1,
      ease: "expo.inOut",
    })
    .to(".logo-loading img", { scale: 1.5, opacity: 0, duration: 1, delay: 0 })
    .to(".loading", {
      scaleX: 0,
      opacity: 1,
      duration: 1.6,
      ease: "expo.inOut",
    })
    .to(".content-mask", {
      scaleX: 0,

      duration: 1,
      delay: -1.3,
      ease: "expo.inOut",
    })
    .from(".home__content", {
      yPercent: 20,
      duration: 1,

      opacity: 0,
      delay: -1.2,
    })
    .from(".nav", { yPercent: -10, opacity: 0 });
}
document.addEventListener(
  "DOMContentLoaded",
  function () {
    window.onload = function () {
      //  setUpmobileHeight()

      window.addEventListener("resize", () => {
        setUpmobileHeight();
      });
      // initAnimation()

      tabFunctions();
      swipe.initSwiper()
    //  initSwiper();
    };
  },

  false
);

// function initSwiper() {

//   const swiper = new SwiperCore(".main-swiper", {
//     // Optional parameters
//     //direction: 'vertical',
//     effect: "fade",

//     loop: true,
//     allowTouchMove:false,
//     // If we need pagination
//     pagination: {
//       el: ".swiper-pagination",
//     },
//     on: {
//       progress(progress) {
//         console.log(progress);
//       },
//       slideChangeTransitionEnd() {
//         console.log(swiper && swiper.realIndex);
//         tabFunctions(swiper && swiper.realIndex);
//       },
//       slideChangeTransitionStart() {},
//       setTranslate(translate) {},
//     },

//     //   // Navigation arrows
//     // navigation: {
//     //   nextEl: ".swiper-button-next",
//     //   prevEl: ".swiper-button-prev",
//     // },

//     // And if we need scrollbar
//     //   scrollbar: {
//     //     el: '.swiper-scrollbar',
//     //   },
//   });

//   // Define delay (in milliseconds)
//   let swiperDelay = 1200;
//   // Add event to previous button

//   const prevBtn = document.querySelector(".main-swiper-button-prev.enabled");
//   const nextBtn = document.querySelector(".main-swiper-button-next.enabled");
//   const generalBtns = document.querySelectorAll(".main-swiper-button");
//   function navigateSwiper(e,callback){
//     if(!e.target.classList.contains("enabled")){
//          return
//        }
//     else{
//      generalBtns.forEach(function (el) {
//          el.classList.remove("enabled");
//        });

//        gsap.to(".swiper-slide-duplicate .title-wrapper, .swiper-slide .title-wrapper",{
//            scaleX:1,
//            duration:1,
//            ease:"expo.inOut"
//        })
//        // Set timeout for previous slide move
//        setTimeout(function(){

//          // Move to prev slide
//          callback()

//          //gsap.to(".swiper-slide-duplicate-active .title, .swiper-slide .title",{ css: { visibility: "visible" ,opacity:1}})
         
//          gsap.to(".swiper-slide-duplicate-active .title-wrapper, .swiper-slide-active .title-wrapper",{
//             scaleX:0,
//             duration:1,
 
//             ease:"expo.inOut"
//         })

//          // Re-enable swiper buttons
//          generalBtns.forEach(function (el) {
//              el.classList.add("enabled");
//            });
//          }, swiperDelay);
//     }
//   }
//   prevBtn.addEventListener('click',function(e){
//       // Disable swiper buttons so user doesnt click again
//    navigateSwiper(e,function(){swiper.slideNext();})

//   });

//   nextBtn.addEventListener('click',function(e){
//     navigateSwiper(e,function(){swiper.slidePrev();})

    
//     });
// }
