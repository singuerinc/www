/* global window, document, global, HTMLHtmlElement, Turbolinks */
import test from "ava";
import sinon from "sinon";
import "chai";
import Portfolio from "../../Portfolio";
import * as animejs from "../../anime";
import NProgress from "nprogress";

let sandbox;

test.beforeEach(() => {
  sandbox = sinon.sandbox.create();
  window.devicePixelRatio = 1;
  global.requestAnimationFrame = () => { };
});

test.afterEach.always(() => {
  sandbox.restore();
});

test("it should return a Portfolio instance", (t) => {
  const portfolio = new Portfolio();

  t.is(Portfolio, portfolio.constructor);
});

test("it should call Portfolio#getComputedStyle in the constructor", (t) => {
  const getComputedStyleSpy = sandbox.spy(Portfolio.prototype, "_getComputedStyle");

  const portfolio = new Portfolio();

  t.true(getComputedStyleSpy.calledOnce);
  t.is(getComputedStyleSpy.getCall(0).args[0].constructor, HTMLHtmlElement);
});

test("Portfolio#_isRetina should be false if devicePixelRatio is equal or less than 1", (t) => {
  sandbox.stub(window, "devicePixelRatio", 1);
  const portfolio = new Portfolio();

  t.false(portfolio._isRetina);
});

test("Portfolio#_isRetina should be true if devicePixelRatio is greater than 1", (t) => {
  sandbox.stub(window, "devicePixelRatio", 2);
  const portfolio = new Portfolio();

  t.true(portfolio._isRetina);
});

test("Portfolio#_isMobile should be true if the page with is less than 768", (t) => {
  class HTMLHtmlElementMock {
    getPropertyValue() {
      return "767";
    }
  }
  sandbox.stub(Portfolio.prototype, "_getComputedStyle").returns(new HTMLHtmlElementMock());
  const portfolio = new Portfolio();

  t.true(portfolio._isMobile);
});

test("Portfolio#_isMobile should be false if the page with equal or greater than 768", (t) => {
  class HTMLHtmlElementMock {
    getPropertyValue() {
      return "768";
    }
  }
  sandbox.stub(Portfolio.prototype, "_getComputedStyle").returns(new HTMLHtmlElementMock());
  const portfolio = new Portfolio();

  t.false(portfolio._isMobile);
});

test("Portfolio#loadIndex should call whenClickExit", (t) => {
  const portfolio = new Portfolio();
  const whenClickExitStub = sandbox.stub(portfolio, "_whenClickExit");

  portfolio.loadIndex([]);
  t.true(whenClickExitStub.calledOnce);
  t.true(whenClickExitStub.calledWithExactly("h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a, ul.posts li > .w-link"));
});

test("Portfolio#_whenClickExit should iterate on each element", (t) => {
  const portfolio = new Portfolio();
  const elements = [
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div")
  ];

  sandbox.stub(document, "querySelectorAll", () => elements);
  const forEachSpy = sandbox.spy(elements, "forEach");

  portfolio._whenClickExit(elements);
  t.is(forEachSpy.callCount, 1);
});

test("Portfolio#_whenClickExit should add a listener to each element", (t) => {
  const portfolio = new Portfolio();
  const element = document.createElement("div");
  const elements = [element];

  sandbox.stub(document, "querySelectorAll", () => elements);
  const addEventListenerSpy = sandbox.spy(element, "addEventListener");

  portfolio._whenClickExit(elements);
  t.is(addEventListenerSpy.callCount, 1);
  const callback = addEventListenerSpy.getCall(0).args[1];

  t.true(addEventListenerSpy.getCall(0).calledWithExactly("click", callback));
});

