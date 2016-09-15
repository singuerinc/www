const testAll = function (test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image) {
  test.assertHttpStatus(200);
  test.assertExists("link[rel='canonical'][href='https://www.singuerinc.com" + canonical + "']");

  test.assertExists("meta[property='og:title'][content='Nahuel Scotti - Portfolio: " + clientAndTitle + "']");
  test.assertExists("meta[property='og:description'][content='Developer. Currently working at NetEnt, Stockholm - Sweden.']");
  test.assertExists("meta[property='og:url'][content='https://www.singuerinc.com" + canonical + "']");
  test.assertExists("meta[property='og:image'][content='https://www.singuerinc.com/img/home/" + image + ".jpg']");
  test.assertExists("meta[property='og:image:width'][content='816']");
  test.assertExists("meta[property='og:image:height'][content='386']");
  test.assertExists("meta[name='twitter:title'][content='Nahuel Scotti - Portfolio: " + clientAndTitle + "']");
  test.assertExists("meta[name='twitter:description'][content='Developer. Currently working at NetEnt, Stockholm - Sweden.']");
  test.assertExists("meta[name='twitter:image'][content='https://www.singuerinc.com/img/home/" + image + ".jpg']");

  test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
  test.assertExists("body.project-page");
  test.assertExists("body.project-page .content h1");
  test.assertExists("body.project-page .content img.image");
  test.assertExists("body.project-page .content .project-content p");
  test.assertSelectorHasText(".content h1", clientAndTitle);
  test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(2)", client);
  test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", agency);
  if (website !== null) {
    test.assertExists(".info tr:nth-child(4) td:nth-child(2) a[href='" + website + "']");
  }
  if (more !== null) {
    test.assertExists(".info tr:nth-child(5) td:nth-child(2) a[href='" + more + "']");
  }
  test.assertExists(".related-post");
  test.assertSelectorHasText(".related-title", "Related");
  test.assertElementCount(".related-post li", relatedCount);
  test.assertSelectorHasText(".share-title", "Share");
  test.assertExists(".share-post");
  test.assertElementCount(".share-post li", shareCount);
  test.assertExists(".share-post li:nth-child(1) a[href='https://twitter.com/intent/tweet?text=" + encodeURI("Nahuel Scotti - Portfolio: " + clientAndTitle) + "&url=https://www.singuerinc.com" + canonical + "&via=singuerinc']");
  test.assertExists(".share-post li:nth-child(2) a[href='https://www.facebook.com/sharer/sharer.php?u=https://www.singuerinc.com" + canonical + "']");
  test.assertExists(".share-post li:nth-child(3) a[href='https://plus.google.com/share?url=https://www.singuerinc.com" + canonical + "']");
};

