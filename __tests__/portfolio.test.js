import test from 'ava';
import sinon from 'sinon';
import 'chai';
import Portfolio from '../Portfolio';
import * as animejs from '../anime';
import NProgress from "nprogress";

let sandbox;

test.beforeEach(() => {
  sandbox = sinon.sandbox.create();
  window.devicePixelRatio = 1;
  global.requestAnimationFrame = () => {};
});

test.afterEach.always(() => {
  sandbox.restore();
});

test('it should return a Portfolio instance', t => {
  const portfolio = new Portfolio();
  t.is(Portfolio, portfolio.constructor);
});

test('it should call Portfolio getComputedStyle in the constructor', t => {
  const getComputedStyleSpy = sandbox.spy(Portfolio.prototype, "_getComputedStyle");
  new Portfolio();
  t.true(getComputedStyleSpy.calledOnce);
  t.is(getComputedStyleSpy.getCall(0).args[0].constructor, HTMLHtmlElement);
});

test('isRetina should be false if devicePixelRatio is equal or less than 1', t => {
  sandbox.stub(window, "devicePixelRatio", 1);
  const portfolio = new Portfolio();
  t.false(portfolio._isRetina);
});

test('isRetina should be true if devicePixelRatio is greater than 1', t => {
  sandbox.stub(window, "devicePixelRatio", 2);
  const portfolio = new Portfolio();
  t.true(portfolio._isRetina);
});

test('isMobile should be true if the page with is less than 768', t => {
  class HTMLHtmlElementMock {
    getPropertyValue(){
	  return "767";
    }
  }
  sandbox.stub(Portfolio.prototype, "_getComputedStyle").returns(new HTMLHtmlElementMock());
  const portfolio = new Portfolio();
  t.true(portfolio._isMobile);
});

test('isMobile should be false if the page with equal or greater than 768', t => {
  class HTMLHtmlElementMock {
    getPropertyValue(){
      return "768";
    }
  }
  sandbox.stub(Portfolio.prototype, "_getComputedStyle").returns(new HTMLHtmlElementMock());
  const portfolio = new Portfolio();
  t.false(portfolio._isMobile);
});

test('loadIndex should call whenClickExit', t => {
  const portfolio = new Portfolio();
  const whenClickExitStub = sandbox.stub(portfolio, "_whenClickExit");
  portfolio.loadIndex([]);
  t.true(whenClickExitStub.calledOnce);
  t.true(whenClickExitStub.calledWithExactly("h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a, ul.posts li > .w-link"));
});

test('_whenClickExit should iterate over each element', t => {
  const portfolio = new Portfolio();
  const _whenClickExitSpy = sandbox.spy(portfolio, "_whenClickExit");
  portfolio.loadIndex([]);
  t.true(_whenClickExitSpy.calledOnce);
  t.true(_whenClickExitSpy.calledWithExactly("h1 a, .sidebar nav > ul > li > a, .sidebar-mobile ul li a, ul.posts li > .w-link"));
});

test('_whenClickExit should iterate on each element', t => {
  const portfolio = new Portfolio();
  const elements = [
    document.createElement('div'),
    document.createElement('div'),
    document.createElement('div')
  ];
  sandbox.stub(document, "querySelectorAll", () => elements);
  const forEachSpy = sandbox.spy(elements, "forEach");
  portfolio._whenClickExit(elements);
  t.is(forEachSpy.callCount, 1);
});

test('_whenClickExit should add a click listener to each element', t => {
  const portfolio = new Portfolio();
  const element = document.createElement('div');
  const elements = [element];
  sandbox.stub(document, "querySelectorAll", () => elements);
  const addEventListenerSpy = sandbox.spy(element, "addEventListener");
  portfolio._whenClickExit(elements);
  t.is(addEventListenerSpy.callCount, 1);
  const callback = addEventListenerSpy.getCall(0).args[1];
  t.true(addEventListenerSpy.getCall(0).calledWithExactly("click", callback));
});

test('_whenClickExit, on click should prevent default and call anime', t => {
  global.Turbolinks = {
    visit: sinon.spy()
  };
  const animeStub = sandbox.stub(animejs, "anime");
  const portfolio = new Portfolio();
  const element = document.createElement('div');
  const elements = [element];
  sandbox.stub(document, "querySelectorAll", () => elements);
  const addEventListenerSpy = sandbox.spy(element, "addEventListener");
  portfolio._whenClickExit(elements);
  const callback = addEventListenerSpy.getCall(0).args[1];
  const callbackSpy = sandbox.spy(callback);
  const A = document.createElement("a");
  const event = {
    target : A,
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
  t.true(Turbolinks.visit.calledWithExactly(A.getAttribute("href"), {action: "advance"}));
});

test('Portfolio#loadIndex', t => {
  const portfolio = new Portfolio();
  const posts = [1,2,3];
  const whenClickExitStub = sandbox.stub(portfolio, "_whenClickExit");
  const postsForEachStub = sandbox.stub(posts, "forEach");

  portfolio.loadIndex(posts);

  t.true(whenClickExitStub.calledOnce);
  t.is(portfolio._totalImgLoaded, 0);
  t.is(postsForEachStub.callCount, 1);
});

test('Portfolio#_onLoad', t => {
  const portfolio = new Portfolio();
  sandbox.stub(document, "querySelector", () => document.createElement("div"));
  const onLoadSpy = sandbox.spy(portfolio, "_onLoad");
  const clock = sinon.useFakeTimers();
  const progressSetSpy = sandbox.spy(NProgress, "set");
  const progressDoneSpy = sandbox.spy(NProgress, "done");
  portfolio._totalImgLoaded = 2;
  portfolio._onLoad(1, 3, 'image.jpg');
  t.true(onLoadSpy.calledOnce);
  t.true(progressSetSpy.calledOnce);
  t.true(progressSetSpy.calledWithExactly(1));
  clock.tick(250);
  t.true(progressDoneSpy.calledOnce);
  clock.restore();
});