test("Portfolio#_whenClickExit, on click should prevent default and call anime", (t) => {
  global.Turbolinks = {
    visit: sinon.spy()
  };
  const animeStub = sandbox.stub(animejs, "anime");
  const portfolio = new Portfolio();
  const element = document.createElement("div");
  const elements = [element];

  sandbox.stub(document, "querySelectorAll", () => elements);
  const addEventListenerSpy = sandbox.spy(element, "addEventListener");

  portfolio._whenClickExit(elements);
  const callback = addEventListenerSpy.getCall(0).args[1];
  const callbackSpy = sandbox.spy(callback);
  const A = document.createElement("a");
  const event = {
    target: A,
    preventDefault: sinon.spy()
  };

  callbackSpy(event);
  t.is(callbackSpy.callCount, 1);
  t.is(event.preventDefault.callCount, 1);
  t.is(event.preventDefault.callCount, 1);
  t.is(animeStub.callCount, 1);
  const animeCompleteCallback = animeStub.getCall(0).args[0];

  animeCompleteCallback.complete();
  t.is(Turbolinks.visit.callCount, 1);
  t.true(Turbolinks.visit.calledWithExactly(A.getAttribute("href"), { action: "advance" }));
});

test("Portfolio#loadIndex", (t) => {
  class ImageMock {
    constructor() {
      this._onloadCallback;
      this._src;
    }
    set onload(callback) {
      this._onloadCallback = callback;
    }
    set src(value) {
      this._src = value;
      this._onloadCallback();
    }
  }

  const imageMockStub = sandbox.stub(global, "Image", ImageMock);
	const portfolio = new Portfolio();
  const posts = [1, 2, 3];
  const whenClickExitStub = sandbox.stub(portfolio, "_whenClickExit");
  const postsForEachStub = sandbox.stub(posts, "forEach");

  portfolio.loadIndex(posts);

  t.true(whenClickExitStub.calledOnce);
  t.is(portfolio._totalImgLoaded, 0);
  t.is(postsForEachStub.callCount, 1);

  const onLoadSpy = sandbox.stub(portfolio, "_onLoad");
  const forEachCallback = postsForEachStub.getCall(0).args[0];
  const forEachCallbackSpy = sandbox.spy(forEachCallback);
  const post = { id: "image", image: "image" };

  forEachCallbackSpy(post, 0);
  t.true(forEachCallbackSpy.called);
  t.is(onLoadSpy.callCount, 1);
  forEachCallbackSpy(post, 1);
  t.is(onLoadSpy.callCount, 2);
  forEachCallbackSpy(post, 2);
  t.is(onLoadSpy.callCount, 3);
  forEachCallbackSpy(post, 3);
  t.is(onLoadSpy.callCount, 4);
  forEachCallbackSpy(post, 4);
  t.is(onLoadSpy.callCount, 5);
  t.true(onLoadSpy.calledWithExactly("image", 3, "./img/home/image.jpg"));
});

test("Portfolio#loadIndex when is mobile but not retina", (t) => {
  const portfolio = new Portfolio();
  const whenClickExitStub = sandbox.stub(portfolio, "_whenClickExit");
  const posts = [1, 2, 3];
  const postsForEachStub = sandbox.stub(posts, "forEach");

  portfolio._isMobile = true;
  portfolio._isRetina = false;

  portfolio.loadIndex(posts);

  t.true(whenClickExitStub.calledOnce);
  t.is(portfolio._totalImgLoaded, 0);
  t.is(postsForEachStub.callCount, 1);

  const onLoadSpy = sandbox.stub(portfolio, "_onLoad");
  const forEachCallback = postsForEachStub.getCall(0).args[0];
  const forEachCallbackSpy = sandbox.spy(forEachCallback);
  const post = { id: "image", image: "image" };

  forEachCallbackSpy(post, 0);
  t.true(forEachCallbackSpy.called);
  t.is(onLoadSpy.callCount, 0);
  forEachCallbackSpy(post, 1);
  t.is(onLoadSpy.callCount, 0);
  forEachCallbackSpy(post, 2);
  t.is(onLoadSpy.callCount, 0);
  forEachCallbackSpy(post, 3);
  t.is(onLoadSpy.callCount, 0);
  forEachCallbackSpy(post, 4);
  t.is(onLoadSpy.callCount, 1);
  t.true(onLoadSpy.calledWithExactly("image", 3, "./img/home/image-md.jpg"));
});

