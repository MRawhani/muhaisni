

import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper/core";
import { tabFunctions } from "./Tabs";
import { gsap } from "gsap";

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, EffectFade]);
let swiper;
function initSwiper(){
    swiper = new SwiperCore(".main-swiper", {
        // Optional parameters
        //direction: 'vertical',
        effect: "fade",
    
        loop: true,
        allowTouchMove:false,
        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },
        on: {
          progress(progress) {
            console.log(progress);
          },
          slideChangeTransitionEnd() {
            console.log(swiper && swiper.realIndex);
            tabFunctions(swiper && swiper.realIndex);
          },
          slideChangeTransitionStart() {},
          setTranslate(translate) {},
        },
    
        //   // Navigation arrows
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
    
        // And if we need scrollbar
        //   scrollbar: {
        //     el: '.swiper-scrollbar',
        //   },
      });
    
      // Define delay (in milliseconds)
      let swiperDelay = 1200;
      // Add event to previous button
    
      const prevBtn = document.querySelector(".main-swiper-button-prev.enabled");
      const nextBtn = document.querySelector(".main-swiper-button-next.enabled");
      const generalBtns = document.querySelectorAll(".main-swiper-button");
      function navigateSwiper(e,callback){
        if(!e.target.classList.contains("enabled")){
             return
           }
        else{
         generalBtns.forEach(function (el) {
             el.classList.remove("enabled");
           });
    
           gsap.to(".swiper-slide-duplicate .title-wrapper, .swiper-slide .title-wrapper",{
               scaleX:1,
               duration:1,
               ease:"expo.inOut"
           })
           // Set timeout for previous slide move
           setTimeout(function(){
    
             // Move to prev slide
             callback()
    
             //gsap.to(".swiper-slide-duplicate-active .title, .swiper-slide .title",{ css: { visibility: "visible" ,opacity:1}})
             
             gsap.to(".swiper-slide-duplicate-active .title-wrapper, .swiper-slide-active .title-wrapper",{
                scaleX:0,
                duration:1,
     
                ease:"expo.inOut"
            })
    
             // Re-enable swiper buttons
             generalBtns.forEach(function (el) {
                 el.classList.add("enabled");
               });
             }, swiperDelay);
        }
      }
      prevBtn.addEventListener('click',function(e){
          // Disable swiper buttons so user doesnt click again
       navigateSwiper(e,function(){swiper.slideNext();})
    
      });
    
      nextBtn.addEventListener('click',function(e){
        navigateSwiper(e,function(){swiper.slidePrev();})
    
        
        });
        var DOM2 = {
            tabsNav: document.querySelector(".tabs-wrapper"),
            tabsNavItems: document.querySelectorAll(".nav-item"),
          
          }; //set active nav element
        
        DOM2.tabsNav.addEventListener("click", function (e) {
            
            var navElemClass = "nav-item"; //check if we click on a nav item
            if(e.target.classList.contains("active")){
              return
            }
           
            else if (e.target.classList.contains(navElemClass)) {
              var clickedTab = e.target;
              var activeItemIndex = Array.from(DOM2.tabsNavItems).indexOf(clickedTab); //set active nav item
             if(activeItemIndex>swiper.slides.length-1) return
              gsap.to(".swiper-slide-duplicate .title-wrapper, .swiper-slide .title-wrapper",{
                scaleX:1,
                duration:1,
                ease:"expo.inOut"
            })
            // Set timeout for previous slide move
            setTimeout(function(){
     
              swiper.slideTo(activeItemIndex+1)

              gsap.to(".swiper-slide-duplicate-active .title-wrapper, .swiper-slide-active .title-wrapper",{
                 scaleX:0,
                 duration:1,
      
                 ease:"expo.inOut"
             })
     
            
              }, swiperDelay);
         
            
              // findActivePanel(activeItemIndex); //set active panel
        
              // setActivePanel(activeItemIndex);
            }
          });
    
}

export default {
    initSwiper,
    swiper
}