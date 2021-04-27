import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { changeFooterPos } from "./helpers";

const tl = gsap.timeline({});
const body = document.querySelector("body");
function initAnimation(dimentions) {
  gsap.to("body", { css: { visibility: "visible" }, duration: 1 });
  gsap.to(".main-arrows", { css: { visibility: "visible" }, duration: 1 });
  // gsap.to(".social-media", { css: { visibility: "visible" }, duration: 1 });
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
    .to(".loading .top .line", {
      yPercent: -200,
      duration: 1.6,
      delay: 1,
      ease: "expo.inOut",
      stagger: {
        amount: 0.4,
      },
    })
    .to(".loading .bottom .line", {
      yPercent: 200,
      duration: 1.6,
      delay: -2.1,
      ease: "expo.inOut",
      stagger: {
        amount: 0.4,
      },
    })
    .to(".logo-loading img", { scale: 1.5, opacity: 0, duration: 1, delay: 0 })
    .to(".loading", {
      scaleX: 0,
      opacity: 1,
      duration:1.7,
      ease: "expo.inOut",
    })
    .to(".content-mask", {
      scaleX: 0,

      duration:1.7,
      delay: -1.49,
      ease: "expo.inOut",
    })
   .from(".content-wrapper", {
      yPercent: 20,
      duration: 1,

      opacity: 0,
      delay: -1.2,
    })
    .from("#nav", { yPercent: -10, opacity: 0 })
    .add(() => {
      document.getElementById("footer").classList.add("show-icons");
      
      changeFooterPos(dimentions)});
    gsap.from('.hero', {
      translateY: -30,
      duration: 1.85,
      yoyo: true,
      repeat: -1,
      ease: "Power1.easeInOut",
    });
}