test("Portfolio#_onLoad", (t) => {
  const portfolio = new Portfolio();

  sandbox.stub(document, "querySelector", () => document.createElement("div"));
  const onLoadSpy = sandbox.spy(portfolio, "_onLoad");
  const clock = sinon.useFakeTimers();
  const progressSetSpy = sandbox.stub(NProgress, "set");
  const progressDoneSpy = sandbox.stub(NProgress, "done");
  const onIndexReadySpy = sandbox.stub(portfolio, "_onIndexReady");

  portfolio._totalImgLoaded = 2;
  portfolio._onLoad(1, 3, "image.jpg");
  t.true(onLoadSpy.calledOnce);
  t.true(progressSetSpy.calledOnce);
  t.true(progressSetSpy.calledWithExactly(1));
  clock.tick(250);
  t.true(progressDoneSpy.calledOnce);
  t.true(onIndexReadySpy.calledOnce);
  clock.restore();
});

test("Portfolio#_onLoad else", (t) => {
  const portfolio = new Portfolio();

  sandbox.stub(document, "querySelector", () => document.createElement("div"));
  const progressSetSpy = sandbox.stub(NProgress, "set");

  portfolio._totalImgLoaded = 0;
  portfolio._onLoad(0, 3, "image.jpg");
  t.true(progressSetSpy.calledOnce);
  t.true(progressSetSpy.calledWithExactly(1/3));
	t.is(portfolio._totalImgLoaded, 1);
});

test("Portfolio#_showPrevAndNextProjects", (t) => {
  const portfolio = new Portfolio();
  const animeStub = sandbox.stub(animejs, "anime");

  portfolio._showPrevAndNextProjects();
  t.is(animeStub.callCount, 1);
  t.true(animeStub.calledWith(sinon.match({ targets: ".page .prev-next-project" })));
	const removeSpy = sinon.spy();
	animeStub.getCall(0).args[0].begin({ animatables: [{target: { classList: { remove: removeSpy}}}]});
	t.true(removeSpy.called);
	t.true(removeSpy.calledWithExactly("hide"));
});

test("Portfolio#loadSiteMap", (t) => {
	const element = {classList: {remove: sinon.spy()}};
	const querySelectorAllStub = sandbox.stub(document, "querySelectorAll").withArgs(".site-map li").returns([element]);
	const clock = sinon.useFakeTimers();
  const portfolio = new Portfolio();
  const whenClickExitStub = sandbox.stub(portfolio, "_whenClickExit");
  const showTitleStub = sandbox.stub(portfolio, "_showTitle");
  const loadSiteMapSpy = sandbox.spy(portfolio, "loadSiteMap");
  const animeStub = sandbox.stub(animejs, "anime");

  portfolio.loadSiteMap();
  t.true(loadSiteMapSpy.calledOnce);
  t.true(whenClickExitStub.calledOnce);
  t.true(whenClickExitStub.calledWithExactly("h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a, .site-map a"));
  t.true(showTitleStub.calledOnce);
  t.is(animeStub.callCount, 2);
  t.true(animeStub.getCall(0).calledWith(sinon.match({ targets: ".site-map li" })));
  t.true(animeStub.getCall(1).calledWith(sinon.match({ targets: ".content blockquote" })));

	const removeSpy = sinon.spy();
	animeStub.getCall(1).args[0].begin({ animatables: [{target: { classList: { remove: removeSpy}}}]});
	t.true(removeSpy.called);
	t.true(removeSpy.calledWithExactly("hide"));
	animeStub.getCall(0).args[0].delay(null, 0);
	animeStub.getCall(0).args[0].translateX();

	clock.tick(1);
	clock.restore();
});

