import smoothScroll from "smooth-scroll";

import { tabFunctions } from "./Tabs";
import swipe from "./swiperMain";
import animationScripts from "./animationScripts";

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
    // insertBlogs();
    window.onload = function () {
      var scroll = new smoothScroll('a[href*="#"]', {
        offset: 60,
        // updateURL: true, // Update the URL on scroll
        // popstate: true, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)
      });
    

      // new ActiveMenuLink(".navbar", options);
      setUpmobileHeight();

      animationScripts.initAnimation(dimentions);
      animationScripts.updateOnScroll();
      if (dimentions.width <= 900) {
        animationScripts.navBarAnimation();
        animationScripts.sectionsAnimation();
      }
      // changeFooterPos(dimentions);
      swipe.initSwiper();
      tabFunctions();

      swipe.initClientsNestedSlider(dimentions);
      swipe.initNestedSliders();

      //event lsiteners
      window.addEventListener("click", function (e) {
        let ele = document.querySelector(".share-box.show");

        if (ele) {
          // ele.contains(e.target)
          if (
            [...document.querySelectorAll(".blog-share-btn")].findIndex((btn) =>
              btn.contains(e.target)
            ) != -1
          ) {
            // Clicked in box
          } else {
            // Clicked outside the box
            ele && ele.classList.remove("show");
          }
        }
      });
      document.querySelectorAll(".blog-share-btn").forEach((element) => {
        element.addEventListener("click", (e) => {
          var child = element.parentElement.querySelectorAll(".share-box");
          if (child[0].classList.contains("show")) {
            child[0].classList.remove("show");
          } else {
            document.querySelectorAll(".share-box").forEach((elem) => {
              if (elem.classList.contains("show")) {
                elem.classList.remove("show");
              }
            });
            child[0].classList.toggle("show");
          }
        });
      });

      document.querySelectorAll(".copy-link").forEach((element) => {
        element.addEventListener("click", (e) => {
          var str = element.querySelector(".link-text").innerHTML;

          const el = document.createElement("textarea");
          el.value = str;
          el.setAttribute("readonly", "");
          el.style.position = "absolute";
          el.style.left = "-9999px";
          document.body.appendChild(el);
          el.select();
          document.execCommand("copy");
          document.body.removeChild(el);
          document.querySelector(".alert.ar") &&
            (document.querySelector(".alert.ar").innerHTML = "تم النسخ");
          document.querySelector(".alert.en") &&
            (document.querySelector(".alert.en").innerHTML = "Copied");
          document.querySelector(".alert").classList.add("show");
          setTimeout(() => {
            document.querySelector(".alert").classList.remove("show");
          }, 2000);
        });
      });
      document.getElementById("send-btn").addEventListener("click", () => {
        document.querySelector(".alert.ar") &&
          (document.querySelector(".alert.ar").innerHTML = "تم الارسال");
        document.querySelector(".alert.en") &&
          (document.querySelector(".alert.en").innerHTML = "Sent");
        document.querySelector(".alert").classList.add("show");
        setTimeout(() => {
          document.querySelector(".alert").classList.remove("show");
        }, 2000);
      });
      window.addEventListener("scroll", scrollAction);
      window.addEventListener("resize", () => {
        setUpmobileHeight();
        dimentions = getWindowDimensions();
        // if (dimentions.width <= 900) {
        //   animationScripts.navBarAnimation();
        //   animationScripts.sectionsAnimation();
        // }
        // swipe.initClientsNestedSlider(dimentions);

        tabFunctions();
        changeFooterPos(dimentions);
      });
    };
  },

  false
);
