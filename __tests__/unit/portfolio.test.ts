/* global window, document, global, HTMLHtmlElement, Turbolinks */
/* eslint-disable class-methods-use-this */
import test from "ava";
import "chai";
import NProgress = require("nprogress");
import sinon = require("sinon");
import Turbolinks = require("turbolinks");
import * as animejs from "../../_src/anime";
import Portfolio from "../../_src/Portfolio";

class ImageMock {
    private onloadCallback: any;

    set onload(callback) {
        this.onloadCallback = callback;
    }

    set src(value: string) {
        this.onloadCallback();
    }
}

let sandbox;

test.beforeEach(() => {
    (window as any).Image = ImageMock;
    sandbox = sinon.sandbox.create();
    window.requestAnimationFrame = () => {
        return 0;
    };
});

test.afterEach.always(() => {
    sandbox.restore();
});

test("it should return a Portfolio instance", (t) => {
    const portfolio: Portfolio = new Portfolio();

    t.is(Portfolio, portfolio.constructor);
});

test("it should call Portfolio#getComputedStyle in the constructor", (t) => {
    const getComputedStyleSpy = sandbox.spy(Portfolio, "getComputedStyle");

    const portfolio: Portfolio = new Portfolio();

    t.true(getComputedStyleSpy.calledOnce);
    t.is(getComputedStyleSpy.getCall(0).args[0].constructor, HTMLHtmlElement);
});

test("Portfolio#isRetina should be false if devicePixelRatio is equal or less than 1", (t) => {
    sandbox.stub(Portfolio, "getPixelRatio").callsFake(() => 1);
    const portfolio: Portfolio = new Portfolio();

    t.false(portfolio.isRetina);
});

test("Portfolio#isRetina should be true if devicePixelRatio is greater than 1", (t) => {
    sandbox.stub(Portfolio, "getPixelRatio").callsFake(() => 2);
    const portfolio: Portfolio = new Portfolio();

    t.true(portfolio.isRetina);
});

test("Portfolio#isMobile should be true if the page with is less than 768", (t) => {
    function HTMLHtmlElementMock() {
        this.getPropertyValue = () => {
            return "767";
        };
    }

    sandbox.stub(Portfolio, "getComputedStyle").callsFake(() => new HTMLHtmlElementMock());
    const portfolio: Portfolio = new Portfolio();

    t.true(portfolio.isMobile);
});

test("Portfolio#isMobile should be false if the page with equal or greater than 768", (t) => {
    function HTMLHtmlElementMock() {
        this.getPropertyValue = () => {
            return "768";
        };
    }

    sandbox.stub(Portfolio, "getComputedStyle").returns(new HTMLHtmlElementMock());
    const portfolio: Portfolio = new Portfolio();

    t.false(portfolio.isMobile);
});

test("Portfolio#loadIndex should call whenClickExit", (t) => {
    const portfolio: Portfolio = new Portfolio();
    const whenClickExitStub = sandbox.stub(portfolio, "whenClickExit");

    portfolio.loadIndex([]);
    t.true(whenClickExitStub.calledOnce);

    const selector = "h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a, ul.posts li > .w-link";

    t.true(whenClickExitStub.calledWithExactly(selector));
});

test.skip("Portfolio#whenClickExit should iterate on each element", (t) => {
    const portfolio: Portfolio = new Portfolio();
    const elements: Element[] = [
        document.createElement("div"),
        document.createElement("div"),
        document.createElement("div"),
    ];

    // sandbox.stub(document, "querySelectorAll", () => elements);
    // const array: Element[] = elements;

    sandbox.stub(Array, "from").value(elements);
    const forEachSpy = sandbox.spy(elements, "forEach");

    portfolio.whenClickExit("div");
    t.is(forEachSpy.callCount, 1);
});

test("Portfolio#whenClickExit should add a listener to each element", (t) => {
    const element = document.createElement("div");
    const elements = [element];
    sandbox.stub(document, "querySelectorAll").callsFake(() => elements);

    const addEventListenerSpy = sandbox.spy(element, "addEventListener");
    const portfolio: Portfolio = new Portfolio();

    portfolio.whenClickExit("div");
    t.is(addEventListenerSpy.callCount, 1);
    const callback = addEventListenerSpy.getCall(0).args[1];

    t.true(addEventListenerSpy.getCall(0).calledWithExactly("click", callback));
});

