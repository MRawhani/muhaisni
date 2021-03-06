export const getWindowDimensions = function () {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const setUpmobileHeight = function () {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

export const insertLogosToClientsPage = function () {
  // for (let index = 1; index <= 90; index++) {
  //   document.getElementById("clients-logos").insertAdjacentHTML(
  //     "beforeend",
  //     `
  // <div class="swiper-slide">
  // <div class="clients__logo">
  //   <img src="images/clients/Client_${index}.svg" alt="client logo" />

  // </div>
  // </div>
  // `
  //   );
  // }
  for (let index = 1; index <= 25; index++) {
    document.getElementById("clients-logos1").insertAdjacentHTML(
      "beforeend",
      `
    <div class="swiper-slide">
    <div class="clients__logo">
      <img src="images/clients/Client_${index}.svg" alt="client logo" />
     
    </div>
    </div>
    `
    );
  }
  for (let index = 26; index <= 50; index++) {
    document.getElementById("clients-logos2").insertAdjacentHTML(
      "beforeend",
      `
    <div class="swiper-slide">
    <div class="clients__logo">
      <img src="images/clients/Client_${index}.svg" alt="client logo" />
     
    </div>
    </div>
    `
    );
  }
  for (let index = 51; index <= 75; index++) {
    document.getElementById("clients-logos3").insertAdjacentHTML(
      "beforeend",
      `
    <div class="swiper-slide">
    <div class="clients__logo">
      <img src="images/clients/Client_${index}.svg" alt="client logo" />
     
    </div>
    </div>
    `
    );
  }
  for (let index = 76; index <= 90; index++) {
    document.getElementById("clients-logos4").insertAdjacentHTML(
      "beforeend",
      `
    <div class="swiper-slide">
    <div class="clients__logo">
      <img src="images/clients/Client_${index}.svg" alt="client logo" />
     
    </div>
    </div>
    `
    );
  }
};

//not used currently
export const insertBlogs = function () {
  let para = `
  ?????????????? ???? ???? ?????????? ?????????????? ???????? ?????????? ???? ?????????? ?????? ?????????? ???????????? ?????????? ?????????????? ???? ?????????? ???????? ???? ?????????????? ?????? ???????? ?????? ?????????? ???? ?????????????? ?????? ???????? ?????? ???????? ???? ?????????????? ?????? ???????? ?????? ????????
  `;
  let para_en = `
   The Philippines is one of the first countries that I visited in my life after India and China, and it was for me and its people kind in dealing perfectly well, and God is in dealing perfectly well.
     `;
  for (let index = 0; index < 7; index++) {
    document.getElementById("blogs-wrapper") &&
      document.getElementById("blogs-wrapper").insertAdjacentHTML(
        "beforeend",
        `
        <div class="swiper-slide">
        <div class="blogs__box">
          <div class="blogs__box--img"
          >
          <img src="images/blog.png" alt="">
          </div>
         <div class="blogs__box--content">
          <h1 class="f-bold">
            ?????????? ?????? ?????????????? ?????????????? ????????????
          </h1>
          <p>
        ${para.length > 100 ? para.substr(0, 120) : para}
          </p>
          <div class="blogs__box--btns">
            <a href="" class="btn-link color-second has-icon ">
              <span>?????????? ????????????</span>
            <img src="images/arrow-left.svg" alt="blog " />

            </a>
            <a href="" class="btn-link color-main has-icon-right ">
              <img src="images/share.svg" alt="blog " />
              <span>???????? ??????????????</span>

            </a>
          </div>
         </div>
        </div>
        </div>
    `
      );
    document.getElementById("blogs-wrapper-en") &&
      document.getElementById("blogs-wrapper-en").insertAdjacentHTML(
        "beforeend",
        `
        <div class="swiper-slide">
        <div class="blogs__box">
          <div class="blogs__box--img"
          >
          <img src="images/blog.png" alt="">
          </div>
         <div class="blogs__box--content">
          <h1 class="f-bold">
          My trip to the Philippines, info and advice
          </h1>
          <p>
        ${para_en.length > 100 ? para_en.substr(0, 120) : para_en}
          </p>
          <div class="blogs__box--btns">
            <a href="" class="btn-link color-second has-icon ">
              <span>Read More</span>
            <img src="images/arrow-left.svg" alt="blog " />

            </a>
            <a href="" class="btn-link color-main has-icon-right ">
              <img src="images/share.svg" alt="blog " />
              <span>Share</span>

            </a>
          </div>
         </div>
        </div>
        </div>
    `
      );
  }
};


// for changing website layout between mobile and desktop
export const changeFooterPos = (dimentions) => {
  if (dimentions.width > 900) {
    document.getElementById("footer").classList.contains("putDown") &&
      document.getElementById("footer").classList.remove("putDown");

    ///
    document
      .getElementById("arrows-wrapper")
      .classList.contains("custom-position") &&
      document
        .getElementById("arrows-wrapper")
        .classList.remove("custom-position");

    document.body.style.overflow = "hidden";
    // if (
    //   dimentions.height * 2 + 150 < dimentions.width ||
    //   dimentions.height < 600 ||
    //   (dimentions.width > 1900 && dimentions.height < 950)
    // ) {
    //   // document.getElementById('footer').classList.add('putDown')
    //   // document.getElementById('arrows-wrapper').classList.add('custom-position')
    //   // document.body.style.overflow = 'auto'
    // } else {
    //   document.getElementById("footer").classList.remove("putDown");
    //   document
    //     .getElementById("arrows-wrapper")
    //     .classList.remove("custom-position");

    //   document.body.style.overflow = "hidden";
    // }
  } else {
    document.getElementById("footer").classList.add("putDown");
    document.body.style.overflow = "auto";
    document.getElementById("arrows-wrapper").classList.add("custom-position");
  }
};

//nav bar scroll event
export const scrollAction = () => {
  const isTop = window.scrollY > 10;
  const nav1 = document.getElementById("nav");

  if (isTop) {
    nav1.classList.add("scrolled");
  } else {
    nav1.classList.remove("scrolled");
  }
};
