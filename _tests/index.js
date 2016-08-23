const TOTAL_TESTS = 67;

casper.test.begin("Test", TOTAL_TESTS, function suite(test) {
  casper.start("http://jekyll:4000/index.html", function() {

    // google analytics id
    test.assertTextExists("ga('create', 'UA-881783-8', 'auto');");

    // canonical
    test.assertExists("link[rel='canonical'][href='https://www.singuerinc.com/']");

    // metas
    test.assertExists("meta[property='fb:app_id'][content='1253343308017588']");
    test.assertExists("meta[property='fb:admins'][content='nahuel.scotti']");
    test.assertExists("meta[property='og:url'][content='https://www.singuerinc.com']");
    test.assertExists("meta[property='og:image'][content='https://www.singuerinc.com/img/home/zalando--ivy-park.jpg']");

    // page title
    test.assertTitle("Nahuel Scotti - Portfolio", "Homepage title is the one expected");

    // main content
    test.assertExists("body .content");
    test.assertElementCount("body .content", 1);

    // page subtitle
    test.assertExists("body .content h3");
    test.assertElementCount("body .content h3", 1);

    // sidebar
    test.assertExists("body .sidebar");
    test.assertElementCount("body .sidebar", 2); // desktop + mobile
    test.assertExists("body .sidebar.mobile");
    test.assertElementCount("body .sidebar.mobile", 1);

    // sidebar - title
    test.assertExists("body .sidebar header");
    test.assertElementCount("body .sidebar header", 1);
    test.assertExists("body .sidebar header a");
    test.assertSelectorHasText('body .sidebar header a', '@singuerinc');
    test.assertExists('body .sidebar header a[href="/"]', '@singuerinc');

    // sidebar - desktop - links
    test.assertExists("body .sidebar ul");
    test.assertElementCount("body .sidebar ul:first-child li", 5); // about, github, twitter, blog, medium
    test.assertSelectorHasText('body .sidebar ul:first-child li:nth-child(1) a', 'About');
    test.assertSelectorHasText('body .sidebar ul:first-child li:nth-child(2) a', 'GitHub');
    test.assertSelectorHasText('body .sidebar ul:first-child li:nth-child(3) a', 'Twitter');
    test.assertSelectorHasText('body .sidebar ul:first-child li:nth-child(4) a', 'Blog');
    test.assertSelectorHasText('body .sidebar ul:first-child li:nth-child(5) a', 'Medium');

    test.assertExists('body .sidebar ul:first-child li:nth-child(1) a[href="/about.html"]');
    test.assertExists('body .sidebar ul:first-child li:nth-child(2) a[href="https://github.com/singuerinc"]');
    test.assertExists('body .sidebar ul:first-child li:nth-child(3) a[href="https://twitter.com/singuerinc"]');
    test.assertExists('body .sidebar ul:first-child li:nth-child(4) a[href="https://blog.singuerinc.com"]');
    test.assertExists('body .sidebar ul:first-child li:nth-child(5) a[href="https://medium.com/@singuerinc"]');

    // sidebar - mobile - links
    test.assertExists("body .sidebar.mobile ul");
    test.assertElementCount("body .sidebar.mobile ul li", 5); // about, github, twitter, blog, medium
    test.assertSelectorHasText('body .sidebar.mobile ul li:nth-child(1) a', 'About');
    test.assertSelectorHasText('body .sidebar.mobile ul li:nth-child(2) a', 'GitHub');
    test.assertSelectorHasText('body .sidebar.mobile ul li:nth-child(3) a', 'Twitter');
    test.assertSelectorHasText('body .sidebar.mobile ul li:nth-child(4) a', 'Blog');
    test.assertSelectorHasText('body .sidebar.mobile ul li:nth-child(5) a', 'Medium');

    test.assertExists('body .sidebar.mobile ul li:nth-child(1) a[href="/about.html"]');
    test.assertExists('body .sidebar.mobile ul li:nth-child(2) a[href="https://github.com/singuerinc"]');
    test.assertExists('body .sidebar.mobile ul li:nth-child(3) a[href="https://twitter.com/singuerinc"]');
    test.assertExists('body .sidebar.mobile ul li:nth-child(4) a[href="https://blog.singuerinc.com"]');
    test.assertExists('body .sidebar.mobile ul li:nth-child(5) a[href="https://medium.com/@singuerinc"]');

    // posts
    test.assertExists("body .content ul.posts");

    test.assertElementCount("body .content ul.posts li", 20);
    test.assertElementCount("body .content ul.posts li#ivy-park", 1);
    test.assertElementCount("body .content ul.posts li#b-reel", 1);
    test.assertElementCount("body .content ul.posts li#arawys", 1);
    test.assertElementCount("body .content ul.posts li#vive", 1);
    test.assertElementCount("body .content ul.posts li#facebook-moments", 1);
    test.assertElementCount("body .content ul.posts li#overlay", 1);
    test.assertElementCount("body .content ul.posts li#byggd-för-att-ta-skit", 1);
    test.assertElementCount("body .content ul.posts li#kick-with-chrome", 1);
    test.assertElementCount("body .content ul.posts li#kit-appetit", 1);
    test.assertElementCount("body .content ul.posts li#names-not-numbers", 1);
    test.assertElementCount("body .content ul.posts li#roberto-ivan-cano", 1);
    test.assertElementCount("body .content ul.posts li#cuchi-cuchi", 1);
    test.assertElementCount("body .content ul.posts li#pepe-jeans", 1);
    test.assertElementCount("body .content ul.posts li#pro-combat", 1);
    test.assertElementCount("body .content ul.posts li#my-time-is-now", 1);
    test.assertElementCount("body .content ul.posts li#a1-me-gusta", 1);
    test.assertElementCount("body .content ul.posts li#som-un", 1);
    test.assertElementCount("body .content ul.posts li#revívelo", 1);
    test.assertElementCount("body .content ul.posts li#adapt", 1);
    test.assertElementCount("body .content ul.posts li#driving-experience", 1);

  })
  .thenOpen("http://jekyll:4000/about.html", function(){
    test.assertTextExists("I’m Nahuel Scotti. This is my portfolio.");
  })
  .run(function() {
    test.done();
  });
});
