import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { changeFooterPos } from "./helpers";

const tl = gsap.timeline({});
const body = document.querySelector("body");
function initAnimation(dimentions) {
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
      delay: 1,
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
      duration:1.4,
      ease: "expo.inOut",
    })
    .to(".content-mask", {
      scaleX: 0,

      duration:1.4,
      delay: -1.3,
      ease: "expo.inOut",
    })
   .from(".content-wrapper", {
      yPercent: 20,
      duration: 1,

      opacity: 0,
      delay: -1.2,
    })
    .from("#nav", { yPercent: -10, opacity: 0 })
    .add(() => changeFooterPos(dimentions));
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
          delay: 0,
          duration: 0.6,
          ease: "expo.inOut",
          // rotationZ: 0.01,
        })
        .add(() => {
          document.getElementById("nav").classList.remove("nav-open");
        })
        .to(".mobile-overlay", {
          scaleX: 0,
          opacity: 1,
          delay: -0.5,
          duration: 0.6,
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
          duration: 0.6,
          ease: "expo.inOut",
          // rotationZ: 0.01,
        })
        .add(() => {
          document.getElementById("nav").classList.add("nav-open");
        })
        .to(".nav.mobile", {
          scaleX: 1,
          opacity: 1,
          delay: -0.5,
          duration: 0.6,
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

            delay: -0.2,
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
      [...document.querySelectorAll(".nav-item-mobile a")].forEach(
        (element) => {
          element.classList.remove("active");
        }
      );

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
          delay: 0,
          duration: 0.6,
          ease: "expo.inOut",
          // rotationZ: 0.01,
        })
        .add(() => {
          document.getElementById("nav").classList.remove("nav-open");
        })
        .to(".mobile-overlay", {
          scaleX: 0,
          opacity: 1,
          delay: -0.5,
          duration: 0.6,
          ease: "expo.inOut",
        })
        .add(() => {
          document
            .getElementById("nav")
            .classList.remove("remove-scrolled-styles");
          elem.target.classList.add("active");
        });
    });
  });
};
export const sectionsAnimation = function () {
  const titles = gsap.utils.toArray(".title");
  titles.forEach((title) => {
    var tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        toggleActions: "restart none restart reset",
      },
    });
    tl3.from(title, {
      opacity: 0,
      y: 90,
    });
  });

  const contents = gsap.utils.toArray(".content-wrapper .content");
  contents.forEach((title) => {
    var tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        toggleActions: "restart none restart reset",
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
        trigger: ".hero .nestedSwiper-overlay",

        ease: "power2.inOut",
        toggleActions: "play none restart reset",
      },
    })
    .fromTo(
      ".hero ",
      {
        scaleX:1.2,
        x: 950,
       
        opacity: 1,
      },
      {
        x: 0,
        scaleX:1,

        opacity: 1,
        duration: 1.2,
        ease: "expo.inOut",
      }
    )
    .to(".hero .img", {
      x: 0,
      scaleX: 0.8,
      transformOrigin: "0 0",
      delay: -0.8,
      duration: 0.4,
      ease: "expo.inOut",
    })
    .to(".hero .nestedSwiper-overlay", {
      x: -950,
      // transformOrigin:'0 0',
      opacity: 1,
      duration: 1,
      ease: "expo.inOut",
    })
    .to(".hero .img", {
      x: 0,
      scaleX: 1,
      // transformOrigin:'0 0',
      delay: -1,
      duration: 1,
      ease: "expo.inOut",
    });
  const projectTriggers = document.querySelectorAll(".nestedSwiper");

  projectTriggers.forEach(addTimeline);

  function addTimeline(project, index) {
    const overlay = project.querySelector(".nestedSwiper-overlay");
    const container = project.querySelector(".swiper-container");

    const timeline = gsap
    .timeline({
      scrollTrigger: {
        trigger: project,

        ease: "expo.inOut",
        toggleActions: "play none restart reset",
      },
    })
    .fromTo(
      project,
      {
        x: 950,
        transformOrigin: "100% 100%",
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
      x: -950,
      // transformOrigin:'0 0',
      opacity: 1,
      delay:.2,
      duration: 1,
      ease: "expo.inOut",

    })
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".contact__form",

          ease: "expo.inOut",
          toggleActions: "play none restart reset",
        },
      })
      .fromTo(
       ".contact__form",
       {
        x: 100,
      
        opacity:0,
       
      },
      {
        x: 0,
      
        opacity:1,
        duration: 1.2,
        ease: "expo.inOut",
      },
        
      )
      
  
  }
};
export default {
  initAnimation,
  navBarAnimation,
  sectionsAnimation,
};
