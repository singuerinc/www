var TOTAL_TESTS = 166;

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
    test.assertSelectorHasText("body .sidebar header a", "@singuerinc");
    test.assertExists("body .sidebar header a[href='/']", "@singuerinc");

    // sidebar - desktop - links
    test.assertExists("body .sidebar ul");
    test.assertElementCount("body .sidebar ul:first-child li", 5); // about, github, twitter, blog, medium
    test.assertSelectorHasText("body .sidebar ul:first-child li:nth-child(1) a", "About");
    test.assertSelectorHasText("body .sidebar ul:first-child li:nth-child(2) a", "GitHub");
    test.assertSelectorHasText("body .sidebar ul:first-child li:nth-child(3) a", "Twitter");
    test.assertSelectorHasText("body .sidebar ul:first-child li:nth-child(4) a", "Blog");
    test.assertSelectorHasText("body .sidebar ul:first-child li:nth-child(5) a", "Medium");

    test.assertExists("body .sidebar ul:first-child li:nth-child(1) a[href='/about.html']");
    test.assertExists("body .sidebar ul:first-child li:nth-child(2) a[href='https://github.com/singuerinc']");
    test.assertExists("body .sidebar ul:first-child li:nth-child(3) a[href='https://twitter.com/singuerinc']");
    test.assertExists("body .sidebar ul:first-child li:nth-child(4) a[href='https://blog.singuerinc.com']");
    test.assertExists("body .sidebar ul:first-child li:nth-child(5) a[href='https://medium.com/@singuerinc']");

    // sidebar - mobile - links
    test.assertExists("body .sidebar.mobile ul");
    test.assertElementCount("body .sidebar.mobile ul li", 5); // about, github, twitter, blog, medium
    test.assertSelectorHasText("body .sidebar.mobile ul li:nth-child(1) a", "About");
    test.assertSelectorHasText("body .sidebar.mobile ul li:nth-child(2) a", "GitHub");
    test.assertSelectorHasText("body .sidebar.mobile ul li:nth-child(3) a", "Twitter");
    test.assertSelectorHasText("body .sidebar.mobile ul li:nth-child(4) a", "Blog");
    test.assertSelectorHasText("body .sidebar.mobile ul li:nth-child(5) a", "Medium");

    test.assertExists("body .sidebar.mobile ul li:nth-child(1) a[href='/about.html']");
    test.assertExists("body .sidebar.mobile ul li:nth-child(2) a[href='https://github.com/singuerinc']");
    test.assertExists("body .sidebar.mobile ul li:nth-child(3) a[href='https://twitter.com/singuerinc']");
    test.assertExists("body .sidebar.mobile ul li:nth-child(4) a[href='https://blog.singuerinc.com']");
    test.assertExists("body .sidebar.mobile ul li:nth-child(5) a[href='https://medium.com/@singuerinc']");

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

    // about page

    test.assertTextExists("I’m Nahuel Scotti. This is my portfolio.");
  })
  .thenOpen("http://jekyll:4000/b-reel/zalando-ivy-park.html", function(){

    // projects - zalando ivy park

    test.assertExists("body.project-page");
    test.assertExists("body.project-page .content h1");
    test.assertExists("body.project-page .content img.image");
    test.assertExists("body.project-page .content .project-content p");

    test.assertSelectorHasText(".content h1", "Zalando · Ivy Park");
    test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Zalando");
    test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "B-REEL");
    test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='https://singuerinc-b-reel.gitlab.io/com.zalando.ivypark/en_gb/']");
    test.assertExists(".info tr:nth-child(5) td:nth-child(2) a[href='https://www.b-reel.com/projects/ivy-park']");

  })
  .thenOpen("http://jekyll:4000/b-reel/b-reel-b-reel.html", function(){

    // projects - b-reel

    test.assertExists("body.project-page");
    test.assertExists("body.project-page .content h1");
    test.assertExists("body.project-page .content img.image");
    test.assertExists("body.project-page .content .project-content p");

    test.assertSelectorHasText(".content h1", "B-REEL · B-REEL");
    test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "B-REEL");
    test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "B-REEL");
    test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='https://www.b-reel.com/']");

  })
  .thenOpen("http://jekyll:4000/singuerinc/arawys-store.html", function(){

    // projects - arawys store

    test.assertExists("body.project-page");
    test.assertExists("body.project-page .content h1");
    test.assertExists("body.project-page .content img.image");
    test.assertExists("body.project-page .content .project-content p");

    test.assertSelectorHasText(".content h1", "Arawys · Arawys");
    test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Arawys");
    test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "singuerinc");
    test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='https://www.arawys.com']");

  })
  .thenOpen("http://jekyll:4000/b-reel/htc-vive.html", function(){

    // projects - htc vive

    test.assertExists("body.project-page");
    test.assertExists("body.project-page .content h1");
    test.assertExists("body.project-page .content img.image");
    test.assertExists("body.project-page .content .project-content p");

    test.assertSelectorHasText(".content h1", "HTC, Google · Vive");
    test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "HTC, Google");
    test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "B-REEL");
    test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='https://www.b-reel.com/projects/htc-vive']");

    test.assertExists(".info tr:nth-child(6) td:nth-child(2) .award.award-awwwards_site_of_the_day");
    test.assertExists(".info tr:nth-child(6) td:nth-child(2) .award.thefwa_site_of_the_day");

  })
  .thenOpen("http://jekyll:4000/b-reel/facebook-moments.html", function(){

    // projects - facebook moments

    test.assertExists("body.project-page");
    test.assertExists("body.project-page .content h1");
    test.assertExists("body.project-page .content img.image");
    test.assertExists("body.project-page .content .project-content p");

    test.assertSelectorHasText(".content h1", "Facebook · Facebook Moments");
    test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Facebook");
    test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "B-REEL");
    test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='http://www.momentsapp.com']");
    test.assertExists(".info tr:nth-child(5) td:nth-child(2) a[href='https://singuerinc-b-reel.gitlab.io/com.facebook.moments/']");

  })
  .thenOpen("http://jekyll:4000/singuerinc/singuerinc-overlay-app.html", function(){

    // projects - overlay

    test.assertExists("body.project-page");
    test.assertExists("body.project-page .content h1");
    test.assertExists("body.project-page .content img.image");
    test.assertExists("body.project-page .content .project-content p");

    test.assertSelectorHasText(".content h1", "open-source · Overlay");
    test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "open-source");
    test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "singuerinc");
    test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='https://github.com/singuerinc/OverlayApp']");

  })
  .thenOpen("http://jekyll:4000/b-reel/skoda-byggd-for-at-tta-skit.html", function(){

    // projects - skoda

    test.assertExists("body.project-page");
    test.assertExists("body.project-page .content h1");
    test.assertExists("body.project-page .content img.image");
    test.assertExists("body.project-page .content .project-content.no-columns");
    test.assertExists("body.project-page .content .project-content .video-wrapper");

    test.assertSelectorHasText(".content h1", "Skoda · Byggd för att ta skit");
    test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Skoda");
    test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "B-REEL");
    test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='https://singuerinc-b-reel.gitlab.io/se.byggdforatttaskit.www/']");
    test.assertExists(".info tr:nth-child(5) td:nth-child(2) a[href='http://www.b-reelfilms.com/projects/commercials/director/patrik-gyllstrom/case/686/skoda/']");

  })
  .thenOpen("http://jekyll:4000/b-reel/kick-with-chrome.html", function(){

    // projects - kick with chrome

    test.assertExists("body.project-page");
    test.assertExists("body.project-page .content h1");
    test.assertExists("body.project-page .content img.image");
    test.assertExists("body.project-page .content .project-content.no-columns");
    test.assertExists("body.project-page .content .project-content .video-wrapper");

    test.assertSelectorHasText(".content h1", "Google · Kick with Chrome");
    test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Google");
    test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "B-REEL");
    test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='https://www.chromeexperiments.com/experiment/kick-with-chrome']");
    test.assertExists(".info tr:nth-child(5) td:nth-child(2) a[href='http://www.b-reelfilms.com/projects/digital/case/641/kick-with-chrome/']");

  })
  .thenOpen("http://jekyll:4000/singuerinc/kit-appetit.html", function(){

    // projects - kit appetit

    test.assertExists("body.project-page");
    test.assertExists("body.project-page .content h1");
    test.assertExists("body.project-page .content img.image");

    test.assertSelectorHasText(".content h1", "Kit Appetit · Kit Appetit");
    test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Kit Appetit");
    test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "singuerinc");
    test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='http://www.kitappetit.com/']");

  })
  .thenOpen("http://jekyll:4000/b-reel/names-not-numbers.html", function(){

    // projects - names not numbers

    test.assertExists("body.project-page");
    test.assertExists("body.project-page .content h1");
    test.assertExists("body.project-page .content img.image");
    test.assertExists("body.project-page .content .project-content.no-columns");
    test.assertExists("body.project-page .content .project-content p");
    test.assertExists("body.project-page .content .project-content .video-wrapper");

    test.assertSelectorHasText(".content h1", "Médecins du Monde · Names not numbers");
    test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Médecins du Monde");
    test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "B-REEL");
    test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='https://singuerinc-b-reel.gitlab.io/org.names-not-numbers.www/en_int/']");
    test.assertExists(".info tr:nth-child(5) td:nth-child(2) a[href='http://www.b-reelfilms.com/projects/digital/case/577/medecins-du-monde/']");

    test.assertExists(".info tr:nth-child(7) td:nth-child(2) .award.award-awwwards_site_of_the_day");
    test.assertExists(".info tr:nth-child(7) td:nth-child(2) .award.thefwa_site_of_the_day");

  })
  .thenOpen("http://jekyll:4000/singuerinc/roberto-ivan-cano.html", function(){

    // projects - roberto ivan cano

    test.assertExists("body.project-page");
    test.assertExists("body.project-page .content h1");
    test.assertExists("body.project-page .content img.image");

    test.assertSelectorHasText(".content h1", "Porfolio · Roberto Ivan Cano");
    test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Porfolio");
    test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "small-machine");
    test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='http://www.robertoivancano.com/']");

  })
  .run(function() {
    test.done();
  });
});
