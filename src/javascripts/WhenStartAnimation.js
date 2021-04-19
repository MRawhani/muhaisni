

import { gsap } from "gsap";
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
      .from("#nav", { yPercent: -10, opacity: 0 }).add( ()=>changeFooterPos(dimentions));
  }

  export default {
      initAnimation
  }