test("Portfolio#whenClickExit, on click should prevent default and call anime", (t) => {
    const turboStub = sandbox.stub(Turbolinks, "visit");
    const animeStub = sandbox.stub(animejs, "anime");
    const portfolio: Portfolio = new Portfolio();
    const element = document.createElement("div");
    const elements = [element];

    sandbox.stub(document, "querySelectorAll").callsFake(() => elements);
    const addEventListenerSpy = sandbox.spy(element, "addEventListener");

    portfolio.whenClickExit("div");
    const callback = addEventListenerSpy.getCall(0).args[1];
    const callbackSpy = sandbox.spy(callback);
    const A = document.createElement("a");
    const event = {
        preventDefault: sinon.spy(),
        target: A,
    };

    callbackSpy(event);
    t.is(callbackSpy.callCount, 1);
    t.is(event.preventDefault.callCount, 1);
    t.is(event.preventDefault.callCount, 1);
    t.is(animeStub.callCount, 1);
    const animeCompleteCallback = animeStub.getCall(0).args[0];

    animeCompleteCallback.complete();
    t.is(turboStub.callCount, 1);
    t.true(turboStub.calledWithExactly(A.getAttribute("href"), {action: "advance"}));
});

test("Portfolio#loadIndex", (t) => {
    const portfolio: Portfolio = new Portfolio();
    const posts = [
        {id: "image1", image: "image1.jpg"},
        {id: "image2", image: "image2.jpg"},
        {id: "image3", image: "image3.jpg"},
    ];
    const whenClickExitStub = sandbox.stub(portfolio, "whenClickExit");
    const postsForEachStub = sandbox.stub(posts, "forEach");

    portfolio.loadIndex(posts);

    t.true(whenClickExitStub.calledOnce);
    t.is(portfolio.totalImagesLoaded, 0);
    t.is(postsForEachStub.callCount, 1);

    const onLoadSpy = sandbox.stub(portfolio, "onLoad");
    const forEachCallback = postsForEachStub.getCall(0).args[0];
    const forEachCallbackSpy = sandbox.spy(forEachCallback);
    const post = {id: "image", image: "image"};

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
    const portfolio: Portfolio = new Portfolio();
    const whenClickExitStub = sandbox.stub(portfolio, "whenClickExit");
    const posts = [
        {id: "", image: ""},
        {id: "", image: ""},
        {id: "", image: ""},
    ];
    const postsForEachStub = sandbox.stub(posts, "forEach");

    portfolio.isMobile = true;
    portfolio.isRetina = false;

    portfolio.loadIndex(posts);

    t.true(whenClickExitStub.calledOnce);
    t.is(portfolio.totalImagesLoaded, 0);
    t.is(postsForEachStub.callCount, 1);

    const onLoadSpy = sandbox.stub(portfolio, "onLoad");
    const forEachCallback = postsForEachStub.getCall(0).args[0];
    const forEachCallbackSpy = sandbox.spy(forEachCallback);
    const post = {id: "image", image: "image"};

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
    t.true(onLoadSpy.calledWithExactly("image", 3, "./img/home/image-md.jpg"));
});

test("Portfolio#onLoad", (t) => {
    const portfolio: Portfolio = new Portfolio();

    sandbox.stub(document, "querySelector").callsFake(() => document.createElement("div"));
    const onLoadSpy = sandbox.spy(portfolio, "onLoad");
    const clock = sinon.useFakeTimers();
    const progressSetSpy = sandbox.stub(NProgress, "set");
    const progressDoneSpy = sandbox.stub(NProgress, "done");
    const onIndexReadySpy = sandbox.stub(portfolio, "onIndexReady");

    portfolio.totalImagesLoaded = 2;
    portfolio.onLoad("1", 3, "image.jpg");
    t.true(onLoadSpy.calledOnce);
    t.true(progressSetSpy.calledOnce);
    t.true(progressSetSpy.calledWithExactly(1));
    clock.tick(250);
    t.true(progressDoneSpy.calledOnce);
    t.true(onIndexReadySpy.calledOnce);
    clock.restore();
});

test("Portfolio#onLoad else", (t) => {
    const portfolio: Portfolio = new Portfolio();

    sandbox.stub(document, "querySelector").callsFake(() => document.createElement("div"));
    const progressSetSpy = sandbox.stub(NProgress, "set");

    portfolio.totalImagesLoaded = 0;
    portfolio.onLoad("0", 3, "image.jpg");
    t.true(progressSetSpy.calledOnce);
    t.true(progressSetSpy.calledWithExactly(1 / 3));
    t.is(portfolio.totalImagesLoaded, 1);
});

