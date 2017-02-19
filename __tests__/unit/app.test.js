import test from 'ava';
import sinon from 'sinon';
import 'chai';
import * as app from '../../app';
import Portfolio from '../../Portfolio';

let sandbox;
let portfolio;

test.beforeEach(() => {
  sandbox = sinon.sandbox.create();
  portfolio = sinon.createStubInstance(Portfolio);

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
});

test.afterEach.always(() => {
  sandbox.restore();
});

test('it should return a Promise when init is called', t => {
  sandbox.stub(document, "addEventListener");
  const promise = app.init(document, portfolio);
  t.true(promise instanceof Promise);
});

test('it should listen turbolinks load event on document', t => {
  const listener = sandbox.stub(document, "addEventListener");
  app.init(document, portfolio);
  t.true(listener.withArgs("turbolinks:load").calledOnce);
  t.pass();
});

test('it should define a page variable with pathname as value', t => {
  const listener = sandbox.stub(document, "addEventListener");
  const promise = app.init(document, portfolio);
  promise.then(result => {
    t.is(typeof(result), 'object');
    t.is(typeof(result.page), 'string');
    t.is(result.page, '/doubleyou/nike-my-time-is-now.html');
  });
  listener.callArg(1);
  return promise;
});

test('it should get the page pathname', t => {
  t.is(app.getPage(), '/doubleyou/nike-my-time-is-now.html');
});

test('it should call getPage method', t => {
  let getPageSpy = sandbox.spy(app, "getPage");
  const listener = sandbox.stub(document, "addEventListener");
  const promise = app.init(document, portfolio);
  promise.then(() => {
    t.true(getPageSpy.calledOnce);
  });
  listener.callArg(1);
});

test('it should load the index when page empty', t => {
  app.navigate('', portfolio);
  t.true(portfolio.loadIndex.called);
});

test('it should load the index when page is root', t => {
  app.navigate('/', portfolio);
  t.true(portfolio.loadIndex.called);
});

test('it should load the index when page is index.html', t => {
  app.navigate('/index.html', portfolio);
  t.true(portfolio.loadIndex.called);
});

test('it should load the about page', t => {
  app.navigate('/about.html', portfolio);
  t.true(portfolio.loadAbout.called);
});


test('it should load the sitemap page', t => {
  app.navigate('/sitemap.html', portfolio);
  t.true(portfolio.loadSiteMap.called);
});

test('it should load the 404 page', t => {
  app.navigate('/404.html', portfolio);
  t.true(portfolio.load404.called);
});


test('it should load a project', t => {
  app.navigate('/doubleyou/nike-my-time-is-now.html', portfolio);
  t.true(portfolio.loadProject.called);
});

test('it should throw an Error when the page does not exist', t => {
  t.throws(() => {
    app.navigate('/not-existent.html', portfolio);
  }, Error);
});