test("Portfolio#load404", (t) => {
  const portfolio = new Portfolio();
  const whenClickExitStub = sandbox.stub(portfolio, "_whenClickExit");
  const showTitleStub = sandbox.stub(portfolio, "_showTitle");
  const load404Spy = sandbox.spy(portfolio, "load404");
  const animeStub = sandbox.stub(animejs, "anime");

  portfolio.load404();
  t.true(load404Spy.calledOnce);
  t.true(whenClickExitStub.calledOnce);
  t.true(whenClickExitStub.calledWithExactly("h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a, .site-map a"));
  t.true(showTitleStub.calledOnce);
  t.is(animeStub.callCount, 1);
  t.true(animeStub.getCall(0).calledWith(sinon.match({ targets: ".content p" })));
});

test("Portfolio#_getComputedStyle", (t) => {
  const portfolio = new Portfolio();
  const getComputedStyleSpy = sandbox.spy(portfolio, "_getComputedStyle");
  const windowGetComputedStyleSpy = sandbox.spy(window, "getComputedStyle");
  const element = document.createElement("div");

  portfolio._getComputedStyle(element);
  t.true(getComputedStyleSpy.calledOnce);
  t.true(getComputedStyleSpy.calledWithExactly(element));
  t.true(windowGetComputedStyleSpy.calledOnce);
  t.true(windowGetComputedStyleSpy.calledWithExactly(element, null));
});

test("Portfolio#_getComputedStyle alternative", (t) => {
  const portfolio = new Portfolio();
  const getComputedStyleSpy = sandbox.spy(portfolio, "_getComputedStyle");
  const windowGetComputedStyleSpy = sandbox.spy(window, "getComputedStyle");
  const spy = sinon.spy();
  const element = {
    ownerDocument: {
      defaultView: {
        getComputedStyle: spy,
        opener: {}
      }
    }
  };

  portfolio._getComputedStyle(element);
  t.true(getComputedStyleSpy.calledOnce);
  t.true(getComputedStyleSpy.calledWithExactly(element));
  t.false(windowGetComputedStyleSpy.called);
  t.true(spy.called);
  t.true(spy.calledWithExactly(element, null));
});

test("Portfolio#_showTitle", (t) => {
  const portfolio = new Portfolio();
  const animeStub = sandbox.stub(animejs, "anime");

  portfolio._showTitle();
  t.true(animeStub.calledOnce);
  t.true(animeStub.calledWith(sinon.match({ targets: ".page .title" })));
	const removeSpy = sinon.spy();
	animeStub.getCall(0).args[0].begin({ animatables: [{target: { classList: { remove: removeSpy}}}]});
	t.true(removeSpy.called);
	t.true(removeSpy.calledWithExactly("hide"));
});

test("Portfolio#loadAbout", (t) => {
  class ImageMock {
    constructor() {
      this._onloadCallback;
      this._src;
    }
    set onload(callback) {
      this._onloadCallback = callback;
    }
    set src(value) {
      this._src = value;
      this._onloadCallback();
    }
  }

  const clock = sinon.useFakeTimers();
  const imageMockStub = sandbox.stub(global, "Image", ImageMock);
  const portfolio = new Portfolio();
  const querySelectorStub = sandbox.stub(document, "querySelector");

  querySelectorStub.withArgs(".page .content img").returns({
    getAttribute: () => { },
    classList: {
      remove: sinon.spy()
    }
  });
  querySelectorStub.withArgs(".content p img, .content > p.text").returns({
    classList: {
      remove: sinon.spy()
    }
  });
  const animeStub = sandbox.stub(animejs, "anime");
  const showTitleStub = sandbox.stub(portfolio, "_showTitle");
  const nprogressIncStub = sandbox.stub(NProgress, "inc");
  const progressDoneSpy = sandbox.stub(NProgress, "done");
  const whenClickExitStub = sandbox.stub(portfolio, "_whenClickExit");
	const element = {classList: {remove: sinon.spy()}};
	const querySelectorAllStub = sandbox.stub(document, "querySelectorAll").withArgs(".content p img, .content > p.text").returns([element]);

  portfolio.loadAbout();

  t.true(showTitleStub.called);
  t.true(nprogressIncStub.called);
  t.true(progressDoneSpy.called);
  t.true(progressDoneSpy.calledWithExactly(true));
  t.is(animeStub.callCount, 2);
  t.true(animeStub.getCall(0).calledWith(sinon.match({ targets: ".content > p.text, .content p img" })));
  t.true(animeStub.getCall(1).calledWith(sinon.match({ targets: ".content blockquote" })));
	animeStub.getCall(0).args[0].translateX();
	animeStub.getCall(0).args[0].delay(null, 0);
	animeStub.getCall(1).args[0].begin({animatables: [{target:{classList:{remove: sinon.spy()}}}]});
  t.is(whenClickExitStub.callCount, 1);
  t.true(whenClickExitStub.calledWithExactly("h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a"));
  t.true(imageMockStub.called);
  clock.tick(1);
  clock.restore();
});

