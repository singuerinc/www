/* global window, setTimeout, Image, document, Turbolinks */
/* eslint-disable class-methods-use-this */
import Turbolinks = require('turbolinks');
import NProgress = require('nprogress');
import { AnimeInstance } from 'animejs';
import * as animejs from './anime';

export interface IPost {
  id: string;
  image: string;
}

/**
 * Animates the title of the page.
 * @private
 * @returns {void}
 */
const showPageTitle = (title, rm): AnimeInstance =>
  animejs.anime({
    begin: () => rm(title),
    duration: 1500,
    easing: 'easeInOutExpo',
    opacity: [0, 1],
    targets: title
  });

/**
 * Gets the computed style of an element.
 * @public
 * @param {Element} elem - The element you want to compute.
 * @returns {CSSStyleDeclaration} The computed style.
 */
const getComputedStyle = (elem: Element): CSSStyleDeclaration => {
  const dv = elem.ownerDocument.defaultView;
  const p = dv.opener ? dv : window;
  return p.getComputedStyle(elem);
};

const filenameByPlatform = (name, mobile) => {
  return `./img/home/${name}${mobile ? '-md' : ''}.jpg`;
};

const qSelect = (where: Document | Element) => (what: string) =>
  where.querySelector(what) as HTMLElement;
const qSelectDoc = what => qSelect(document)(what);
const qSelectAll = (where, what): NodeListOf<Element> => where.querySelectorAll(what);
const removeClass = target => which => target.classList.remove(which);
const removeHideClass = target => target.classList.remove('hide');

const setStyle = el => (what, value) => (el.style[what] = value);
const setBGColor = (el, color) => setStyle(el)('backgroundColor', color);
const setBGImage = (el, path) => setStyle(el)('backgroundImage', `url(${path})`);

const html = qSelectDoc('html');
const cssPropVal = (el, prop) => el.getPropertyValue(prop);
const isMobile = +cssPropVal(getComputedStyle(html), 'width') < 768;

/**
 * The Portfolio is the entry point for every request the website does.
 * When the page is loaded, the application resolve which page should be
 * loaded and ask the portfolio to load the correct content.
 * @class Portfolio
 */
export default class Portfolio {
  public totalImagesLoaded: number;

  /**
   * Adds a listener to each element.
   * When the user clicks in one of those elements,
   * then the pages fadeout and navigate to the next page.
   * @private
   * @param {string} elements - The selector string.
   * @returns {void}
   */
  public whenClickExit(elements: string): void {
    const elms = qSelectAll(document, elements);

    const onComplete = target => {
      Turbolinks.visit(target.getAttribute('href') as string, {
        action: 'advance'
      });
    };

    const onClick = (target: HTMLElement, callback) =>
      animejs.anime({
        complete: callback.bind(null, target),
        duration: 700,
        easing: 'easeInOutExpo',
        opacity: [1, 0],
        targets: '.content'
      });

    Array.from(elms).forEach((element: HTMLElement) => {
      element.addEventListener('click', (event: MouseEvent) => {
        event.preventDefault();
        onClick(event.target as HTMLElement, onComplete);
      });
    });
  }

  /**
   * onLoad acts every time an image is loaded.
   * It display the image and check if all the images
   * are loaded, in that case calls _onIndexReady that
   * execute an animation.
   * @private
   * @param {string} postId - The post identifier.
   * @param {number} totalImages - The amount of images to load.
   * @param {string} src - The path to the image.
   * @returns {void}
   */
  public onLoad(postId: string, totalImages: number, src: string): void {
    setBGImage(qSelectDoc(`.post-image.${postId}`), src);

    this.totalImagesLoaded += 1;
    NProgress.set(this.totalImagesLoaded / totalImages);
    if (this.totalImagesLoaded === totalImages) {
      const waitBeforeReady: number = 200;

      setTimeout(() => {
        NProgress.done(true);
        this.onIndexReady();
      }, waitBeforeReady);
    }
  }

  /**
   * Starts the load of all images in the portfolio.
   * @param {Array<IPost>} posts - The list of posts to show in the index.
   * @returns {void}
   */
  public loadIndex(posts: IPost[]): void {
    this.whenClickExit(
      'h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a, ul.posts li > .w-link'
    );
    this.totalImagesLoaded = 0;
    posts.forEach((post: IPost, index: number) => {
      const src: string = filenameByPlatform(post.image, isMobile);

      if (index < 2) {
        const image: HTMLImageElement = new (window as any).Image();

        image.onload = () => this.onLoad(post.id, posts.length, image.src);
        image.src = src;
      } else {
        this.onLoad(post.id, posts.length, src);
      }
    });
  }