casper.test.begin("Test", 747, function suite(test) {
  casper.start("http://jekyll:4000/index.html", function () {
    test.assertHttpStatus(200);
    test.assertResourceExists("assets/bundle.js");
    test.assertResourceExists("https://www.google-analytics.com/analytics.js");
    test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
    test.assertExists("link[rel='canonical'][href='https://www.singuerinc.com/']");

    // metas
    test.assertExists("meta[property='fb:app_id'][content='1253343308017588']");
    test.assertExists("meta[property='fb:admins'][content='nahuel.scotti']");
    test.assertExists("meta[property='og:site_name'][content='Nahuel Scotti - Portfolio']");
    test.assertExists("meta[property='og:title'][content='Nahuel Scotti - Portfolio']");
    test.assertExists("meta[property='og:description'][content='Developer. Currently working at NetEnt, Stockholm - Sweden.']");
    test.assertExists("meta[property='og:type'][content='website']");
    test.assertExists("meta[property='og:url'][content='https://www.singuerinc.com/']");
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
    test.assertExists("body .content .preamble");
    test.assertElementCount("body .content .preamble", 1);

    // sidebar
    test.assertExists("body .sidebar");
    test.assertElementCount("body .sidebar", 1);
    test.assertExists("body .sidebar-mobile");
    test.assertElementCount("body .sidebar-mobile", 1);

    // sidebar - title
    test.assertExists("body .sidebar header");
    test.assertElementCount("body .sidebar header", 1);
    test.assertExists("body .sidebar header a");
    test.assertSelectorHasText("body .sidebar header a", "@singuerinc");
    test.assertExists("body .sidebar header a[href='/']", "@singuerinc");

    // sidebar - desktop - links
    test.assertExists("body .sidebar ul");
    // home, about, github, twitter, blog, medium
    test.assertElementCount("body .sidebar nav ul:first-child li", 6);
    test.assertSelectorHasText("body .sidebar nav ul:first-child li:nth-child(1) a", "Home");
    test.assertSelectorHasText("body .sidebar nav ul:first-child li:nth-child(2) a", "About");
    test.assertSelectorHasText("body .sidebar nav ul:first-child li:nth-child(3) a", "GitHub");
    test.assertSelectorHasText("body .sidebar nav ul:first-child li:nth-child(4) a", "Twitter");
    test.assertSelectorHasText("body .sidebar nav ul:first-child li:nth-child(5) a", "Blog");
    test.assertSelectorHasText("body .sidebar nav ul:first-child li:nth-child(6) a", "Medium");

    test.assertExists("body .sidebar nav ul:first-child li:nth-child(1) a[href='/']");
    test.assertExists("body .sidebar nav ul:first-child li:nth-child(2) a[href='/about.html']");
    test.assertExists("body .sidebar nav ul:first-child li:nth-child(3) a[href='https://github.com/singuerinc']");
    test.assertExists("body .sidebar nav ul:first-child li:nth-child(4) a[href='https://twitter.com/singuerinc']");
    test.assertExists("body .sidebar nav ul:first-child li:nth-child(5) a[href='https://blog.singuerinc.com']");
    test.assertExists("body .sidebar nav ul:first-child li:nth-child(6) a[href='https://medium.com/@singuerinc']");

    // sidebar - mobile - links
    test.assertExists("body .sidebar-mobile ul");
    // home, about, github, twitter, blog, medium
    test.assertElementCount("body .sidebar-mobile ul li", 6);
    test.assertSelectorHasText("body .sidebar-mobile ul li:nth-child(1) a", "Home");
    test.assertSelectorHasText("body .sidebar-mobile ul li:nth-child(2) a", "About");
    test.assertSelectorHasText("body .sidebar-mobile ul li:nth-child(3) a", "GitHub");
    test.assertSelectorHasText("body .sidebar-mobile ul li:nth-child(4) a", "Twitter");
    test.assertSelectorHasText("body .sidebar-mobile ul li:nth-child(5) a", "Blog");
    test.assertSelectorHasText("body .sidebar-mobile ul li:nth-child(6) a", "Medium");

    test.assertExists("body .sidebar-mobile ul li:nth-child(1) a[href='/']");
    test.assertExists("body .sidebar-mobile ul li:nth-child(2) a[href='/about.html']");
    test.assertExists("body .sidebar-mobile ul li:nth-child(3) a[href='https://github.com/singuerinc']");
    test.assertExists("body .sidebar-mobile ul li:nth-child(4) a[href='https://twitter.com/singuerinc']");
    test.assertExists("body .sidebar-mobile ul li:nth-child(5) a[href='https://blog.singuerinc.com']");
    test.assertExists("body .sidebar-mobile ul li:nth-child(6) a[href='https://medium.com/@singuerinc']");

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
    test.assertElementCount("body .content ul.posts li#roberto-iván-cano_portfolio", 1);
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

      test.assertHttpStatus(200);
      // FIXME: test.assertResourceExists("https://www.google-analytics.com/analytics.js");
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("link[rel='canonical'][href='https://www.singuerinc.com/404.html']");
      test.assertExists("meta[property='fb:app_id'][content='1253343308017588']");
      test.assertExists("meta[property='fb:admins'][content='nahuel.scotti']");
      test.assertExists("meta[property='og:site_name'][content='Nahuel Scotti - Portfolio']");
      test.assertExists("meta[property='og:title'][content='Nahuel Scotti - Portfolio']");
      test.assertExists("meta[property='og:description'][content='Developer. Currently working at NetEnt, Stockholm - Sweden.']");
      test.assertExists("meta[property='og:type'][content='website']");
      test.assertExists("meta[property='og:url'][content='https://www.singuerinc.com/404.html']");
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
      var client = "Zalando",
        title = "Ivy Park",
        clientAndTitle = "Zalando · Ivy Park",
        agency = "B-REEL",
        canonical = "/b-reel/zalando-ivy-park.html",
        website = "https://singuerinc-b-reel.gitlab.io/com.zalando.ivypark/en_gb/",
        more = "https://www.b-reel.com/projects/ivy-park",
        relatedCount = 6,
        shareCount = 3,
        image = "zalando--ivy-park";

      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .thenOpen("http://jekyll:4000/b-reel/b-reel-b-reel.html", function () {
      var client = "B-REEL",
        title = "B-REEL",
        clientAndTitle = "B-REEL",
        agency = "B-REEL",
        canonical = "/b-reel/b-reel-b-reel.html",
        website = "https://www.b-reel.com/",
        more = null,
        relatedCount = 6,
        shareCount = 3,
        image = "b-reel--b-reel";

      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .thenOpen("http://jekyll:4000/singuerinc/arawys-store.html", function () {
      var client = "Arawys",
        title = "Store",
        clientAndTitle = "Arawys · Store",
        agency = "singuerinc",
        canonical = "/singuerinc/arawys-store.html",
        website = "https://www.arawys.com",
        more = null,
        relatedCount = 4,
        shareCount = 3,
        image = "arawys--store";

      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .thenOpen("http://jekyll:4000/b-reel/htc-vive.html", function () {
      var client = "HTC Google",
        title = "Vive",
        clientAndTitle = "HTC Google · Vive",
        agency = "B-REEL",
        canonical = "/b-reel/htc-vive.html",
        website = "https://www.b-reel.com/projects/htc-vive",
        more = null,
        relatedCount = 6,
        shareCount = 3,
        image = "htc--vive";

      test.assertExists(".info tr:nth-child(6) td:nth-child(2) .award.award-awwwards_site_of_the_day");
      test.assertExists(".info tr:nth-child(6) td:nth-child(2) .award.thefwa_site_of_the_day");
      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .thenOpen("http://jekyll:4000/b-reel/facebook-moments.html", function () {
      var client = "Facebook",
        title = "Moments",
        clientAndTitle = "Facebook · Moments",
        agency = "B-REEL",
        canonical = "/b-reel/facebook-moments.html",
        website = "http://www.momentsapp.com",
        more = "https://singuerinc-b-reel.gitlab.io/com.facebook.moments/",
        relatedCount = 6,
        shareCount = 3,
        image = "facebook--moments";

      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .thenOpen("http://jekyll:4000/singuerinc/singuerinc-overlay-app.html", function () {
      var client = "singuerinc",
        title = "Overlay",
        clientAndTitle = "singuerinc · Overlay",
        agency = "singuerinc",
        canonical = "/singuerinc/singuerinc-overlay-app.html",
        website = "https://github.com/singuerinc/OverlayApp",
        more = null,
        relatedCount = 4,
        shareCount = 3,
        image = "singuerinc--overlay-app";

      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .thenOpen("http://jekyll:4000/b-reel/skoda-byggd-for-at-tta-skit.html", function () {
      var client = "Skoda",
        title = "Byggd för att ta skit",
        clientAndTitle = "Skoda · Byggd för att ta skit",
        agency = "B-REEL",
        canonical = "/b-reel/skoda-byggd-for-at-tta-skit.html",
        website = "https://singuerinc-b-reel.gitlab.io/se.byggdforatttaskit.www/",
        more = "http://www.b-reelfilms.com/projects/commercials/director/patrik-gyllstrom/case/686/skoda/",
        relatedCount = 6,
        shareCount = 3,
        image = "skoda--byggd-for-att-ta-skit";

      test.assertExists("body.project-page .content .project-content.no-columns");
      test.assertExists("body.project-page .content .project-content .video-wrapper");
      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .thenOpen("http://jekyll:4000/b-reel/kick-with-chrome.html", function () {
      var client = "Google",
        title = "Kick with Chrome",
        clientAndTitle = "Google · Kick with Chrome",
        agency = "B-REEL",
        canonical = "/b-reel/kick-with-chrome.html",
        website = "https://www.chromeexperiments.com/experiment/kick-with-chrome",
        more = "http://www.b-reelfilms.com/projects/digital/case/641/kick-with-chrome/",
        relatedCount = 6,
        shareCount = 3,
        image = "google--kick-with-chrome";

      test.assertExists("body.project-page .content .project-content.no-columns");
      test.assertExists("body.project-page .content .project-content .video-wrapper");
      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .thenOpen("http://jekyll:4000/singuerinc/kit-appetit.html", function () {
      var client = "Kit Appétit",
        title = "Store",
        clientAndTitle = "Kit Appétit · Store",
        agency = "singuerinc",
        canonical = "/singuerinc/kit-appetit.html",
        website = "http://www.kitappetit.com/",
        more = null,
        relatedCount = 4,
        shareCount = 3,
        image = "kitappetit--kitappetit";

      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .thenOpen("http://jekyll:4000/b-reel/names-not-numbers.html", function () {
      var client = "Médecins du Monde",
        title = "Names not numbers",
        clientAndTitle = "Médecins du Monde · Names not numbers",
        agency = "B-REEL",
        canonical = "/b-reel/names-not-numbers.html",
        website = "https://singuerinc-b-reel.gitlab.io/org.names-not-numbers.www/en_int/",
        more = "http://www.b-reelfilms.com/projects/digital/case/577/medecins-du-monde/",
        relatedCount = 6,
        shareCount = 3,
        image = "medecins-du-monde--names-not-numbers";

      test.assertExists("body.project-page .content .project-content.no-columns");
      test.assertExists("body.project-page .content .project-content .video-wrapper");
      test.assertExists(".info tr:nth-child(7) td:nth-child(2) .award.award-awwwards_site_of_the_day");
      test.assertExists(".info tr:nth-child(7) td:nth-child(2) .award.thefwa_site_of_the_day");
      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .thenOpen("http://jekyll:4000/singuerinc/roberto-ivan-cano.html", function () {
      var client = "Roberto Iván Cano",
        title = "Portfolio",
        clientAndTitle = "Roberto Iván Cano · Portfolio",
        agency = "small-machine",
        canonical = "/singuerinc/roberto-ivan-cano.html",
        website = "http://www.robertoivancano.com/",
        more = null,
        relatedCount = 4,
        shareCount = 3,
        image = "roberto-ivan-cano";

      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .thenOpen("http://jekyll:4000/singuerinc/cuchi-cuchi.html", function () {
      var client = "Cuchi-Cuchi",
        title = "Guardería",
        clientAndTitle = "Cuchi-Cuchi · Guardería",
        agency = "small-machine",
        canonical = "/singuerinc/cuchi-cuchi.html",
        website = "http://www.cuchicuchi-guarderia.es/",
        more = null,
        relatedCount = 4,
        shareCount = 3,
        image = "cuchi-cuchi_50";

      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .thenOpen("http://jekyll:4000/doubleyou/pepe-jeans.html", function () {
      var client = "Pepe Jeans",
        title = "Store",
        clientAndTitle = "Pepe Jeans · Store",
        agency = "Doubleyou",
        canonical = "/doubleyou/pepe-jeans.html",
        website = null,
        more = null,
        relatedCount = 8,
        shareCount = 3,
        image = "pepe-jeans_50";

      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .thenOpen("http://jekyll:4000/doubleyou/nike-pro-combat.html", function () {
      var client = "Nike",
        title = "Pro Combat",
        clientAndTitle = "Nike · Pro Combat",
        agency = "Doubleyou",
        canonical = "/doubleyou/nike-pro-combat.html",
        website = null,
        more = null,
        relatedCount = 8,
        shareCount = 3,
        image = "nike--pro-combat";

      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .thenOpen("http://jekyll:4000/doubleyou/nike-my-time-is-now.html", function () {
      var client = "Nike",
        title = "My time is now",
        clientAndTitle = "Nike · My time is now",
        agency = "Doubleyou",
        canonical = "/doubleyou/nike-my-time-is-now.html",
        website = null,
        more = null,
        relatedCount = 8,
        shareCount = 3,
        image = "nike--my-time-is-now";

      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .thenOpen("http://jekyll:4000/doubleyou/audi-a1-me-gusta.html", function () {
      var client = "Audi",
        title = "A1 Me gusta",
        clientAndTitle = "Audi · A1 Me gusta",
        agency = "Doubleyou",
        canonical = "/doubleyou/audi-a1-me-gusta.html",
        website = "https://audia1megusta-p1singuerinc.rhcloud.com/",
        more = null,
        relatedCount = 8,
        shareCount = 3,
        image = "audi--a1-me-gusta";

      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .thenOpen("http://jekyll:4000/doubleyou/fcb-somos-uno.html", function () {
      var client = "FC Barcelona",
        title = "Som un",
        clientAndTitle = "FC Barcelona · Som un",
        agency = "Doubleyou",
        canonical = "/doubleyou/fcb-somos-uno.html",
        website = "https://singuerinc-doubleyou.gitlab.io/com.nike.somun/",
        more = null,
        relatedCount = 8,
        shareCount = 3,
        image = "fcb--somos-uno";

      test.assertExists("body.project-page .content .project-content.no-columns");
      test.assertExists("body.project-page .content .project-content .video-wrapper");
      test.assertExists(".info tr:nth-child(6) td:nth-child(2) .award.award-sol_bronce");
      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .thenOpen("http://jekyll:4000/doubleyou/atrapalo-revivelo.html", function () {
      var client = "Atrápalo",
        title = "Revívelo",
        clientAndTitle = "Atrápalo · Revívelo",
        agency = "Doubleyou",
        canonical = "/doubleyou/atrapalo-revivelo.html",
        website = null,
        more = null,
        relatedCount = 8,
        shareCount = 3,
        image = "atrapalo--revivelo";

      test.assertExists("body.project-page .content .project-content.no-columns");
      test.assertExists("body.project-page .content .project-content .video-wrapper");
      test.assertExists(".info tr:nth-child(5) td:nth-child(2) .award.award-sol_plata");
      test.assertExists(".info tr:nth-child(5) td:nth-child(2) .award.award-laus");
      test.assertExists(".info tr:nth-child(5) td:nth-child(2) .award.award-efi");
      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .thenOpen("http://jekyll:4000/doubleyou/exax-adapt.html", function () {
      var client = "Evax",
        title = "Adapt",
        clientAndTitle = "Evax · Adapt",
        agency = "Doubleyou",
        canonical = "/doubleyou/exax-adapt.html",
        website = null,
        more = null,
        relatedCount = 8,
        shareCount = 3,
        image = "evax--adapt";

      test.assertExists("body.project-page .content .project-content.no-columns");
      test.assertExists("body.project-page .content .project-content .video-wrapper");
      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .thenOpen("http://jekyll:4000/doubleyou/audi-driving-experience.html", function () {
      var client = "Audi",
        title = "Driving Experience",
        clientAndTitle = "Audi · Driving Experience",
        agency = "Doubleyou",
        canonical = "/doubleyou/audi-driving-experience.html",
        website = null,
        more = null,
        relatedCount = 8,
        shareCount = 3,
        image = "audi--driving-experience";

      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .thenOpen("http://jekyll:4000/doubleyou/evax-estudio-risa.html", function () {
      var client = "Evax",
        title = "Estudio Risa",
        clientAndTitle = "Evax · Estudio Risa",
        agency = "Doubleyou",
        canonical = "/doubleyou/evax-estudio-risa.html",
        website = "https://singuerinc-doubleyou.gitlab.io/es.evax.estudios/",
        more = null,
        relatedCount = 8,
        shareCount = 3,
        image = "evax--estudio-risa";

      testAll(test, client, title, clientAndTitle, agency, canonical, website, more, relatedCount, shareCount, image);
    })
    .run(function () {
      test.done();
    });
});