export const navBarAnimation = function () {
  const tl2 = gsap.timeline({});
  const menu = document.getElementById("menu-icon");
  menu.addEventListener("click", function (e) {
    if (menu.classList.contains("clicked")) {
      return;
    }
    // document.getElementById("nav-mobile").classList.toggle("show-mobile-nav");
    if (document.getElementById("nav").classList.contains("nav-open")) {
      //   menu.classList.remove("nav-open");
      menu.classList.add("clicked");

      tl2
        .fromTo(
          ".nav-item-mobile",
          {
            yPercent: 0,
          },
          {
            yPercent: 150,
            opacity: 0,
            duration: 0.6,
            ease: "Power1.inOut",
            stagger: {
              amount: -0.6,
            },
          }
        )
        .to(".nav.mobile", {
          scaleX: 0,
          opacity: 1,
          delay: -.7,
          duration: 1.6,
          ease: "expo.inOut",
          // rotationZ: 0.01,
        })
        .add(() => {
          document.getElementById("nav").classList.remove("nav-open");
        })
        .to(".mobile-overlay", {
          scaleX: 0,
          opacity: 1,
          delay: -1.5,
          duration: 1.6,
          ease: "expo.inOut",
        })
        .add(() => {
          document
            .getElementById("nav")
            .classList.remove("remove-scrolled-styles");
          menu.classList.remove("clicked");
        });
      // document.getElementById("nav").classList.remove("nav-open");
    } else {
      document.getElementById("nav").classList.add("remove-scrolled-styles");
      menu.classList.add("clicked");

      tl2
        .to(".mobile-overlay", {
          css: { scaleX: 1, opacity: 1 },
          delay: 0,
          duration: 1.6,
          ease: "expo.inOut",
          // rotationZ: 0.01,
        })
        .add(() => {
          document.getElementById("nav").classList.add("nav-open");
        })
        .to(".nav.mobile", {
          scaleX: 1,
          opacity: 1,
          delay: -1.5,
          duration: 1.6,
          ease: "expo.inOut",
          // rotationZ: 0.01,
        })
        .fromTo(
          ".nav-item-mobile",
          {
            yPercent: 150,
            opacity: 0,
            // skewY: 7,
          },
          {
            yPercent: 0,
            opacity: 1,
            // skewY: 0,

            delay: -0.8,
            duration: 0.6,
            ease: "Power1.inOut",
            stagger: {
              amount: 0.6,
            },
          }
        )
        .add(() => {
          menu.classList.remove("clicked");
        });
    }
  });

  [...document.querySelectorAll(".nav-item-mobile a")].forEach((e) => {
    e.addEventListener("click", function (elem) {
      // [...document.querySelectorAll(".nav-item-mobile a")].forEach(
      //   (element) => {
      //     element.classList.remove("active");
      //   }
      // );

      tl2
        .fromTo(
          ".nav-item-mobile",
          {
            yPercent: 0,
          },
          {
            yPercent: 150,
            opacity: 0,
            duration: 0.6,
            ease: "Power1.inOut",
            stagger: {
              amount: -0.6,
            },
          }
        )
        .to(".nav.mobile", {
          scaleX: 0,
          opacity: 1,
          delay: -.7,
          duration: 1.6,
          ease: "expo.inOut",
          // rotationZ: 0.01,
        })
        .add(() => {
          document.getElementById("nav").classList.remove("nav-open");
        })
        .to(".mobile-overlay", {
          scaleX: 0,
          opacity: 1,
          delay: -1.5,
          duration: 1.6,
          ease: "expo.inOut",
        })
        .add(() => {
          document
            .getElementById("nav")
            .classList.remove("remove-scrolled-styles");
          // elem.target.classList.add("active");
        });
    });
  });
};
export const sectionsAnimation = function () {
  // const titles = gsap.utils.toArray(".title");
  // titles.forEach((title) => {
  //   var tl3 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: title,
  //       toggleActions: "play complete none reset",
  //     },
  //   });
  //   tl3.from(title, {
  //     opacity: 0,
  //     y: 90,
  //   });
  // });

  const fadeUpElems = gsap.utils.toArray(".fade-up");
  fadeUpElems.forEach((title) => {
    var tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: title,
    
        toggleActions: "play complete none reset ",
      },
    });
    tl3.fromTo(
      title,
      {
        opacity: 0,
        y: 90,
      },
      {
        opacity: 1,
        y: 0,
      }
    );
  });
  const timeline = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".hero .img",

        ease: "power2.inOut",
        toggleActions: "play complete none reset ",
      },
    })
    .fromTo(
      ".hero .img",
      {
       
        x: 990,
       
        opacity: 1,
      },
      {
        x: 0,
        
        opacity: 1,
        duration: 2,
        ease: "expo.inOut",
      }
    )
    // .to(".hero .img", {
    //   x: 0,
    //   scaleX: 0.8,
    //   transformOrigin: "0 0",
    //   delay: -0.8,
    //   duration: 0.4,
    //   ease: "expo.inOut",
    // })
    // .to(".hero .nestedSwiper-overlay", {
    //   x: -950,
    //   // transformOrigin:'0 0',
    //   opacity: 1,
    //   duration: 1,
    //   ease: "expo.inOut",
    // })
    // .to(".hero .img", {
    //   x: 0,
    //   scaleX: 1,
    //   // transformOrigin:'0 0',
    //   delay: -1,
    //   duration: 1,
    //   ease: "expo.inOut",
    // });
  const projectTriggers = document.querySelectorAll(".nestedSwiper.has-overlay");

  projectTriggers.forEach(addTimeline);

  function addTimeline(project, index) {
    const overlay = project.querySelector(".nestedSwiper-overlay");
    const container = project.querySelector(".swiper-container");
    let value = index%2 ===0 ? 950: -950
    let origin = index%2 ===0 ? "100% 100%": "0 0"
    const timeline = gsap
    .timeline({
      scrollTrigger: {
        trigger: project,
        // scrub:true,
        ease: "expo.inOut",
        toggleActions: "play complete none reset ",
      },
    })
    .fromTo(
      project,
      {
        x: value,
        transformOrigin: origin,
        opacity: 1,
        
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "expo.inOut",

      }
    )
    
   .to(overlay, {
      x: -value,
      // transformOrigin:'0 0',
      opacity: 1,
      delay:.2,
      duration: 1,
      ease: "expo.inOut",

    })
    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: ".contact__form",

    //       ease: "expo.inOut",
    //       toggleActions: "play complete none reset ",
    //     },
    //   })
    //   .fromTo(
    //    ".contact__form",
    //    {
    //     y: 90,
      
    //     opacity:0,
       
    //   },
    //   {
    //     y: 0,
      
    //     opacity:1,
    //     duration: 1.2,
    //     ease: "expo.inOut",
    //   },
        
    //   )
      
  
  }
};
export const updateOnScroll = function(){
 const navs=  document.querySelectorAll(".nav-item-mobile a")
 const makeActive = (link) => navs[link].classList.add("active");
 const removeActive = (link) => navs[link].classList.remove("active");
 const removeAllActive = () => [...Array(navs.length).keys()].forEach((link) => removeActive(link));
  ScrollTrigger.create({
    trigger: "#home",
        


    start:'top center',
    onEnter: ()=>{
    
      window.location.hash = '#!home';
        removeAllActive()
        makeActive(0)
        },
        // onLeave:()=>{
    
        //   window.location.hash = '#!about';
        //     removeAllActive()
        //     makeActive(1)
        //     },
      
        onLeaveBack: ()=>{
    
          window.location.hash = '#!home';
            removeAllActive()
            makeActive(1)
            },
   
  //   onEnterBack: ()=>{
     
  // window.location.hash = '#!home';
  // removeAllActive()
  // makeActive(0)
        // },
   
  });
  ScrollTrigger.create({
    trigger: "#about",
        

    
    start:'top center',
    onEnter: ()=>{
  // window.location.hash = '#about';
  window.location.hash = '#!about';
  removeAllActive()
  makeActive(1)
    },
    // onLeave:()=>{
    
    //   window.location.hash = '#!clients';
    //     removeAllActive()
    //     makeActive(2)
    //     },
  
    onLeaveBack: ()=>{

      window.location.hash = '#!home';
        removeAllActive()
        makeActive(0)
        },
    // onEnterBack: ()=>{
  
    //   window.location.hash = '#!about';
    //   removeAllActive()
    //   makeActive(1)
    //     },
  
  });
  ScrollTrigger.create({
    trigger: "#clients",
    
    // onLeave:()=>{
    
    //   window.location.hash = '#!companies';
    //     removeAllActive()
    //     makeActive(3)
    //     },
  
    onLeaveBack: ()=>{

      window.location.hash = '#!about';
        removeAllActive()
        makeActive(1)
    
      },
      start:'top center',
    onEnter: ()=>{
  // window.location.hash = '#clients';
  window.location.hash = '#!clients';
  removeAllActive()
  makeActive(2)
    },
   
    // onEnterBack: ()=>{
  
    //   window.location.hash = '#!clients';
    //   removeAllActive()
    //   makeActive(2)
    //     },
  
  });
  ScrollTrigger.create({
    trigger: "#companies",
        
    // onLeave:()=>{
    
    //   window.location.hash = '#!blogs';
    //     removeAllActive()
    //     makeActive(4)
    //     },
  
    onLeaveBack: ()=>{

      window.location.hash = '#!clients';
        removeAllActive()
        makeActive(2)
        },
    
        start:'top center',
    onEnter: ()=>{
  // window.location.hash = '#companies';
  window.location.hash = '#!companies';
  removeAllActive()
  makeActive(3)
    },
   
    // onEnterBack: ()=>{
  
    //   window.location.hash = '#!companies';
    //   removeAllActive()
    //   makeActive(3)
    //     },
  
  });
  ScrollTrigger.create({
    trigger: "#blogs",
        
    // onLeave:()=>{
    
    //   window.location.hash = '#!contact';
    //     removeAllActive()
    //     makeActive(5)
    //     },
  
    onLeaveBack: ()=>{

      window.location.hash = '#!companies';
        removeAllActive()
        makeActive(3)
        },
    
        start:'top center',
    onEnter: ()=>{
  // window.location.hash = '#blogs';
  window.location.hash = '#!blogs';
  removeAllActive()
  makeActive(4)
    },
   
    // onEnterBack: ()=>{
  
    //   window.location.hash = '#!blogs';
    //   removeAllActive()
    //   makeActive(4)
    //     },
  
  });
  ScrollTrigger.create({
    trigger: "#contact",
    // onLeave:()=>{
    
    //   window.location.hash = '#!contact';
    //     removeAllActive()
    //     makeActive(5)
    //     },
  
    onLeaveBack: ()=>{

      window.location.hash = '#!blogs';
        removeAllActive()
        makeActive(4)
        },

    
        start:'top center',
    onEnter: ()=>{
  // window.location.hash = '#contact';
  window.location.hash = '#!contact';
  removeAllActive()
  makeActive(5)
    },
   
    // onEnterBack: ()=>{
  
    //   window.location.hash = '#!contact';
    //   removeAllActive()
    //   makeActive(5)
    //     },
  
  });
}
export default {
  initAnimation,
  navBarAnimation,
  updateOnScroll,
  sectionsAnimation,
};
