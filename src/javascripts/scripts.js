import smoothScroll from "smooth-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { tabFunctions } from "./Tabs";
import swipe from "./swiperMain";
import WhenStartAnimation from "./WhenStartAnimation";
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
      });
      setUpmobileHeight();

      //  WhenStartAnimation.initAnimation(dimentions)
      if (dimentions.width <= 900) {
        WhenStartAnimation.navBarAnimation();
        WhenStartAnimation.sectionsAnimation();
      }
      changeFooterPos(dimentions);
      swipe.initSwiper();
      tabFunctions();

      swipe.initClientsNestedSlider(dimentions);
      swipe.initNestedSliders();

      //event lsiteners
      window.addEventListener("scroll", scrollAction);
      window.addEventListener("resize", () => {
        setUpmobileHeight();
        dimentions = getWindowDimensions();
        if (dimentions.width <= 900) {
          WhenStartAnimation.navBarAnimation();
          WhenStartAnimation.sectionsAnimation();
        }
        swipe.initClientsNestedSlider(dimentions);

        tabFunctions();
        changeFooterPos(dimentions);
      });
    };
  },

  false
);
