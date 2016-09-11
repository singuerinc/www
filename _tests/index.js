casper.test.begin("Test", 329, function suite(test) {
  casper.start("http://jekyll:4000/index.html", function () {
    test.assertHttpStatus(200);
    test.assertResourceExists("assets/bundle.js");
    test.assertResourceExists("https://www.google-analytics.com/analytics.js");

    // test.assertResourceExists('img/home/zalando--ivy-park.jpg');
    // test.assertResourceExists('img/home/b-reel--b-reel.jpg');
    // test.assertResourceExists('img/home/arawys--store.jpg');
    // test.assertResourceExists('img/home/htc--vive.jpg');
    // test.assertResourceExists('img/home/facebook--moments.jpg');
    // test.assertResourceExists('img/home/singuerinc--overlay-app.jpg');
    // test.assertResourceExists('img/home/skoda--byggd-for-att-ta-skit.jpg');
    // test.assertResourceExists('img/home/google--kick-with-chrome.jpg');
    // test.assertResourceExists('img/home/kitappetit--kitappetit.jpg');
    // test.assertResourceExists('img/home/medecins-du-monde--names-not-numbers.jpg');
    // test.assertResourceExists('img/home/roberto-ivan-cano.jpg');
    // test.assertResourceExists('img/home/cuchi-cuchi_50.jpg');
    // test.assertResourceExists('img/home/pepe-jeans_50.jpg');
    // test.assertResourceExists('img/home/nike--pro-combat.jpg');
    // test.assertResourceExists('img/home/nike--my-time-is-now.jpg');
    // test.assertResourceExists('img/home/audi--a1-me-gusta.jpg');
    // test.assertResourceExists('img/home/fcb--somos-uno.jpg');
    // test.assertResourceExists('img/home/atrapalo--revivelo.jpg');
    // test.assertResourceExists('img/home/evax--adapt.jpg');
    // test.assertResourceExists('img/home/audi--driving-experience.jpg');

    test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");

    // canonical
    test.assertExists("link[rel='canonical'][href='https://www.singuerinc.com/']");

    // metas
    test.assertExists("meta[property='fb:app_id'][content='1253343308017588']");
    test.assertExists("meta[property='fb:admins'][content='nahuel.scotti']");
    test.assertExists("meta[property='og:site_name'][content='Nahuel Scotti - Portfolio']");
    test.assertExists("meta[property='og:title'][content='Nahuel Scotti - Portfolio']");
    test.assertExists("meta[property='og:description'][content='Developer. Currently working at NetEnt, Stockholm - Sweden.']");
    test.assertExists("meta[property='og:type'][content='website']");
    test.assertExists("meta[property='og:url'][content='https://www.singuerinc.com']");
    test.assertExists("meta[property='og:image'][content='https://www.singuerinc.com/img/home/zalando--ivy-park.jpg']");
    test.assertExists("meta[property='og:locale'][content='en_US']");
    test.assertExists("meta[property='og:image:type'][content='image/jpg']");
    test.assertExists("meta[property='og:image:width'][content='816']");
    test.assertExists("meta[property='og:image:height'][content='386']");
    test.assertExists("meta[name='twitter:card'][content='summary']");
    test.assertExists("meta[name='twitter:site'][content='@singuerinc']");
    test.assertExists("meta[name='twitter:title'][content='Nahuel Scotti - Portfolio']");
    test.assertExists("meta[name='twitter:description'][content='Developer. Currently working at NetEnt, Stockholm - Sweden.']");
    test.assertExists("meta[name='twitter:image'][content='https://www.singuerinc.com/img/home/zalando--ivy-park.jpg']");

      // page title
    test.assertTitle("Nahuel Scotti - Portfolio");

    // main content
    test.assertExists("body .content");
    test.assertElementCount("body .content", 1);

    // page subtitle
    test.assertExists("body .content h3");
    test.assertElementCount("body .content h3", 1);

    // sidebar
    test.assertExists("body .sidebar");
    // desktop + mobile
    test.assertElementCount("body .sidebar", 2);
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
    // home, about, github, twitter, blog, medium
    test.assertElementCount("body .sidebar ul:first-child li", 6);
    test.assertSelectorHasText("body .sidebar ul:first-child li:nth-child(1) a", "Home");
    test.assertSelectorHasText("body .sidebar ul:first-child li:nth-child(2) a", "About");
    test.assertSelectorHasText("body .sidebar ul:first-child li:nth-child(3) a", "GitHub");
    test.assertSelectorHasText("body .sidebar ul:first-child li:nth-child(4) a", "Twitter");
    test.assertSelectorHasText("body .sidebar ul:first-child li:nth-child(5) a", "Blog");
    test.assertSelectorHasText("body .sidebar ul:first-child li:nth-child(6) a", "Medium");

    test.assertExists("body .sidebar ul:first-child li:nth-child(1) a[href='/']");
    test.assertExists("body .sidebar ul:first-child li:nth-child(2) a[href='/about.html']");
    test.assertExists("body .sidebar ul:first-child li:nth-child(3) a[href='https://github.com/singuerinc']");
    test.assertExists("body .sidebar ul:first-child li:nth-child(4) a[href='https://twitter.com/singuerinc']");
    test.assertExists("body .sidebar ul:first-child li:nth-child(5) a[href='https://blog.singuerinc.com']");
    test.assertExists("body .sidebar ul:first-child li:nth-child(6) a[href='https://medium.com/@singuerinc']");

    // sidebar - mobile - links
    test.assertExists("body .sidebar.mobile ul");
    // home, about, github, twitter, blog, medium
    test.assertElementCount("body .sidebar.mobile ul li", 6);
    test.assertSelectorHasText("body .sidebar.mobile ul li:nth-child(1) a", "Home");
    test.assertSelectorHasText("body .sidebar.mobile ul li:nth-child(2) a", "About");
    test.assertSelectorHasText("body .sidebar.mobile ul li:nth-child(3) a", "GitHub");
    test.assertSelectorHasText("body .sidebar.mobile ul li:nth-child(4) a", "Twitter");
    test.assertSelectorHasText("body .sidebar.mobile ul li:nth-child(5) a", "Blog");
    test.assertSelectorHasText("body .sidebar.mobile ul li:nth-child(6) a", "Medium");

    test.assertExists("body .sidebar.mobile ul li:nth-child(1) a[href='/']");
    test.assertExists("body .sidebar.mobile ul li:nth-child(2) a[href='/about.html']");
    test.assertExists("body .sidebar.mobile ul li:nth-child(3) a[href='https://github.com/singuerinc']");
    test.assertExists("body .sidebar.mobile ul li:nth-child(4) a[href='https://twitter.com/singuerinc']");
    test.assertExists("body .sidebar.mobile ul li:nth-child(5) a[href='https://blog.singuerinc.com']");
    test.assertExists("body .sidebar.mobile ul li:nth-child(6) a[href='https://medium.com/@singuerinc']");

    // posts
    test.assertExists("body .content ul.posts");
    test.assertElementCount("body .content ul.posts li", 21);
    test.assertElementCount("body .content ul.posts li#zalando_ivy-park", 1);
    test.assertElementCount("body .content ul.posts li#b-reel_b-reel", 1);
    test.assertElementCount("body .content ul.posts li#arawys_store", 1);
    test.assertElementCount("body .content ul.posts li#htc-google_vive", 1);
    test.assertElementCount("body .content ul.posts li#facebook_moments", 1);
    test.assertElementCount("body .content ul.posts li#singuerinc_overlay", 1);
    test.assertElementCount("body .content ul.posts li#skoda_byggd-för-att-ta-skit", 1);
    test.assertElementCount("body .content ul.posts li#google_kick-with-chrome", 1);
    test.assertElementCount("body .content ul.posts li#kit-appétit_store", 1);
    test.assertElementCount("body .content ul.posts li#médecins-du-monde_names-not-numbers", 1);
    test.assertElementCount("body .content ul.posts li#roberto-ivan-cano_portfolio", 1);
    test.assertElementCount("body .content ul.posts li#cuchi-cuchi_guardería", 1);
    test.assertElementCount("body .content ul.posts li#pepe-jeans_store", 1);
    test.assertElementCount("body .content ul.posts li#nike_pro-combat", 1);
    test.assertElementCount("body .content ul.posts li#nike_my-time-is-now", 1);
    test.assertElementCount("body .content ul.posts li#audi_a1-me-gusta", 1);
    test.assertElementCount("body .content ul.posts li#fc-barcelona_som-un", 1);
    test.assertElementCount("body .content ul.posts li#atrápalo_revívelo", 1);
    test.assertElementCount("body .content ul.posts li#evax_adapt", 1);
    test.assertElementCount("body .content ul.posts li#audi_driving-experience", 1);
    test.assertElementCount("body .content ul.posts li#evax_estudio-risa", 1);
  })
    .thenOpen("http://jekyll:4000/random-no-existing-page.html", function () {
      test.assertHttpStatus(404);
    })
    .thenOpen("http://jekyll:4000/404.html", function () {
      test.assertHttpStatus(200);
      test.assertExists("body .content.container");
      test.assertExists("body .content.container h1");
      test.assertSelectorHasText("body .content.container h1", "404: Page not found");
    })
    .thenOpen("http://jekyll:4000/about.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("body .content.container");
      test.assertExists("body .content.container p img");
      test.assertSelectorHasText("body .content.container h1", "I’m Nahuel Scotti. This is my portfolio.");
      test.assertExists("body .content.container blockquote");
      test.assertSelectorHasText("body .content.container blockquote p", "Disclaimer");
    })
    .thenOpen("http://jekyll:4000/b-reel/zalando-ivy-park.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("body.project-page");
      test.assertExists("body.project-page .content h1");
      test.assertExists("body.project-page .content img.image");
      test.assertExists("body.project-page .content .project-content p");
      test.assertSelectorHasText(".content h1", "Zalando · Ivy Park");
      test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Zalando");
      test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "B-REEL");
      test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='https://singuerinc-b-reel.gitlab.io/com.zalando.ivypark/en_gb/']");
      test.assertExists(".info tr:nth-child(5) td:nth-child(2) a[href='https://www.b-reel.com/projects/ivy-park']");
      test.assertExists(".related-post");
      test.assertElementCount(".related-post li", 6);
    })
    .thenOpen("http://jekyll:4000/b-reel/b-reel-b-reel.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("body.project-page");
      test.assertExists("body.project-page .content h1");
      test.assertExists("body.project-page .content img.image");
      test.assertExists("body.project-page .content .project-content p");
      test.assertSelectorHasText(".content h1", "B-REEL");
      test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "B-REEL");
      test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "B-REEL");
      test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='https://www.b-reel.com/']");
      test.assertElementCount(".related-post li", 6);
    })
    .thenOpen("http://jekyll:4000/singuerinc/arawys-store.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("body.project-page");
      test.assertExists("body.project-page .content h1");
      test.assertExists("body.project-page .content img.image");
      test.assertExists("body.project-page .content .project-content p");
      test.assertSelectorHasText(".content h1", "Arawys · Store");
      test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Arawys");
      test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "singuerinc");
      test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='https://www.arawys.com']");
      test.assertElementCount(".related-post li", 4);
    })
    .thenOpen("http://jekyll:4000/b-reel/htc-vive.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("body.project-page");
      test.assertExists("body.project-page .content h1");
      test.assertExists("body.project-page .content img.image");
      test.assertExists("body.project-page .content .project-content p");
      test.assertSelectorHasText(".content h1", "HTC Google · Vive");
      test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "HTC Google");
      test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "B-REEL");
      test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='https://www.b-reel.com/projects/htc-vive']");
      test.assertExists(".info tr:nth-child(6) td:nth-child(2) .award.award-awwwards_site_of_the_day");
      test.assertExists(".info tr:nth-child(6) td:nth-child(2) .award.thefwa_site_of_the_day");
      test.assertElementCount(".related-post li", 6);
    })
    .thenOpen("http://jekyll:4000/b-reel/facebook-moments.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("body.project-page");
      test.assertExists("body.project-page .content h1");
      test.assertExists("body.project-page .content img.image");
      test.assertExists("body.project-page .content .project-content p");
      test.assertSelectorHasText(".content h1", "Facebook · Moments");
      test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Facebook");
      test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "B-REEL");
      test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='http://www.momentsapp.com']");
      test.assertExists(".info tr:nth-child(5) td:nth-child(2) a[href='https://singuerinc-b-reel.gitlab.io/com.facebook.moments/']");
      test.assertElementCount(".related-post li", 6);
    })
    .thenOpen("http://jekyll:4000/singuerinc/singuerinc-overlay-app.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("body.project-page");
      test.assertExists("body.project-page .content h1");
      test.assertExists("body.project-page .content img.image");
      test.assertExists("body.project-page .content .project-content p");
      test.assertSelectorHasText(".content h1", "singuerinc · Overlay");
      test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "singuerinc");
      test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "singuerinc");
      test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='https://github.com/singuerinc/OverlayApp']");
      test.assertElementCount(".related-post li", 4);
    })
    .thenOpen("http://jekyll:4000/b-reel/skoda-byggd-for-at-tta-skit.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
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
      test.assertElementCount(".related-post li", 6);
    })
    .thenOpen("http://jekyll:4000/b-reel/kick-with-chrome.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
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
      test.assertElementCount(".related-post li", 6);
    })
    .thenOpen("http://jekyll:4000/singuerinc/kit-appetit.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("body.project-page");
      test.assertExists("body.project-page .content h1");
      test.assertExists("body.project-page .content img.image");
      test.assertSelectorHasText(".content h1", "Kit Appétit");
      test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Kit Appétit");
      test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "singuerinc");
      test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='http://www.kitappetit.com/']");
      test.assertElementCount(".related-post li", 4);
    })
    .thenOpen("http://jekyll:4000/b-reel/names-not-numbers.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
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
      test.assertElementCount(".related-post li", 6);
    })
    .thenOpen("http://jekyll:4000/singuerinc/roberto-ivan-cano.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("body.project-page");
      test.assertExists("body.project-page .content h1");
      test.assertExists("body.project-page .content img.image");
      test.assertSelectorHasText(".content h1", "Roberto Ivan Cano · Portfolio");
      test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Roberto Ivan Cano");
      test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "small-machine");
      test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='http://www.robertoivancano.com/']");
      test.assertElementCount(".related-post li", 4);
    })
    .thenOpen("http://jekyll:4000/singuerinc/cuchi-cuchi.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("body.project-page");
      test.assertExists("body.project-page .content h1");
      test.assertExists("body.project-page .content img.image");
      test.assertSelectorHasText(".content h1", "Cuchi-Cuchi · Guardería");
      test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Cuchi-Cuchi");
      test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "small-machine");
      test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='http://www.cuchicuchi-guarderia.es/']");
      test.assertElementCount(".related-post li", 4);
    })
    .thenOpen("http://jekyll:4000/doubleyou/pepe-jeans.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("body.project-page");
      test.assertExists("body.project-page .content h1");
      test.assertExists("body.project-page .content img.image");
      test.assertSelectorHasText(".content h1", "Pepe Jeans · Store");
      test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Pepe Jeans");
      test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "Doubleyou");
      test.assertElementCount(".related-post li", 8);
    })
    .thenOpen("http://jekyll:4000/doubleyou/nike-pro-combat.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("body.project-page");
      test.assertExists("body.project-page .content h1");
      test.assertExists("body.project-page .content img.image");
      test.assertSelectorHasText(".content h1", "Nike · Pro Combat");
      test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Nike");
      test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "Doubleyou");
      test.assertElementCount(".related-post li", 8);
    })
    .thenOpen("http://jekyll:4000/doubleyou/audi-a1-me-gusta.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("body.project-page");
      test.assertExists("body.project-page .content h1");
      test.assertExists("body.project-page .content img.image");
      test.assertSelectorHasText(".content h1", "Audi · A1 Me gusta");
      test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Audi");
      test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "Doubleyou");
      test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='https://audia1megusta-p1singuerinc.rhcloud.com/']");
      test.assertElementCount(".related-post li", 8);
    })
    .thenOpen("http://jekyll:4000/doubleyou/fcb-somos-uno.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("body.project-page");
      test.assertExists("body.project-page .content h1");
      test.assertExists("body.project-page .content img.image");
      test.assertSelectorHasText(".content h1", "FC Barcelona · Som un");
      test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "FC Barcelona");
      test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "Doubleyou");
      test.assertExists("body.project-page .content .project-content.no-columns");
      test.assertExists("body.project-page .content .project-content .video-wrapper");
      test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='https://singuerinc-doubleyou.gitlab.io/com.nike.somun/']");
      test.assertExists(".info tr:nth-child(6) td:nth-child(2) .award.award-sol_bronce");
      test.assertElementCount(".related-post li", 8);
    })
    .thenOpen("http://jekyll:4000/doubleyou/atrapalo-revivelo.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("body.project-page");
      test.assertExists("body.project-page .content h1");
      test.assertExists("body.project-page .content img.image");
      test.assertExists("body.project-page .content .project-content.no-columns");
      test.assertExists("body.project-page .content .project-content p");
      test.assertExists("body.project-page .content .project-content .video-wrapper");
      test.assertSelectorHasText(".content h1", "Atrápalo · Revívelo");
      test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Atrápalo");
      test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "Doubleyou");
      test.assertExists(".info tr:nth-child(5) td:nth-child(2) .award.award-sol_plata");
      test.assertExists(".info tr:nth-child(5) td:nth-child(2) .award.award-laus");
      test.assertExists(".info tr:nth-child(5) td:nth-child(2) .award.award-efi");
      test.assertElementCount(".related-post li", 8);
    })
    .thenOpen("http://jekyll:4000/doubleyou/exax-adapt.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("body.project-page");
      test.assertExists("body.project-page .content h1");
      test.assertExists("body.project-page .content img.image");
      test.assertExists("body.project-page .content .project-content.no-columns");
      test.assertExists("body.project-page .content .project-content .video-wrapper");
      test.assertSelectorHasText(".content h1", "Evax · Adapt");
      test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Evax");
      test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "Doubleyou");
      test.assertElementCount(".related-post li", 8);
    })
    .thenOpen("http://jekyll:4000/doubleyou/audi-driving-experience.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("body.project-page");
      test.assertExists("body.project-page .content h1");
      test.assertExists("body.project-page .content img.image");
      test.assertSelectorHasText(".content h1", "Audi · Driving Experience");
      test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Audi");
      test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "Doubleyou");
      test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='https://singuerinc-doubleyou.gitlab.io/es.audi.drivingexperience/']");
      test.assertElementCount(".related-post li", 8);
    })
    .thenOpen("http://jekyll:4000/doubleyou/evax-estudio-risa.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("body.project-page");
      test.assertExists("body.project-page .content h1");
      test.assertExists("body.project-page .content img.image");
      test.assertSelectorHasText(".content h1", "Evax · Estudio Risa");
      test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", "Evax");
      test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", "Doubleyou");
      test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='https://singuerinc-doubleyou.gitlab.io/es.evax.estudios/']");
      test.assertElementCount(".related-post li", 8);
    })
    .run(function () {
      test.done();
    });
});