test("Portfolio#loadSiteMap", (t) => {
    const element = {classList: {remove: sinon.spy()}};
    sandbox.stub(document, "querySelectorAll").withArgs(".site-map li").returns([element]);
    const clock = sinon.useFakeTimers();
    const portfolio: Portfolio = new Portfolio();
    const whenClickExitStub = sandbox.stub(portfolio, "whenClickExit");
    const showTitleStub = sandbox.stub(Portfolio, "showTitle");
    const loadSiteMapSpy = sandbox.spy(portfolio, "loadSiteMap");
    const animeStub = sandbox.stub(animejs, "anime");

    portfolio.loadSiteMap();
    t.true(loadSiteMapSpy.calledOnce);
    t.true(whenClickExitStub.calledOnce);
    const selector = "h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a, .site-map a";
    t.true(whenClickExitStub.calledWithExactly(selector));
    t.true(showTitleStub.calledOnce);
    t.is(animeStub.callCount, 2);
    t.true(animeStub.getCall(0).calledWith(sinon.match({targets: ".site-map li"})));
    t.true(animeStub.getCall(1).calledWith(sinon.match({targets: ".content blockquote"})));
    const removeSpy = sinon.spy();
    const animatables = [{target: {classList: {remove: removeSpy}}}];

    animeStub.getCall(1).args[0].begin({animatables});
    t.true(removeSpy.called);
    t.true(removeSpy.calledWithExactly("hide"));
    animeStub.getCall(0).args[0].delay(null, 0);
    animeStub.getCall(0).args[0].translateX();

    clock.tick(1);
    clock.restore();
});

test("Portfolio#load404", (t) => {
    const portfolio: Portfolio = new Portfolio();
    const whenClickExitStub = sandbox.stub(portfolio, "whenClickExit");
    const showTitleStub = sandbox.stub(Portfolio, "showTitle");
    const load404Spy = sandbox.spy(portfolio, "load404");
    const animeStub = sandbox.stub(animejs, "anime");

    portfolio.load404();
    t.true(load404Spy.calledOnce);
    t.true(whenClickExitStub.calledOnce);

    const selector = "h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a, .site-map a";
    t.true(whenClickExitStub.calledWithExactly(selector));
    t.true(showTitleStub.calledOnce);
    t.is(animeStub.callCount, 1);
    t.true(animeStub.getCall(0).calledWith(sinon.match({targets: ".content p"})));
});

test("Portfolio#getComputedStyle", (t) => {
    // const portfolio:Portfolio = new Portfolio();
    const getComputedStyleSpy = sandbox.spy(Portfolio, "getComputedStyle");
    const windowGetComputedStyleSpy = sandbox.spy(window, "getComputedStyle");
    const element = document.createElement("div");

    Portfolio.getComputedStyle(element);
    t.true(getComputedStyleSpy.calledOnce);
    t.true(getComputedStyleSpy.calledWithExactly(element));
    t.true(windowGetComputedStyleSpy.called);
    t.true(windowGetComputedStyleSpy.calledWithExactly(element));
});

test("Portfolio#getComputedStyle alternative", (t) => {
    const getComputedStyleSpy = sandbox.spy(Portfolio, "getComputedStyle");
    const windowGetComputedStyleSpy = sandbox.spy(window, "getComputedStyle");
    const spy = sinon.spy();
    const element: Element = {
        ownerDocument: {
            defaultView: {
                getComputedStyle: spy,
                opener: {},
            },
        },
    } as Element;

    Portfolio.getComputedStyle(element);
    t.true(getComputedStyleSpy.calledOnce);
    t.true(getComputedStyleSpy.calledWithExactly(element));
    t.false(windowGetComputedStyleSpy.called);
    t.true(spy.called);
    t.true(spy.calledWithExactly(element));
});

test("Portfolio#showTitle", (t) => {
    // const portfolio:Portfolio = new Portfolio();
    const animeStub = sandbox.stub(animejs, "anime");

    Portfolio.showTitle();
    t.true(animeStub.calledOnce);
    t.true(animeStub.calledWith(sinon.match({targets: ".page .title"})));
    const removeSpy = sinon.spy();
    const animatables = [{target: {classList: {remove: removeSpy}}}];

    animeStub.getCall(0).args[0].begin({animatables});
    t.true(removeSpy.called);
    t.true(removeSpy.calledWithExactly("hide"));
});

