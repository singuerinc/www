import test from 'ava';
import sinon from 'sinon';
import 'chai';
import {default as init, navigate, getPage} from '../app';
import Portfolio from '../Portfolio';

let sandbox;
let portfolio;

test.beforeEach(() => {
  sandbox = sinon.sandbox.create();
  portfolio = sinon.createStubInstance(Portfolio);
});

test.afterEach.always(() => {
  sandbox.restore();
});

test('it should return a Promise when init is called', t => {
  sandbox.stub(document, "addEventListener");
  const promise = init(document, portfolio);
  t.true(promise instanceof Promise);
});

test('it should listen turbolinks load event on document', t => {
  const listener = sandbox.stub(document, "addEventListener");
  init(document, portfolio);
  t.true(listener.withArgs("turbolinks:load").calledOnce);
  t.pass();
});

test('it should define a page variable with pathname as value', t => {
  sandbox.stub(document, "createElement").returns({
    get pathname() {
      return `https://www.singuerinc.com${this.href}`;
    }
  });
  const meta = {
    getAttribute() {
      return '/doubleyou/nike-my-time-is-now.html';
    }
  };
  sandbox.stub(document, "querySelector").returns(meta);
  const listener = sandbox.stub(document, "addEventListener");
  const promise = init(document, portfolio);
  promise.then(result => {
    t.is(typeof(result), 'object');
    t.is(typeof(result.page), 'string');
    t.is(result.page, 'https://www.singuerinc.com/doubleyou/nike-my-time-is-now.html');
  });
  listener.callArg(1);
  return promise;
});

test('it should get the page pathname', t => {
  sandbox.stub(document, "createElement", () => {
    return {
      get pathname(){
        return this.href.replace("https://www.singuerinc.com", "");
      }
    }
  });

  sandbox.stub(document, "querySelector", () => {
    return {
      getAttribute(){
        return "https://www.singuerinc.com/doubleyou/nike-my-time-is-now.html";
      }
    }
  });

  t.is(getPage(), '/doubleyou/nike-my-time-is-now.html');
});

test.todo('if get page is called');

test('it should load the index when page empty', t => {
  navigate('', portfolio);
  t.true(portfolio.loadIndex.called);
});

test('it should load the index when page is root', t => {
  navigate('/', portfolio);
  t.true(portfolio.loadIndex.called);
});

test('it should load the index when page is index.html', t => {
  navigate('/index.html', portfolio);
  t.true(portfolio.loadIndex.called);
});

test('it should load the about page', t => {
  navigate('/about.html', portfolio);
  t.true(portfolio.loadAbout.called);
});


test('it should load the sitemap page', t => {
  navigate('/sitemap.html', portfolio);
  t.true(portfolio.loadSiteMap.called);
});

test('it should load the 404 page', t => {
  navigate('/404.html', portfolio);
  t.true(portfolio.load404.called);
});


test('it should load a project', t => {
  navigate('/doubleyou/nike-my-time-is-now.html', portfolio);
  t.true(portfolio.loadProject.called);
});

test('it should throw an Error when the page does not exist', t => {
  t.throws(() => {
    navigate('/not-existent.html', portfolio);
  }, Error);
});
