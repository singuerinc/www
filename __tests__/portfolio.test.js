import test from 'ava';
import sinon from 'sinon';
import 'chai';
import Portfolio from '../Portfolio';

let sandbox;

test.beforeEach(() => {
  sandbox = sinon.sandbox.create();
  window.devicePixelRatio = 1;
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
  window.posts = [];
  const portfolio = new Portfolio();
  const whenClickExitStub = sandbox.stub(portfolio, "_whenClickExit");
  portfolio.loadIndex();
  t.true(whenClickExitStub.calledOnce);
});

test('loadIndex should assign window.posts to portfolio._posts', t => {
  window.posts = [1,2,3];
  const portfolio = new Portfolio();
  portfolio.loadIndex();
  t.is(portfolio._posts, window.posts);
});
