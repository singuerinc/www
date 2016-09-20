/* global window, setTimeout, Image, document */
import anime from "animejs";
import NProgress from "nprogress";

const _onReady = Symbol("_onReady");
const _totalImgLoaded = Symbol("_totalImgLoaded");
const _isRetina = Symbol("_isRetina");
const _isMobile = Symbol("_isMobile");
const _posts = Symbol("_posts");

/**
 * The Portfolio class
 * @class Portfolio
 */
class Portfolio {

  constructor() {
    const STYLE = Portfolio.getComputedStyle(document.querySelector("html"));

    this[_posts] = window.posts;
    this[_isRetina] = window.devicePixelRatio > 1;
    this[_isMobile] = (parseInt(STYLE.getPropertyValue("width"), 10)) < 768;
    this[_totalImgLoaded] = 0;
  }

  /**
   * Starts the load of all images in the portfolio.
   * @returns {void}
   */
  load() {
    NProgress.configure({ showSpinner: false });
    const onLoad = (post, src) => {
      const tag = document.querySelector(`.post-image.${post.id}`);

      tag.style.backgroundImage = `url(${src})`;

      this[_totalImgLoaded]++;
      NProgress.set(this[_totalImgLoaded] / this[_posts].length);
      if (this[_totalImgLoaded] === this[_posts].length) {
        const waitBeforeReady = 200;

        setTimeout(() => {
          NProgress.done(true);
          this[_onReady]();
        }, waitBeforeReady);
      }
    };

    for (let i = 0; i < this[_posts].length; i++) {
      let filename,
        src;

      if (this[_isMobile] && !this[_isRetina]) {
        filename = `${this[_posts][i].image}-md.jpg`;
      }
      else {
        filename = `${this[_posts][i].image}.jpg`;
      }

      src = `./img/home/${filename}`;

      if (i < 4) {
        const image = new Image();

        image.onload = () => onLoad(this[_posts][i], image.src);
        image.src = src;
      }
      else {
        onLoad(this[_posts][i], src);
      }
    }
  }

  /**
   * When all images are loaded an animation is played.
   * @returns {void}
   */
  [_onReady]() {
    anime({
      targets: ".pre.hide",
      begin: (animation) => animation.animatables[0].target.classList.remove("hide"),
      opacity: [0, 1],
      duration: 1500
    });

    anime({
      targets: ".sidebar",
      begin: (animation) => animation.animatables[0].target.classList.remove("hide"),
      translateX: {
        value: [-400, 0]
      },
      duration: 1500,
      easing: "easeInOutExpo"
    });

    for (let i = 0; i < this[_posts].length; i++) {
      const pId = this[_posts][i].id,
        li = document.querySelector(`li#${pId}`);

      li.classList.remove("hide");
      li.querySelector(".w-link").style.backgroundColor = "black";
    }

    anime({
      targets: ".posts li:nth-child(-n+4)",
      translateY: [400, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeInOutExpo",
      delay: (el, index) => 250 * index
    });
  }

  static getComputedStyle(elem) {
    if (elem.ownerDocument.defaultView.opener) {
      return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
    }
    return window.getComputedStyle(elem, null);
  }

}

export default Portfolio;