test("Portfolio#loadAbout", (t) => {
    const clock = sinon.useFakeTimers();
    const portfolio: Portfolio = new Portfolio();
    const querySelectorStub = sandbox.stub(document, "querySelector");

    querySelectorStub.withArgs(".page .content img").returns({
        classList: {
            remove: sinon.spy(),
        },
        getAttribute: () => {
            //
        },
    });
    querySelectorStub.withArgs(".content p img, .content > p.text").returns({
        classList: {
            remove: sinon.spy(),
        },
    });
    const animeStub = sandbox.stub(animejs, "anime");
    const showTitleStub = sandbox.stub(Portfolio, "showTitle");
    const nprogressIncStub = sandbox.stub(NProgress, "inc");
    const progressDoneSpy = sandbox.stub(NProgress, "done");
    const whenClickExitStub = sandbox.stub(portfolio, "whenClickExit");
    const element = {classList: {remove: sinon.spy()}};
    sandbox.stub(document, "querySelectorAll").withArgs(".content p img, .content > p.text").returns([element]);

    portfolio.loadAbout();

    t.true(showTitleStub.called);
    t.true(nprogressIncStub.called);
    t.true(progressDoneSpy.called);
    t.true(progressDoneSpy.calledWithExactly(true));
    t.is(animeStub.callCount, 2);
    t.true(animeStub.getCall(0).calledWith(sinon.match({targets: ".content > p.text, .content p img"})));
    t.true(animeStub.getCall(1).calledWith(sinon.match({targets: ".content blockquote"})));
    animeStub.getCall(0).args[0].translateX();
    animeStub.getCall(0).args[0].delay(null, 0);

    const animatables = [{target: {classList: {remove: sinon.spy()}}}];

    animeStub.getCall(1).args[0].begin({animatables});
    t.is(whenClickExitStub.callCount, 1);
    t.true(whenClickExitStub.calledWithExactly("h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a"));
    clock.tick(1);
    clock.restore();
});

test("Portfolio#loadProject", (t) => {
    const clock = sinon.useFakeTimers();
    const portfolio: Portfolio = new Portfolio();
    const querySelectorStub = sandbox.stub(document, "querySelector");

    querySelectorStub.withArgs(".project-page .image").returns({
        classList: {
            remove: sinon.spy(),
        },
        getAttribute: () => {
            return "image";
        },
    });
    querySelectorStub.withArgs(".content").returns({
        classList: {
            remove: sinon.spy(),
        },
    });
    const animeStub = sandbox.stub(animejs, "anime");
    const showTitleStub = sandbox.stub(Portfolio, "showTitle");
    const nprogressIncStub = sandbox.stub(NProgress, "inc");
    const progressDoneSpy = sandbox.stub(NProgress, "done");
    const whenClickExitStub = sandbox.stub(portfolio, "whenClickExit");
    const selector = "h1 a, .sidebar nav > ul > li > a, " +
        ".sidebar-mobile ul li a, " +
        ".prev-next-project li a, .project-page .related-post a";

    portfolio.loadProject();

    t.true(showTitleStub.called);
    t.true(nprogressIncStub.called);
    t.true(progressDoneSpy.called);
    t.true(progressDoneSpy.calledWithExactly(true));
    t.is(animeStub.callCount, 3);
    t.true(animeStub.getCall(0).calledWith(sinon.match({targets: ".content"})));
    t.true(animeStub.getCall(1).calledWith(sinon.match({targets: ".project-page .prev-next-project"})));
    t.true(animeStub.getCall(2).calledWith(sinon.match.object));
    animeStub.getCall(2).args[0].translateX();
    t.is(whenClickExitStub.callCount, 1);
    t.true(whenClickExitStub.calledWithExactly(selector));
    clock.tick(1);
    clock.restore();
});

test("Portfolio#onIndexReady", (t) => {
    const animeStub = sandbox.stub(animejs, "anime");
    const element = document.createElement("div");
    sandbox.stub(element, "querySelector").withArgs(".w-link").returns(document.createElement("div"));
    const querySelectorAllSpy = sandbox.stub(document, "querySelectorAll").callsFake(() => [element]);
    const portfolio: Portfolio = new Portfolio();
    const removeSpy = sinon.spy();

    portfolio.onIndexReady();
    t.true(querySelectorAllSpy.called);
    t.is(animeStub.callCount, 2);
    t.true(animeStub.getCall(0).calledWith(sinon.match({targets: ".pre.hide"})));
    t.true(animeStub.getCall(1).calledWith(sinon.match({targets: ".posts li:nth-child(-n+4)"})));
    const animatables = [{target: {classList: {remove: removeSpy}}}];

    animeStub.getCall(0).args[0].begin({animatables});
    t.true(removeSpy.called);
    t.true(removeSpy.calledWithExactly("hide"));
    animeStub.getCall(1).args[0].delay(null, 0);
});
