/* global window, setTimeout, Image, document, devicePixelRatio, Turbolinks */
import anime from "animejs";
import NProgress from "nprogress";

const _showPrevAndNextProjects = Symbol("_showPrevAndNextProjects");
const _whenClickExit = Symbol("_whenClickExit");
const _showTitle = Symbol("_showTitle");
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

    this[_isRetina] = devicePixelRatio > 1;
    this[_isMobile] = (parseInt(STYLE.getPropertyValue("width"), 10)) < 768;
  }

  /**
   * Adds a listener to each element.
   * When the user clicks in one of those elements,
   * then the pages fadeout and navigate to the next page.
   * @param {string} els - A selector string
   * @returns {void}
   */
  [_whenClickExit](els) {
    document.querySelectorAll(els).forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        anime({
          targets: ".content",
          opacity: [1, 0],
          duration: () => 500,
          easing: "easeInOutExpo",
          complete: () => {
            Turbolinks.visit(e.target.getAttribute("href"), { action: "replace" });
          }
        });
      });
    });
  }

  /**
   * Starts the load of all images in the portfolio.
   * @returns {void}
   */
  loadIndex() {
    this[_whenClickExit](".sidebar ul li a, .sidebar-mobile ul li a, ul.posts li > .w-link");
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
      targets: ".page .prev-next-project",
      begin: (animation) => animation.animatables[0].target.classList.remove("hide"),
      opacity: [0, 1],
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
   * When all images in the home page are loaded an animation is played.
   * @returns {void}
   */
  [_onIndexReady]() {
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
    this[_whenClickExit](".sidebar ul li a, .sidebar-mobile ul li a");
    this[_showTitle]();

    setTimeout(() => document.querySelectorAll(".content > p.text").forEach((e) => e.classList.remove("hide")), 1);

    anime({
      targets: ".content > p.text, .content p img",
      translateY: [100, 0],
      translateX: () => [anime.random(0, 500), 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeInOutExpo",
      delay: (el, index) => 50 * index * Math.random()
    });

    anime({
      targets: ".content blockquote",
      begin: (animation) => animation.animatables[0].target.classList.remove("hide"),
      opacity: [0, 1],
      duration: 1500,
      delay: 6000,
      easing: "easeInOutExpo"
    });

    setTimeout(() => document.querySelector(".content p img").classList.remove("hide"), 0);
  }

  /**
   * Executed when the site-map page is displayed.
   * @returns {void}
   */
  loadSiteMap() {
    this[_whenClickExit](".sidebar ul li a, .sidebar-mobile ul li a, .site-map a");
    this[_showTitle]();

    setTimeout(() => document.querySelectorAll(".site-map li").forEach((e) => e.classList.remove("hide")), 0);

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
    this[_whenClickExit](".sidebar ul li a, .sidebar-mobile ul li a, .site-map a");
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
    this[_whenClickExit](".sidebar ul li a, .sidebar-mobile ul li a, .prev-next-project li a, .project-page .related-post a");
    this[_showTitle]();

    let targets = [
      ".project-page .project-title",
      ".project-page .image",
      ".project-page .info tr",
      ".project-page .project-content p",
      ".project-page .project-content .video-wrapper",
      ".project-page .project-content ul",
      ".project-page .share-title",
      ".project-page .share-post",
      ".project-page hr",
      ".project-page .related-title",
      ".project-page .related-post"
    ];

    setTimeout(() => document.querySelector(".content").classList.remove("hide"), 1);

    anime({
      targets: ".project-page .prev-next-project",
      opacity: [0, 1],
      duration: () => 1500,
      easing: "easeInOutExpo"
    });

    anime({
      targets: targets,
      translateY: [100, 0],
      translateX: () => [anime.random(100, 500), 0],
      opacity: [0, 1],
      duration: () => 1500,
      easing: "easeInOutExpo"
    });
  }
}

export default Portfolio;
