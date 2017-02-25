/* global window, setTimeout, Image, document, devicePixelRatio, Turbolinks */
import {anime} from "./anime";
import NProgress from "nprogress";

/**
 * The Portfolio is the entry point for every request the website does.
 * When the page is loaded, the application resolve wich page should be
 * loaded and ask the portfolio to load the correct content.
 * @class Portfolio
 */
class Portfolio {

  constructor() {
    const STYLE = this._getComputedStyle(document.querySelector("html"));

    this._isRetina = window.devicePixelRatio > 1;
    this._isMobile = (parseInt(STYLE.getPropertyValue("width"), 10)) < 768;
  }

  /**
   * @private
   * Adds a listener to each element.
   * When the user clicks in one of those elements,
   * then the pages fadeout and navigate to the next page.
   * @param {string} elements - The selector string.
   * @returns {void}
   */
  _whenClickExit(elements) {
    document.querySelectorAll(elements).forEach((element) => {
      element.addEventListener("click", (event) => {
        event.preventDefault();

        anime({
          targets: ".content",
          opacity: [1, 0],
          duration: 700,
          easing: "easeInOutExpo",
          complete: () => {
            Turbolinks.visit(event.target.getAttribute("href"), { action: "advance" });
          }
        });
      });
    });
  }

  /**
   * @private
   * _onLoad acts everytime an image is loaded.
   * It display the image and check if all the images
   * are loaded, in that case calls _onIndexReady that
   * execute an animation.
   * @param {string} portId - The post identifier.
   * @param {number} totalImages - The amount of images to load.
   * @param {string} src - The path to the image.
   */
  _onLoad(postId, totalImages, src) {
    const tag = document.querySelector(`.post-image.${postId}`);

    tag.style.backgroundImage = `url(${src})`;

    this._totalImagesLoaded++;
    NProgress.set(this._totalImagesLoaded / totalImages);
    if (this._totalImagesLoaded === totalImages) {
      const waitBeforeReady = 200;

      setTimeout(() => {
        NProgress.done(true);
        this._onIndexReady();
      }, waitBeforeReady);
    }
  }

  /**
   * Starts the load of all images in the portfolio.
   * @param {array} posts
   * @returns {void}
   */
  loadIndex(posts) {
    this._whenClickExit("h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a, ul.posts li > .w-link");
    this._totalImagesLoaded = 0;
    posts.forEach((post, index) => {
      let filename;
      let src;

      if (this._isMobile && !this._isRetina) {
        filename = `${post.image}-md.jpg`;
      }
      else {
        filename = `${post.image}.jpg`;
      }

      src = `./img/home/${filename}`;

      if (index < 4) {
        const image = new Image();

        image.onload = () => this._onLoad(post.id, posts.length, image.src);
        image.src = src;
      }
      else {
        this._onLoad(post.id, posts.length, src);
      }
    });
  }

  /**
   * @private
   * Animates the previous and the next project in the page.
   * @returns {void}
   */
  _showPrevAndNextProjects() {
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
   * @private
   * Animates the title of the page.
   * @returns {void}
   */
  _showTitle() {
    anime({
      targets: ".page .title",
      begin: (animation) => animation.animatables[0].target.classList.remove("hide"),
      opacity: [0, 1],
      duration: 1500,
      easing: "easeInOutExpo"
    });
  }

  /**
   * @private
   * When all images in the home page are loaded an animation is played.
   * @returns {void}
   */
  _onIndexReady() {
    anime({
      targets: ".pre.hide",
      begin: (animation) => animation.animatables[0].target.classList.remove("hide"),
      opacity: [0, 1],
      duration: 1500
    });

    document.querySelectorAll("ul.posts li").forEach((element) => {
      element.classList.remove("hide");
      element.querySelector(".w-link").style.backgroundColor = "black";
    });

    anime({
      targets: ".posts li:nth-child(-n+4)",
      translateY: [400, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeInOutExpo",
      delay: (element, index) => 250 * index
    });
  }

  /**
   * @private
   * Gets the computed style of an element.
   * @param {HTMLElement} elem - The element you want to compute.
   * @returns {Object} The computed style.
   */
  _getComputedStyle(elem) {
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
    this._whenClickExit("h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a");

    NProgress.inc();
    const image = new Image();

    image.onload = () => {
      NProgress.done(true);
      this._showTitle();

      anime({
        targets: ".content > p.text, .content p img",
        translateY: [100, 0],
        translateX: () => [anime.random(0, 500), 0],
        opacity: [0, 1],
        duration: 1500,
        easing: "easeInOutExpo",
        delay: (element, index) => 50 * index * Math.random()
      });

      anime({
        targets: ".content blockquote",
        begin: (animation) => animation.animatables[0].target.classList.remove("hide"),
        opacity: [0, 1],
        duration: 1500,
        delay: 6000,
        easing: "easeInOutExpo"
      });

      setTimeout(() => document.querySelectorAll(".content p img, .content > p.text").forEach((e) => e.classList.remove("hide")), 0);
    };

    image.src = `${document.querySelector(".page .content img").getAttribute("src")}`;
  }

  /**
   * Executed when the site-map page is displayed.
   * @returns {void}
   */
  loadSiteMap() {
    this._whenClickExit("h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a, .site-map a");
    this._showTitle();

    setTimeout(() => document.querySelectorAll(".site-map li").forEach((e) => e.classList.remove("hide")), 1);

    anime({
      targets: ".site-map li",
      translateY: [100, 0],
      translateX: () => [anime.random(0, 500), 0],
      opacity: [0, 1],
      duration: 1500,
      easing: "easeInOutExpo",
      delay: (element, idx) => idx * 25
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
    this._whenClickExit("h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a, .site-map a");
    this._showTitle();

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
    this._whenClickExit("h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a, .prev-next-project li a, .project-page .related-post a");

    NProgress.inc();
    const image = new Image();

    image.onload = () => {
      NProgress.done(true);
      this._showTitle();

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

        setTimeout(() => {
            const content = document.querySelector(".content");
            content.classList.remove("hide");
        }, 1);

      anime({
        targets: ".content",
        opacity: [0, 1],
        easing: "easeInOutExpo"
      });

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
    };

    image.src = `${document.querySelector(".project-page .image").getAttribute("src")}`;
  }
}

export default Portfolio;