  /**
   * Executed when the about page is displayed.
   * @returns {void}
   */
  public loadAbout(): void {
    this.whenClickExit('h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a');

    NProgress.inc();
    const image: HTMLImageElement = new (window as any).Image();

    image.onload = () => {
      NProgress.done(true);
      showPageTitle(qSelectDoc('.page .title'), removeHideClass);

      animejs.anime({
        delay: (element: Element, index: number) => 50 * index * Math.random(),
        duration: 1500,
        easing: 'easeInOutExpo',
        opacity: [0, 1],
        targets: '.content > p.text, .content p img',
        translateX: () => [animejs.anime.random(0, 500), 0],
        translateY: [100, 0]
      });

      animejs.anime({
        begin: ({ animatables }) => removeHideClass(animatables[0].target),
        delay: 6000,
        duration: 2000,
        easing: 'easeOutExpo',
        opacity: [0, 1],
        targets: '.content blockquote',
        translateX: () => [50, 0]
      });

      setTimeout(() => {
        const list = qSelectAll(document, '.content p img, .content > p.text');

        list.forEach(removeHideClass);
      }, 100);
    };

    const selector = qSelectDoc('.page .content img');

    image.src = `${selector.getAttribute('src')}`;
  }

  /**
   * Executed when the site-map page is displayed.
   * @returns {void}
   */
  public loadSiteMap(): void {
    this.whenClickExit('h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a, .site-map a');
    showPageTitle(qSelectDoc('.page .title'), removeHideClass);

    setTimeout(() => {
      const list = qSelectAll(document, '.site-map li');

      list.forEach(removeHideClass);
    }, 1);

    animejs.anime({
      delay: (element: Element, index: number) => index * 25,
      duration: 1500,
      easing: 'easeInOutExpo',
      opacity: [0, 1],
      targets: '.site-map li',
      translateX: () => [animejs.anime.random(0, 500), 0],
      translateY: [100, 0]
    });

    animejs.anime({
      begin: ({ animatables }) => removeHideClass(animatables[0].target),
      delay: 6000,
      duration: 1500,
      easing: 'easeInOutExpo',
      opacity: [0, 1],
      targets: '.content blockquote'
    });
  }

  /**
   * Executed when the 404 page is displayed.
   * @returns {void}
   */
  public load404(): void {
    this.whenClickExit('h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a, .site-map a');
    showPageTitle(qSelectDoc('.page .title'), removeHideClass);

    animejs.anime({
      duration: 1500,
      easing: 'easeInOutExpo',
      opacity: [0, 1],
      targets: '.content p',
      translateX: [animejs.anime.random(0, 500), 0],
      translateY: [100, 0]
    });
  }

  /**
   * Executed when the 404 page is displayed.
   * @returns {void}
   */
  public loadProject(): void {
    const elements: string =
      'h1 a, .sidebar nav > ul > li > a, ' +
      '.sidebar-mobile ul li a, ' +
      '.prev-next-project li a, ' +
      '.project-page .related-post a';

    this.whenClickExit(elements);

    NProgress.inc();
    const image: HTMLImageElement = new (window as any).Image();

    image.onload = () => {
      NProgress.done(true);
      showPageTitle(qSelectDoc('.page .title'), removeHideClass);

      const targets: string[] = [
        '.project-page .project-title',
        '.project-page .image',
        '.project-page .info tr',
        '.project-page .project-content p',
        '.project-page .project-content .video-wrapper',
        '.project-page .project-content ul',
        '.project-page .share-title',
        '.project-page .share-post',
        '.project-page hr',
        '.project-page .related-title',
        '.project-page .related-post'
      ];

      animejs.anime({
        begin: () => {
          removeHideClass(qSelectDoc('.content'));
        },
        easing: 'easeOutExpo',
        opacity: [0, 1],
        targets: '.content'
      });

      animejs.anime({
        duration: 1500,
        easing: 'easeOutExpo',
        opacity: [0, 1],
        targets: '.project-page .prev-next-project'
      });

      animejs.anime({
        duration: 1500,
        easing: 'easeOutExpo',
        opacity: [0, 1],
        targets,
        translateX: () => [animejs.anime.random(100, 500), 0],
        translateY: [100, 0]
      });
    };

    const selector = qSelectDoc('.project-page .image');

    image.src = `${selector.getAttribute('src')}`;
  }

  /**
   * When all images in the home page are loaded an animation is played.
   * @returns {void}
   */
  public onIndexReady(): void {
    const pre = qSelectDoc('.pre.hide');

    animejs.anime({
      begin: () => removeHideClass(pre),
      duration: 1500,
      opacity: [0, 1],
      targets: pre
    });

    qSelectAll(document, 'ul.posts li').forEach((element: HTMLElement, index: number) => {
      removeHideClass(element);
      if (index < 4) {
        element.style.opacity = '0';
      }

      setBGColor(qSelect(element)('.w-link'), 'black');
    });

    const postLi = qSelectAll(document, '.posts li:nth-child(-n+4)');
    animejs.anime({
      delay: (element: Element, index: number) => 250 * index,
      duration: 1500,
      easing: 'easeInOutQuad',
      opacity: [0, 1],
      targets: postLi,
      translateY: [400, 0]
    });
  }
}