test("Portfolio#loadProject", (t) => {
  class ImageMock {
    constructor() {
      this._onloadCallback;
      this._src;
    }
    set onload(callback) {
      this._onloadCallback = callback;
    }
    set src(value) {
      this._src = value;
      this._onloadCallback();
    }
  }

  const clock = sinon.useFakeTimers();
  const imageMockStub = sandbox.stub(global, "Image", ImageMock);
  const portfolio = new Portfolio();
  const querySelectorStub = sandbox.stub(document, "querySelector");

  querySelectorStub.withArgs(".project-page .image").returns({
    getAttribute: () => { },
    classList: {
      remove: sinon.spy()
    }
  });
  querySelectorStub.withArgs(".content").returns({
    classList: {
      remove: sinon.spy()
    }
  });
  const animeStub = sandbox.stub(animejs, "anime");
  const showTitleStub = sandbox.stub(portfolio, "_showTitle");
  const nprogressIncStub = sandbox.stub(NProgress, "inc");
  const progressDoneSpy = sandbox.stub(NProgress, "done");
  const whenClickExitStub = sandbox.stub(portfolio, "_whenClickExit");

  portfolio.loadProject();

  t.true(showTitleStub.called);
  t.true(nprogressIncStub.called);
  t.true(progressDoneSpy.called);
  t.true(progressDoneSpy.calledWithExactly(true));
  t.is(animeStub.callCount, 3);
  t.true(animeStub.getCall(0).calledWith(sinon.match({ targets: ".content" })));
  t.true(animeStub.getCall(1).calledWith(sinon.match({ targets: ".project-page .prev-next-project" })));
	animeStub.getCall(1).args[0].duration();
  t.true(animeStub.getCall(2).calledWith(sinon.match.object));
	animeStub.getCall(2).args[0].translateX();
	animeStub.getCall(2).args[0].duration();
  t.is(whenClickExitStub.callCount, 1);
  t.true(whenClickExitStub.calledWithExactly("h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a, .prev-next-project li a, .project-page .related-post a"));
  t.true(imageMockStub.called);
  clock.tick(1);
  clock.restore();
});

test("Portfolio#_onIndexReady", (t) => {
  const animeStub = sandbox.stub(animejs, "anime");
	const element = document.createElement("div");
	sandbox.stub(element, "querySelector").withArgs(".w-link").returns(document.createElement("div"));
  const querySelectorAllSpy = sandbox.stub(document, "querySelectorAll", () => [element]);
  const portfolio = new Portfolio();
	const removeSpy = sinon.spy();

  portfolio._onIndexReady();
  t.true(querySelectorAllSpy.called);
  t.is(animeStub.callCount, 2);
  t.true(animeStub.getCall(0).calledWith(sinon.match({ targets: ".pre.hide" })));
  t.true(animeStub.getCall(1).calledWith(sinon.match({ targets: ".posts li:nth-child(-n+4)" })));
	animeStub.getCall(0).args[0].begin({ animatables: [{target: { classList: { remove: removeSpy}}}]});
	t.true(removeSpy.called);
	t.true(removeSpy.calledWithExactly("hide"));
	animeStub.getCall(1).args[0].delay(null, 0);
});
