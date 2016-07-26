import anime from 'animejs';

class WebApp {

  constructor() {
    const style = WebApp.getComputedStyle(document.querySelector('html'));
    const retina = window.devicePixelRatio > 1;
    const mobile = (parseInt(style.getPropertyValue('width'), 10)) < 768;
    this.posts = window.posts;

    const numTotal = window.posts.length;
    let numLoaded = 0;

    const onLoad = () => {
      numLoaded++;
      if (numLoaded === numTotal) {
        setTimeout(this.ready, 200);
      }
    };

    for (let i = 0; i < numTotal; i++) {
      const img = new Image();
      let filename;

      img.onload = onLoad;

      if (mobile && !retina) {
        filename = `${this.posts[i].image}-md_small.jpg`;
      } else {
        filename = `${this.posts[i].image}_small.jpg`;
      }

      img.src = `./img/home/${filename}`;
    }
  }

  ready() {
    anime({
      targets: '.pre.hide',
      begin: (animation) => animation.animatables[0].target.classList.remove('hide'),
      opacity: [0, 1],
      duration: 1500,
    });

    anime({
      targets: '.sidebar',
      begin: (animation) => animation.animatables[0].target.classList.remove('hide'),
      translateX: {
        value: [-400, 0],
      },
      duration: 1500,
      easing: 'easeInOutExpo',
    });

    for (let i = 0; i < this.posts.length; i++) {
      const pId = this.posts[i].id;
      const li = document.querySelector(`li#image--${pId}`);
      li.classList.remove('hide');
    }

    anime({
      targets: '.posts li:nth-child(-n+4)',
      translateY: [400, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: 'easeInOutExpo',
      delay: (el, index) => 250 * index,
    });
  }

  static getComputedStyle(elem) {
    if (elem.ownerDocument.defaultView.opener) {
      return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
    }
    return window.getComputedStyle(elem, null);
  }

}

export default WebApp;
