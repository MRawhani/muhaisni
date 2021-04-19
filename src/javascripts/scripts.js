import smoothScroll from "smooth-scroll";

import { tabFunctions } from "./Tabs";
import swipe from "./swiperMain";
import WhenStartAnimation from "./WhenStartAnimation";
import {
  getWindowDimensions,
  setUpmobileHeight,
  insertLogosToClientsPage,
  insertBlogs,
  changeFooterPos,scrollAction 
} from "./helpers";

let dimentions = getWindowDimensions();

document.addEventListener(
  "DOMContentLoaded",
  function () {
    insertLogosToClientsPage();
      insertBlogs();
    window.onload = function () {
      var scroll = new smoothScroll('a[href*="#"]',{
        offset:60
      });
       setUpmobileHeight()

        WhenStartAnimation.initAnimation(dimentions)

      swipe.initSwiper();
      tabFunctions();

      
      swipe.initClientsNestedSlider(dimentions);
      swipe.initNestedSliders();

      document
        .getElementById("menu-icon")
        .addEventListener("click", function () {
          document.getElementById("nav-mobile").classList.toggle("show-mobile-nav");
        });
        document
        .getElementById("close-icon")
        .addEventListener("click", function () {
          document.getElementById("nav-mobile").classList.remove("show-mobile-nav");
        });
        document
        .getElementById("nav-overlay")
        .addEventListener("click", function () {
          document.getElementById("nav-mobile").classList.remove("show-mobile-nav");
        });
      [...document.querySelectorAll(".nav-item-mobile")].forEach((e)=>{
        e.addEventListener("click", function () {
          document.getElementById("nav-mobile").classList.remove("show-mobile-nav");
        });
      })
       
     

      //event lsiteners
      window.addEventListener("scroll", scrollAction);
      window.addEventListener("resize", () => {
        setUpmobileHeight();
        dimentions = getWindowDimensions();

        swipe.initClientsNestedSlider(dimentions);

        tabFunctions();
        changeFooterPos(dimentions);
      });
    };
  },

  false
);
