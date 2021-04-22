import SwiperCore, { Navigation, Pagination, EffectFade,Autoplay,Mousewheel } from "swiper/core";
import { tabFunctions } from "./Tabs";
import { gsap } from "gsap";

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, EffectFade,Autoplay,Mousewheel]);
let swiper;
function initSwiper() {
  
// breakpoint where swiper will be destroyed
// and switches to a dual-column layout
const breakpoint = window.matchMedia( '(min-width:900px)' );
// keep track of swiper instances to destroy later

const breakpointChecker = function() {
   // if larger viewport and multi-row layout needed
   
   if ( breakpoint.matches === false ) {
      // clean up old instances and inline styles when available
      if ( swiper !== undefined ) {
        
        swiper.destroy( true, true )
        // document.getElementById('footer').classList.add('putDown')
        // document.body.style.overflow = 'auto'
      };
      // or/and do nothing
      return;
   // else if a small viewport and single column layout needed
   } else if ( breakpoint.matches === true ) {
      // fire small viewport version of swiper
    
      return enableSwiper();
      
   }
};
const enableSwiper = function() {
  
  swiper = new SwiperCore(".main-swiper", {
    effect: "fade",
    autoHeight: false,
    // direction:'vertical',
    loop: false,
    allowTouchMove: false,
    mousewheel: true,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      renderBullet: function (index, className) {
        return '<span class="bullet ' + className + '"></span>';
      },
    },
    on: {
      progress(progress) {
        console.log(progress);
      },
      slideChangeTransitionEnd(swipe) {
        console.log(swiper && swiper.realIndex);
        tabFunctions(swiper && swiper.realIndex);
        if (swiper.realIndex === 2) {
          document.getElementById("footer").classList.add("small");
          document.getElementById("footer").classList.remove("with-padding");
        } else if (swiper.realIndex === 5) {
          document.getElementById("footer").classList.add("with-padding");
          document.getElementById("footer").classList.remove("small");
        } else {
          document.getElementById("footer").classList.remove("small");
          document.getElementById("footer").classList.remove("with-padding");
        }
      },
      slideChangeTransitionStart(swipe) {
        console.log(swipe);
        //     gsap.fromTo(".title-bg",
        //     {
        //       height:50,
        //       width:700,
        //       transformOrigin:'100% 100%',
        //      scaleX:0,

        //     },
        //     {
        //      scaleX:1,
        //      duration:.6,
        //       visibility:'visible',
        //      ease:"expo.inOut"
        //  })
      },
      setTranslate(translate) {},
    },

    //   // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
  });
};
// keep an eye on viewport size changes
breakpoint.addEventListener("change", () => {
  breakpointChecker();

});
// kickstart
breakpointChecker();

  // Define delay (in milliseconds)
  let swiperDelay = 1200;
  // Add event to previous button
  const goBack = document.querySelector(".main-swiper-button-next .double");
  goBack&& goBack.addEventListener('click',()=>{
    setTimeout(function(){
      swiper.slideTo(0);

  }, 200);

    
  })
  const prevBtn = document.querySelector(".main-swiper-button-prev.enabled");
  const nextBtn = document.querySelector(".main-swiper-button-next.enabled");
  const generalBtns = document.querySelectorAll(".main-swiper-button");
  function navigateSwiper(e, callback) {
    if (!e.target.classList.contains("enabled")) {
      return;
    } else {
      generalBtns.forEach(function (el) {
        el.classList.remove("enabled");
      });

      //  gsap.to(".swiper-slide-duplicate .title-wrapper, .swiper-slide .title-wrapper",{
      //      scaleX:1,
      //      duration:1,
      //      ease:"expo.inOut"
      //  })
      gsap.fromTo(
        ".title-bg",
        {
          height: 50,
          width: 700,
          transformOrigin: "100% 100%",
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 0.6,
          visibility: "visible",
          ease: "expo.inOut",
        }
      );
      // Set timeout for previous slide move
      setTimeout(function () {
        // Move to prev slide
        callback();

        //gsap.to(".swiper-slide-duplicate-active .title, .swiper-slide .title",{ css: { visibility: "visible" ,opacity:1}})

        //  gsap.to(".swiper-slide-duplicate-active .title-wrapper, .swiper-slide-active .title-wrapper",{
        //     scaleX:0,
        //     duration:1,

        //     ease:"expo.inOut"
        // })

        // Re-enable swiper buttons
        generalBtns.forEach(function (el) {
          el.classList.add("enabled");
        });
      }, swiperDelay);
      setTimeout(() => {
        gsap.to(
          ".title-bg",

          {
            scaleX: 0,
            duration: 1,
            transformOrigin: "0 0",

            ease: "expo.inOut",
          }
        );
      }, swiperDelay + 600);
    }
  }
  // prevBtn.addEventListener('click',function(e){
  //     // Disable swiper buttons so user doesnt click again
  //  navigateSwiper(e,function(){swiper.slideNext();})

  // });

  // nextBtn.addEventListener('click',function(e){
  //   navigateSwiper(e,function(){swiper.slidePrev();})

  //   });
  var DOM2 = {
    tabsNav: document.querySelector(".tabs-wrapper"),
    tabsNavItems: document.querySelectorAll(".nav-item"),
    bullets_wrapper: document.querySelector(".swiper-pagination"),
    bullets: document.querySelectorAll(".bullet"),
  }; //set active nav element

  DOM2.bullets_wrapper.addEventListener("click", function (e) {
    var navElemClass = "bullet"; //check if we click on a nav item
    if (e.target.classList.contains("swiper-pagination-bullet-active")) {
      return;
    } else if (e.target.classList.contains(navElemClass)) {
      var clickedTab = e.target;
      var activeItemIndex = Array.from(DOM2.bullets).indexOf(clickedTab); //set active nav item
      if (activeItemIndex > swiper.slides.length - 1) return;

      setTimeout(function () {
        swiper.slideTo(activeItemIndex);
      }, 0);
    }
  });
  DOM2.tabsNav.addEventListener("click", function (e) {
    console.log(e.target);
    var navElemClass = "nav-item"; //check if we click on a nav item
    if (e.target.classList.contains("active")) {
      return;
    } else if (e.target.classList.contains(navElemClass)) {
      var clickedTab = e.target;
      var activeItemIndex = Array.from(DOM2.tabsNavItems).indexOf(clickedTab); //set active nav item
      if (activeItemIndex > swiper.slides.length - 1) return;
      //   gsap.to(".swiper-slide-duplicate .title-wrapper, .swiper-slide .title-wrapper",{
      //     scaleX:1,
      //     duration:1,
      //     ease:"expo.inOut"
      // })
      // Set timeout for previous slide move
      setTimeout(function () {
        swiper.slideTo(activeItemIndex);

        //   gsap.to(".swiper-slide-duplicate-active .title-wrapper, .swiper-slide-active .title-wrapper",{
        //      scaleX:0,
        //      duration:1,

        //      ease:"expo.inOut"
        //  })
      }, 0);

      // findActivePanel(activeItemIndex); //set active panel

      // setActivePanel(activeItemIndex);
    }
  });
}



