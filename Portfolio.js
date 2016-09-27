/* global window, setTimeout, Image, document */
import anime from "animejs";
import NProgress from "nprogress";

const _showPrevAndNextProjects = Symbol("_showPrevAndNextProjects");
const _showTitle = Symbol("_showTitle");
const _showSidebar = Symbol("_showSidebar");
const _onIndexReady = Symbol("_onIndexReady");
const _totalImgLoaded = Symbol("_totalImgLoaded");
const _isRetina = Symbol("_isRetina");
const _isMobile = Symbol("_isMobile");
const _posts = Symbol("_posts");

/**
 * The Portfolio class.
 * @class Portfolio
 */
class Portfolio {

  constructor() {
    const STYLE = Portfolio.getComputedStyle(document.querySelector("html"));

    this[_isRetina] = window.devicePixelRatio > 1;
    this[_isMobile] = (parseInt(STYLE.getPropertyValue("width"), 10)) < 768;
  }

  /**
   * Starts the load of all images in the portfolio.
   * @returns {void}
   */
  loadIndex() {
    this[_posts] = window.posts;
    this[_totalImgLoaded] = 0;
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
          this[_onIndexReady]();
        }, waitBeforeReady);
      }
    };

    this[_posts].forEach((post, idx) => {
      let filename,
        src;

      if (this[_isMobile] && !this[_isRetina]) {
        filename = `${post.image}-md.jpg`;
      }
      else {
        filename = `${post.image}.jpg`;
      }

      src = `./img/home/${filename}`;

      if (idx < 4) {
        const image = new Image();

        image.onload = () => onLoad(post, image.src);
        image.src = src;
      }
      else {
        onLoad(post, src);
      }
    });
  }

  /**
   * Animates the previous and the next project in the page.
   * @returns {void}
   */
  [_showPrevAndNextProjects]() {
    anime({
      targets: ".page .prev-next-project .prev",
      begin: (animation) => animation.animatables[0].target.classList.remove("hide"),
      opacity: [0, 1],
      translateX: [100, 0],
      duration: 2000,
      delay: 150,
      easing: "easeInOutExpo"
    });
    anime({
      targets: ".page .prev-next-project .next",
      begin: (animation) => animation.animatables[0].target.classList.remove("hide"),
      opacity: [0, 1],
      translateX: [-100, 0],
      duration: 2000,
      delay: 150,
      easing: "easeInOutExpo"
    });
  }

  /**
   * Animates the title of the page.
   * @returns {void}
   */
  [_showTitle]() {
    anime({
      targets: ".page .title",
      begin: (animation) => animation.animatables[0].target.classList.remove("hide"),
      opacity: [0, 1],
      duration: 1500,
      easing: "easeInOutExpo"
    });
  }

  /**
   * Animates the sidebar.
   * @returns {void}
   */
  [_showSidebar]() {
    anime({
      targets: ".sidebar",
      begin: (animation) => animation.animatables[0].target.classList.remove("hide"),
      translateX: {
        value: [-400, 0]
      },
      duration: 1500,
      easing: "easeInOutExpo"
    });
  }

  /**
   * When all images in the home page are loaded an animation is played.
   * @returns {void}
   */
  [_onIndexReady]() {
    this[_showSidebar]();

    anime({
      targets: ".pre.hide",
      begin: (animation) => animation.animatables[0].target.classList.remove("hide"),
      opacity: [0, 1],
      duration: 1500
    });

    document.querySelectorAll("ul.posts li").forEach((e) => {
      e.classList.remove("hide");
      e.querySelector(".w-link").style.backgroundColor = "black";
    });

    anime({
      targets: ".posts li:nth-child(-n+4)",
      translateY: [400, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeInOutExpo",
      delay: (el, index) => 250 * index
    });
  }

  /**
   * Gets the computed style of an element.
   * @param {HTMLElement} elem - The element you want to compute.
   * @returns {Object} The computed style.
   */
  static getComputedStyle(elem) {
    if (elem.ownerDocument.defaultView.opener) {
      return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
    }
    return window.getComputedStyle(elem, null);
  }

  /**
   * Executed when the about page is displayed.
   * @returns {void}
   */
  loadAbout() {
    this[_showSidebar]();
    this[_showTitle]();

    document.querySelectorAll(".content > p.text").forEach((e) => e.classList.remove("hide"));
    anime({
      targets: ".content > p.text",
      translateY: [100, 0],
      translateX: () => [anime.random(0, 500), 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeInOutExpo",
      delay: (el, index) => 50 * index * Math.random()
    });

    anime({
      targets: ".content p img",
      begin: (animation) => animation.animatables[0].target.classList.remove("hide"),
      translateY: [100, 0],
      translateX: () => [anime.random(0, 500), 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeInOutExpo"
    });

    anime({
      targets: ".content blockquote",
      begin: (animation) => animation.animatables[0].target.classList.remove("hide"),
      opacity: [0, 1],
      duration: 1500,
      delay: 6000,
      easing: "easeInOutExpo"
    });
  }

  /**
   * Executed when the site-map page is displayed.
   * @returns {void}
   */
  loadSiteMap() {
    this[_showSidebar]();
    this[_showTitle]();

    document.querySelectorAll(".site-map li").forEach((e) => e.classList.remove("hide"));
    anime({
      targets: ".site-map li",
      translateY: [100, 0],
      translateX: () => [anime.random(0, 500), 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeInOutExpo",
      delay: (el, idx) => idx * 25
    });

    anime({
      targets: ".content blockquote",
      begin: (animation) => animation.animatables[0].target.classList.remove("hide"),
      opacity: [0, 1],
      duration: 1500,
      delay: 6000,
      easing: "easeInOutExpo"
    });
  }

  /**
   * Executed when the 404 page is displayed.
   * @returns {void}
   */
  load404() {
    this[_showSidebar]();
    this[_showTitle]();

    anime({
      targets: ".content p",
      translateY: [100, 0],
      translateX: [anime.random(0, 500), 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeInOutExpo"
    });
  }

  /**
   * Executed when the 404 page is displayed.
   * @returns {void}
   */
  loadProject() {
    this[_showSidebar]();
    this[_showPrevAndNextProjects]();
    this[_showTitle]();

    document.querySelector(".content").classList.remove("hide");
    anime({
      targets: [
        ".project-page .image",
        ".project-page .info tr",
        ".project-page .project-content p",
        ".project-page .share-title",
        ".project-page .share-post",
        ".project-page hr",
        ".project-page .related-title",
        ".project-page .related-post"
      ],
      translateY: [100, 0],
      translateX: () => [anime.random(0, 500), 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeInOutExpo"
    });
  }
}

export default Portfolio;
