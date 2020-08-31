/*global location */
/*eslint no-restricted-globals: ["error"]*/
import NProgress from "nprogress";
import animejs from "animejs";

export interface IPost {
  id: string;
  image: string;
}

/**
 * The Portfolio is the entry point for every request the website does.
 * When the page is loaded, the application resolve which page should be
 * loaded and ask the portfolio to load the correct content.
 * @class Portfolio
 */
export default class Portfolio {
  /**
   * Gets the computed style of an element.
   * @private
   * @param {Element} elem - The element you want to compute.
   * @returns {CSSStyleDeclaration} The computed style.
   */
  public static getComputedStyle(elem: Element): CSSStyleDeclaration {
    //@ts-ignore
    if (elem.ownerDocument.defaultView.opener) {
      //@ts-ignore
      return elem.ownerDocument.defaultView.getComputedStyle(elem);
    }

    return window.getComputedStyle(elem);
  }

  /**
   * Animates the title of the page.
   * @private
   * @returns {void}
   */
  public static showTitle(): void {
    animejs.anime({
      begin: (animation: any) =>
        animation.animatables[0].target.classList.remove("hide"),
      duration: 1500,
      easing: "easeInOutExpo",
      opacity: [0, 1],
      targets: ".page .title"
    });
  }

  /**
   * Returns the device pixel ratio
   * @returns {number}
   */
  public static getPixelRatio(): number {
    return window.devicePixelRatio;
  }

  public totalImagesLoaded: number = 0;
  public isRetina: boolean;
  public isMobile: boolean;

  constructor() {
    const STYLE: CSSStyleDeclaration = Portfolio.getComputedStyle(
      document.querySelector("html") as HTMLElement
    );

    this.isRetina = Portfolio.getPixelRatio() > 1;
    this.isMobile = parseInt(STYLE.getPropertyValue("width"), 10) < 768;
  }

  /**
   * Adds a listener to each element.
   * When the user clicks in one of those elements,
   * then the pages fadeout and navigate to the next page.
   * @private
   * @param {string} elements - The selector string.
   * @returns {void}
   */
  public whenClickExit(elements: string): void {
    const elms: NodeListOf<Element> = document.querySelectorAll(elements);

    Array.from(elms).forEach((element: Element) => {
      (element as HTMLElement).addEventListener(
        "click",
        (event: MouseEvent) => {
          event.preventDefault();

          animejs.anime({
            complete: () => {
              const target: HTMLElement = event.target as HTMLElement;

              location.href = target.getAttribute("href") as string;
              // Turbolinks.visit(target.getAttribute("href") as string, {action: "advance"});
            },
            duration: 700,
            easing: "easeInOutExpo",
            opacity: [1, 0],
            targets: ".content"
          });
        }
      );
    });
  }