function initNestedSliders() {
  var swiperNestedAbout = new SwiperCore(".swiper-container-about-nested", {
    slidesPerView: 1,
    freeMode: true,
    grabCursor: true,
    spaceBetween: 40,
    nested: true,
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        
      },
      400: {
        slidesPerView: 1.2,
        spaceBetween:20

      },
      550: {
        slidesPerView: 1.7,
    spaceBetween: 25,

      },
      700: {
        slidesPerView: 2.1,
    spaceBetween: 40,

      },
      900: {
        slidesPerView: 2.5,
    centeredSlides: false,


      },
      1200: {
        slidesPerView: 3.5,

      },
      
     
    },
   
  });
  const clientesSettings = {
    slidesPerView:  10,
    loop: true,
  
    grabCursor: true,
    
    freeMode:true,
    // autoplay: {
    //   delay: 0,
    //   disableOnInteraction: false
    // },
    allowTouchMove:false,
    speed: 40000,
    freeModeMomentum:false,
    breakpoints: {
      1900: {
        slidesPerView: 14,
           
          },
      1600: {
        slidesPerView:  12,
           
          },
          1200: {
            slidesPerView:  10,
               
              },
      900: {
        slidesPerView: 8,
      
      },
      550: {
        slidesPerView: 6,
     
      },
      400: {
        slidesPerView: 5,
        
      },
      320: {
        slidesPerView: 3,
       
      },
    
    
    },
  }
  var swiperNestedClients1 = new SwiperCore(".swiper-container-clients-nested1", clientesSettings);
  var swiperNestedClients2 = new SwiperCore(".swiper-container-clients-nested2", clientesSettings);
  var swiperNestedClients3 = new SwiperCore(".swiper-container-clients-nested3", {...clientesSettings, speed:38000,});
  var swiperNestedClients4 = new SwiperCore(".swiper-container-clients-nested4", {...clientesSettings,speed:25000});
  function infinite1() {
    swiperNestedClients1.slideTo(swiperNestedClients1.slides.length);
    swiperNestedClients1.once('transitionEnd', function(){
        swiperNestedClients1.slideTo(swiperNestedClients1.params.slidesPerView, 0, false);
        setTimeout(function () {
            infinite1();    
        }, 0);
    });
}
function infinite2() {
  swiperNestedClients2.slideTo(swiperNestedClients2.slides.length);
  swiperNestedClients2.once('transitionEnd', function(){
      swiperNestedClients2.slideTo(swiperNestedClients2.params.slidesPerView, 0, false);
      setTimeout(function () {
          infinite2();    
      }, 0);
  });
}
function infinite3() {
  swiperNestedClients3.slideTo(swiperNestedClients3.slides.length);
  swiperNestedClients3.once('transitionEnd', function(){
      swiperNestedClients3.slideTo(swiperNestedClients3.params.slidesPerView, 0, false);
      setTimeout(function () {
          infinite3();    
      }, 0);
  });
}
function infinite4() {
  swiperNestedClients4.slideTo(swiperNestedClients4.slides.length);
  swiperNestedClients4.once('transitionEnd', function(){
      swiperNestedClients4.slideTo(swiperNestedClients4.params.slidesPerView, 0, false);
      setTimeout(function () {
          infinite4();    
      }, 0);
  });
}

