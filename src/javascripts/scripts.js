import smoothScroll from "smooth-scroll";


import { tabFunctions } from "./Tabs";
import swipe from "./swiperMain";
import WhenStartAnimation from "./WhenStartAnimation";
import scrollSpy from 'simple-scrollspy'
import {
  getWindowDimensions,
  setUpmobileHeight,
  insertLogosToClientsPage,
  insertBlogs,
  changeFooterPos,
  scrollAction,
} from "./helpers";


let dimentions = getWindowDimensions();

document.addEventListener(
  "DOMContentLoaded",
  function () {
    insertLogosToClientsPage();
    insertBlogs();
    window.onload = function () {
      var scroll = new smoothScroll('a[href*="#"]', {
        offset: 60,
       // updateURL: true, // Update the URL on scroll
       // popstate: true, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)
     
       });
      
      // new ActiveMenuLink(".navbar", options);
      setUpmobileHeight();

        WhenStartAnimation.initAnimation(dimentions)
        WhenStartAnimation.updateOnScroll()
      if (dimentions.width <= 900) {
        WhenStartAnimation.navBarAnimation();
        WhenStartAnimation.sectionsAnimation();
      }
      // changeFooterPos(dimentions);
      swipe.initSwiper();
      tabFunctions();

      swipe.initClientsNestedSlider(dimentions);
      swipe.initNestedSliders();

      //event lsiteners
      document.getElementById("send-btn").addEventListener("click",()=>{
        document.querySelector(".alert").classList.add("show")
        setTimeout(() => {
        document.querySelector(".alert").classList.remove("show")
          
        }, 2000);
      })
      window.addEventListener("scroll", scrollAction);
      window.addEventListener("resize", () => {
        setUpmobileHeight();
        dimentions = getWindowDimensions();
        // if (dimentions.width <= 900) {
        //   WhenStartAnimation.navBarAnimation();
        //   WhenStartAnimation.sectionsAnimation();
        // }
        // swipe.initClientsNestedSlider(dimentions);

        tabFunctions();
        changeFooterPos(dimentions);
      });
    };
  },

  false
);