  /**
   * _onLoad acts every time an image is loaded.
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
    const tag: HTMLElement = document.querySelector(
      `.post-image.${postId}`
    ) as HTMLElement;

    tag.style.backgroundImage = `url(${src})`;

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
      "h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a, ul.posts li > .w-link"
    );
    this.totalImagesLoaded = 0;
    posts.forEach((post: IPost, index: number) => {
      let filename: string;

      if (this.isMobile) {
        filename = `${post.image}-md.jpg`;
      } else {
        filename = `${post.image}.jpg`;
      }

      const src: string = `./img/home/${filename}`;

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
    this.whenClickExit(
      "h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a"
    );

    NProgress.inc();
    const image: HTMLImageElement = new (window as any).Image();

    image.onload = () => {
      NProgress.done(true);
      Portfolio.showTitle();

      animejs.anime({
        delay: (element: Element, index: number) => 50 * index * Math.random(),
        duration: 1500,
        easing: "easeInOutExpo",
        opacity: [0, 1],
        targets: ".content > p.text, .content p img",
        translateX: () => [animejs.anime.random(0, 500), 0],
        translateY: [100, 0]
      });

      animejs.anime({
        begin: (animation: any) =>
          animation.animatables[0].target.classList.remove("hide"),
        delay: 6000,
        duration: 2000,
        easing: "easeOutExpo",
        opacity: [0, 1],
        targets: ".content blockquote",
        translateX: () => [50, 0]
      });

      setTimeout(() => {
        const selectors: string = ".content p img, .content > p.text";
        const list: NodeListOf<Element> = document.querySelectorAll(selectors);

        list.forEach(e => {
          e.classList.remove("hide");
        });
      }, 100);
    };

    const selector: HTMLElement = document.querySelector(
      ".page .content img"
    ) as HTMLElement;

    image.src = `${selector.getAttribute("src")}`;
  }

  /**
   * Executed when the site-map page is displayed.
   * @returns {void}
   */
  public loadSiteMap(): void {
    this.whenClickExit(
      "h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a, .site-map a"
    );
    Portfolio.showTitle();

    setTimeout(() => {
      const list: NodeListOf<Element> = document.querySelectorAll(
        ".site-map li"
      );

      list.forEach(e => e.classList.remove("hide"));
    }, 1);

    animejs.anime({
      delay: (element: Element, index: number) => index * 25,
      duration: 1500,
      easing: "easeInOutExpo",
      opacity: [0, 1],
      targets: ".site-map li",
      translateX: () => [animejs.anime.random(0, 500), 0],
      translateY: [100, 0]
    });

    animejs.anime({
      begin: (animation: any) =>
        animation.animatables[0].target.classList.remove("hide"),
      delay: 6000,
      duration: 1500,
      easing: "easeInOutExpo",
      opacity: [0, 1],
      targets: ".content blockquote"
    });
  }

  /**
   * Executed when the 404 page is displayed.
   * @returns {void}
   */
  public load404(): void {
    this.whenClickExit(
      "h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a, .site-map a"
    );
    Portfolio.showTitle();

    animejs.anime({
      duration: 1500,
      easing: "easeInOutExpo",
      opacity: [0, 1],
      targets: ".content p",
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
      "h1 a, .sidebar nav > ul > li > a, " +
      ".sidebar-mobile ul li a, " +
      ".prev-next-project li a, " +
      ".project-page .related-post a";

    this.whenClickExit(elements);

    NProgress.inc();
    const image: HTMLImageElement = new (window as any).Image();

    image.onload = () => {
      NProgress.done(true);
      Portfolio.showTitle();

      const targets: string[] = [
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

      animejs.anime({
        begin: () => {
          const content: HTMLElement = document.querySelector(
            ".content"
          ) as HTMLElement;

          content.classList.remove("hide");
        },
        easing: "easeOutExpo",
        opacity: [0, 1],
        targets: ".content"
      });

      animejs.anime({
        duration: 1500,
        easing: "easeOutExpo",
        opacity: [0, 1],
        targets: ".project-page .prev-next-project"
      });

      animejs.anime({
        duration: 1500,
        easing: "easeOutExpo",
        opacity: [0, 1],
        targets,
        translateX: () => [animejs.anime.random(100, 500), 0],
        translateY: [100, 0]
      });
    };

    const selector: HTMLElement = document.querySelector(
      ".project-page .image"
    ) as HTMLElement;

    image.src = `${selector.getAttribute("src")}`;
  }

  /**
   * When all images in the home page are loaded an animation is played.
   * @returns {void}
   */
  public onIndexReady(): void {
    animejs.anime({
      begin: (animation: any) =>
        animation.animatables[0].target.classList.remove("hide"),
      duration: 1500,
      opacity: [0, 1],
      targets: ".pre.hide"
    });

    document
      .querySelectorAll("ul.posts li")
      .forEach((element: Element, index: number) => {
        element.classList.remove("hide");
        if (index < 4) {
          (element as HTMLElement).style.opacity = "0";
        }

        const link: HTMLElement = element.querySelector(
          ".w-link"
        ) as HTMLElement;

        link.style.backgroundColor = "black";
      });

    animejs.anime({
      begin: (animation: any) => {
        animation.animatables[0].target.classList.remove("hide");
      },
      delay: (element: Element, index: number) => 250 * index,
      duration: 1500,
      easing: "easeInOutQuad",
      opacity: [0, 1],
      targets: ".posts li:nth-child(-n+4)",
      translateY: [400, 0]
    });
  }
}
