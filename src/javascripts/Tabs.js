
export const   tabFunctions = (active) => {
  var activeItemIndex = active >=0 ?active : findActiveItem(); //find active nav item params
  debugger
  setActiveItem(DOM.tabsNavItems[activeItemIndex])

  var _findActiveItemParams = findActiveItemParams(activeItemIndex),
    _findActiveItemParams2 = _slicedToArray(_findActiveItemParams, 2),
    decorWidth = _findActiveItemParams2[0],
    decorOffset = _findActiveItemParams2[1]; //appending decoration element to an active elem

  var decorElem = appendDecorationNav(); //setting styles to the decoration elem

  styleDecorElem(decorElem, decorWidth, decorOffset); //find active panel

}
  function _slicedToArray(arr, i) {
    return (
      _arrayWithHoles(arr) ||
      _iterableToArrayLimit(arr, i) ||
      _unsupportedIterableToArray(arr, i) ||
      _nonIterableRest()
    );
  }

  function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (
      n === "Arguments" ||
      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
    )
      return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = true;
    var _e = undefined;
    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  var DOM = {
    tabsNav: document.querySelector(".tabs-wrapper"),
    tabsNavItems: document.querySelectorAll(".nav-item"),
    panels: document.querySelectorAll(".tabs__panel"),
  }; //set active nav element

  var setActiveItem = function setActiveItem(elem) {
    DOM.tabsNavItems.forEach(function (el) {
      el.classList.remove("active");
    });
    elem.classList.add("active");
  }; //find active nav element

  var findActiveItem = function findActiveItem() {
    var activeIndex = 0;

    for (var i = 0; i < DOM.tabsNavItems.length; i++) {
      if (DOM.tabsNavItems[i].classList.contains("active")) {
        activeIndex = i;
        break;
      }
    }

    return activeIndex;
  }; //find active nav elements parameters: left coord, width

  var findActiveItemParams = function findActiveItemParams(activeItemIndex) {
    var activeTab = DOM.tabsNavItems[activeItemIndex]; //width of elem

    var activeItemWidth = activeTab.offsetWidth - 1; //left coord in the tab navigation
    var parentPos = document
    .getElementById("parent-id")
    .getBoundingClientRect(),
      style = window.getComputedStyle(document.getElementById("container-padding")),
     pad = style.getPropertyValue("padding-right")
      //  mar = window.getComputedStyle(document.getElementById("tabs__nav")).getPropertyValue("margin-right");
     console.log(activeTab.getBoundingClientRect().right );
    
     const right =
     document.documentElement.clientWidth -
     activeTab.getBoundingClientRect().right -
     (document.documentElement.clientWidth - parentPos.right) 
     const left =
     document.documentElement.clientWidth -
     activeTab.getBoundingClientRect().left -
     (document.documentElement.clientWidth - parentPos.left) +40
    // -
    // parseInt(pad.substr(0, 2)) ;

    //  var activeItemOffset_left = activeTab.offsetLeft;
    var activeItemOffset_left =
      false ? left : right; //17 for scrollbar
    //   var activeItemOffset_left = activeTab.offsetParent-activeTab.offsetLeft+activeTab.offsetWidth;

    return [activeItemWidth, activeItemOffset_left];
  }; //appending decoration block to an active nav element

  var appendDecorationNav = function appendDecorationNav() {
    //creating decoration element
    var decorationElem = document.getElementById("decore");
    decorationElem.classList.add("tabs-wrapper-decoration");
    decorationElem.classList.add("js-decoration"); //appending decoration element to navigation

    // DOM.tabsNav.append(decorationElem); //appending styles to decoration element

    return decorationElem;
  }; //appending styles to decoration nav element

  var styleDecorElem = function styleDecorElem(
    elem,
    decorWidth,
    decorOffset
  ) {
    // var element = document.getElementById('container-padding'),
    // style = window.getComputedStyle(element),
    // pad = style.getPropertyValue('padding-left');

    elem.style.width = "".concat(decorWidth-10).concat("px");
    //   elem.style.left = "-".concat(pad);
    elem.style.transform = `translateX(${
      false ? "" : "-"
    }`.concat(decorOffset, "px)");
  }; //find active panel

  // var findActivePanel = function findActivePanel(index) {
  //   return DOM.panels[index];
  // }; //set active panel class

  // var setActivePanel = function setActivePanel(index) {
  //   DOM.panels.forEach(function (el) {
  //     el.classList.remove("active");
  //   });
  //   DOM.panels[index].classList.add("active");
  // }; //onload function

  // window.addEventListener('load', function () {
  //   //find active nav item

  // findActivePanel(activeItemIndex); //set active panel

  // setActivePanel(activeItemIndex);
  // }); //click nav item function

  DOM.tabsNav.addEventListener("clicwk", function (e) {
    var navElemClass = "nav-item"; //check if we click on a nav item
    if(e.target.classList.contains("active")){
      return
    }
    else if (e.target.classList.contains(navElemClass)) {
      var clickedTab = e.target;
      var activeItemIndex = Array.from(DOM.tabsNavItems).indexOf(clickedTab); //set active nav item

      setActiveItem(clickedTab); //find active nav item

      var activeItem = findActiveItem(); //find active nav item params

      var _findActiveItemParams3 = findActiveItemParams(activeItem),
        _findActiveItemParams4 = _slicedToArray(_findActiveItemParams3, 2),
        decorWidth = _findActiveItemParams4[0],
        decorOffset = _findActiveItemParams4[1]; //setting styles to the decoration elem

      var decorElem = document.getElementById("decore");
      styleDecorElem(decorElem, decorWidth, decorOffset); //find active panel

      // findActivePanel(activeItemIndex); //set active panel

      // setActivePanel(activeItemIndex);
    }
  });