infinite1();
infinite2();
infinite3();
infinite4();
  var swiperNestedBlogs = new SwiperCore(".swiper-container-blogs-nested", {
    slidesPerView: 2.8,
    grabCursor: true,
    freeMode: true,
    nested: true,

    spaceBetween: 15,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      400: {
        slidesPerView: 1.04,
      },
      550: {
        slidesPerView: 1.4,
    spaceBetween:30,

      },
      700: {
        slidesPerView: 1.8,
    

      },
      900: {
        slidesPerView: 2.1,
    spaceBetween: 40,

      },
      1200: {
        slidesPerView: 2.8,
    spaceBetween: 40,

      },
      
      1900: {
    spaceBetween: 40,

        slidesPerView: 2.6,
      },
    },
  });
}
function initClientsNestedSlider(dimentions) {
  var swiperNestedCompanies = new SwiperCore(
    ".swiper-container-companies-nested",
    {
      slidesPerView: 1,
      grabCursor: true,
      freeMode: true,
      spaceBetween: 20,
      nested: true,
      // slideToClickedSlide:true,
      preventClicks: false,
preventClicksPropagation: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        400: {
          slidesPerView: 1.1,         
        },
        550: {
          slidesPerView: 1.2,
        },
        700: {
          slidesPerView: 2.1,
          spaceBetween:20
          
        },
        900: {
          slidesPerView: 2.5,
        },
        1200: {
          slidesPerView: 3.2,

        },
        1600: {
          slidesPerView: dimentions.height<900&& dimentions.height>800 ? 2.7:3.2,

        },
        1900: {
          spaceBetween:40,
          slidesPerView:  dimentions.height<1020 ? 4.1:4.1,
        },
      },
    }
  );
  var swiperNestedClients = new SwiperCore(".swiper-container-clients-nested", {
    slidesPerView: dimentions.height > 900 ? 14 : 12,
        slidesPerColumn: dimentions.height > 730 ? 4 : 3,
    slidesPerColumnFill: "row",
    breakpoints: {
      1200: {
        slidesPerView: dimentions.height > 900 ? 14 : 12,
        slidesPerColumn: dimentions.height > 730 ? 4 : 3,
      },
      900: {
        slidesPerView: 10,
        slidesPerColumn: dimentions.height > 730 ? 4 : 3,

      },
      550: {
        slidesPerView: 7,
        slidesPerColumn:  5,
      },
      400: {
        slidesPerView: 5,
        slidesPerColumn:  5,
      },
      320: {
        slidesPerView: 3,
        slidesPerColumn:  5,
      },
    
    
    },
  });
}
export default {
  initSwiper,
  swiper,
  initClientsNestedSlider,
  initNestedSliders,
};
