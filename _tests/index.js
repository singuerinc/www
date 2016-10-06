const TOTAL_TESTS = 1528;
const projects = [
  {
    id: "zalando_ivy-park",
    role: "Client/Backend Developer",
    client: "Zalando",
    title: "Ivy Park",
    clientAndTitle: "Zalando · Ivy Park",
    agency: "B-REEL",
    canonical: "/b-reel/zalando-ivy-park.html",
    website: "https://singuerinc-b-reel.gitlab.io/com.zalando.ivypark/en_gb/",
    more: "https://www.b-reel.com/projects/ivy-park",
    relatedCount: 6,
    shareCount: 3,
    image: "zalando--ivy-park"
  },
  {
    id: "b-reel_b-reel",
    role: "Client/Backend Developer",
    client: "B-REEL",
    title: "B-REEL",
    clientAndTitle: "B-REEL",
    agency: "B-REEL",
    canonical: "/b-reel/b-reel-b-reel.html",
    website: "https://www.b-reel.com/",
    more: null,
    relatedCount: 6,
    shareCount: 3,
    image: "b-reel--b-reel"
  },
  {
    id: "arawys_store",
    role: "Lead Developer",
    client: "Arawys",
    title: "Store",
    clientAndTitle: "Arawys · Store",
    agency: "singuerinc",
    canonical: "/singuerinc/arawys-store.html",
    website: "https://www.arawys.com",
    more: null,
    relatedCount: 4,
    shareCount: 3,
    image: "arawys--store"
  },
  {
    id: "htc-google_vive",
    role: "Architect/Backend Developer",
    client: "HTC Google",
    title: "Vive",
    clientAndTitle: "HTC Google · Vive",
    agency: "B-REEL",
    canonical: "/b-reel/htc-vive.html",
    website: "https://www.b-reel.com/projects/htc-vive",
    more: null,
    relatedCount: 6,
    shareCount: 3,
    image: "htc--vive"
  },
  {
    id: "facebook_moments",
    role: "Lead Developer",
    client: "Facebook",
    title: "Moments",
    clientAndTitle: "Facebook · Moments",
    agency: "B-REEL",
    canonical: "/b-reel/facebook-moments.html",
    website: "http://www.momentsapp.com",
    more: "https://singuerinc-b-reel.gitlab.io/com.facebook.moments/",
    relatedCount: 6,
    shareCount: 3,
    image: "facebook--moments"
  },
  {
    id: "singuerinc_overlay",
    role: "Developer",
    client: "singuerinc",
    title: "Overlay",
    clientAndTitle: "singuerinc · Overlay",
    agency: "singuerinc",
    canonical: "/singuerinc/singuerinc-overlay-app.html",
    website: "https://github.com/singuerinc/OverlayApp",
    more: null,
    relatedCount: 4,
    shareCount: 3,
    image: "singuerinc--overlay-app"
  },
  {
    id: "skoda_byggd-för-att-ta-skit",
    role: "Client/Backend Developer",
    client: "Skoda",
    title: "Byggd för att ta skit",
    clientAndTitle: "Skoda · Byggd för att ta skit",
    agency: "B-REEL",
    canonical: "/b-reel/skoda-byggd-for-at-tta-skit.html",
    website: "https://singuerinc-b-reel.gitlab.io/se.byggdforatttaskit.www/",
    more: "http://www.b-reelfilms.com/projects/commercials/director/patrik-gyllstrom/case/686/skoda/",
    relatedCount: 6,
    shareCount: 3,
    image: "skoda--byggd-for-att-ta-skit"
  },
  {
    id: "google_kick-with-chrome",
    role: "Client/Backend Developer",
    client: "Google",
    title: "Kick with Chrome",
    clientAndTitle: "Google · Kick with Chrome",
    agency: "B-REEL",
    canonical: "/b-reel/kick-with-chrome.html",
    website: "https://www.chromeexperiments.com/experiment/kick-with-chrome",
    more: "http://www.b-reelfilms.com/projects/digital/case/641/kick-with-chrome/",
    relatedCount: 6,
    shareCount: 3,
    image: "google--kick-with-chrome"
  },
  {
    id: "kit-appétit_store",
    role: "Tech Lead Developer",
    client: "Kit Appétit",
    title: "Store",
    clientAndTitle: "Kit Appétit · Store",
    agency: "singuerinc",
    canonical: "/singuerinc/kit-appetit.html",
    website: "http://www.kitappetit.com/",
    more: null,
    relatedCount: 4,
    shareCount: 3,
    image: "kitappetit--kitappetit"
  },
  {
    id: "médecins-du-monde_names-not-numbers",
    role: "Lead Developer",
    client: "Médecins du Monde",
    title: "Names not numbers",
    clientAndTitle: "Médecins du Monde · Names not numbers",
    agency: "B-REEL",
    canonical: "/b-reel/names-not-numbers.html",
    website: "https://singuerinc-b-reel.gitlab.io/org.names-not-numbers.www/en_int/",
    more: "http://www.b-reelfilms.com/projects/digital/case/577/medecins-du-monde/",
    relatedCount: 6,
    shareCount: 3,
    image: "medecins-du-monde--names-not-numbers"
  },
  {
    id: "roberto-iván-cano_portfolio",
    role: "Tech Lead Developer / Graphic Designer",
    client: "Roberto Iván Cano",
    title: "Portfolio",
    clientAndTitle: "Roberto Iván Cano · Portfolio",
    agency: "small-machine",
    canonical: "/singuerinc/roberto-ivan-cano.html",
    website: "http://www.robertoivancano.com/",
    more: null,
    relatedCount: 4,
    shareCount: 3,
    image: "roberto-ivan-cano"
  },
  {
    id: "cuchi-cuchi_guardería",
    role: "Client Developer",
    client: "Cuchi-Cuchi",
    title: "Guardería",
    clientAndTitle: "Cuchi-Cuchi · Guardería",
    agency: "small-machine",
    canonical: "/singuerinc/cuchi-cuchi.html",
    website: "http://www.cuchicuchi-guarderia.es/",
    more: null,
    relatedCount: 4,
    shareCount: 3,
    image: "cuchi-cuchi"
  },
  {
    id: "pepe-jeans_store",
    role: "Client Developer",
    client: "Pepe Jeans",
    title: "Store",
    clientAndTitle: "Pepe Jeans · Store",
    agency: "Doubleyou",
    canonical: "/doubleyou/pepe-jeans.html",
    website: null,
    more: null,
    relatedCount: 7,
    shareCount: 3,
    image: "pepe-jeans"
  },
  {
    id: "nike_pro-combat",
    role: "Flash Developer",
    client: "Nike",
    title: "Pro Combat",
    clientAndTitle: "Nike · Pro Combat",
    agency: "Doubleyou",
    canonical: "/doubleyou/nike-pro-combat.html",
    website: null,
    more: null,
    relatedCount: 7,
    shareCount: 3,
    image: "nike--pro-combat"
  },
  {
    id: "nike_my-time-is-now",
    role: "Flash Developer",
    client: "Nike",
    title: "My time is now",
    clientAndTitle: "Nike · My time is now",
    agency: "Doubleyou",
    canonical: "/doubleyou/nike-my-time-is-now.html",
    website: null,
    more: null,
    relatedCount: 7,
    shareCount: 3,
    image: "nike--my-time-is-now"
  },
  {
    id: "audi_a1-me-gusta",
    role: "Flash Developer",
    client: "Audi",
    title: "A1 Me gusta",
    clientAndTitle: "Audi · A1 Me gusta",
    agency: "Doubleyou",
    canonical: "/doubleyou/audi-a1-me-gusta.html",
    website: "https://audia1megusta-p1singuerinc.rhcloud.com/",
    more: null,
    relatedCount: 7,
    shareCount: 3,
    image: "audi--a1-me-gusta"
  },
  {
    id: "fc-barcelona_som-un",
    role: "Flash Developer",
    client: "FC Barcelona",
    title: "Som un",
    clientAndTitle: "FC Barcelona · Som un",
    agency: "Doubleyou",
    canonical: "/doubleyou/fcb-somos-uno.html",
    website: "https://singuerinc-doubleyou.gitlab.io/com.nike.somun/",
    more: null,
    relatedCount: 7,
    shareCount: 3,
    image: "fcb--somos-uno"
  },
  {
    id: "atrápalo_revívelo",
    role: "Flash Developer",
    client: "Atrápalo",
    title: "Revívelo",
    clientAndTitle: "Atrápalo · Revívelo",
    agency: "Doubleyou",
    canonical: "/doubleyou/atrapalo-revivelo.html",
    website: null,
    more: null,
    relatedCount: 7,
    shareCount: 3,
    image: "atrapalo--revivelo"
  },
  {
    id: "audi_driving-experience",
    role: "Flash Developer",
    client: "Audi",
    title: "Driving Experience",
    clientAndTitle: "Audi · Driving Experience",
    agency: "Doubleyou",
    canonical: "/doubleyou/audi-driving-experience.html",
    website: null,
    more: null,
    relatedCount: 7,
    shareCount: 3,
    image: "audi--driving-experience"
  },
  {
    id: "evax_estudio-risa",
    role: "Flash Developer",
    client: "Evax",
    title: "Estudio Risa",
    clientAndTitle: "Evax · Estudio Risa",
    agency: "Doubleyou",
    canonical: "/doubleyou/evax-estudio-risa.html",
    website: "https://singuerinc-doubleyou.gitlab.io/es.evax.estudios/",
    more: null,
    relatedCount: 7,
    shareCount: 3,
    image: "evax--estudio-risa"
  }];

const testCommonMetas = function (test, canonical) {
  test.assertSelectorHasText("html title", "Nahuel Scotti - Portfolio");
  test.assertExists("meta[property='fb:app_id'][content='1253343308017588']");
  test.assertExists("meta[property='fb:admins'][content='nahuel.scotti']");
  test.assertExists("meta[property='og:site_name'][content='Nahuel Scotti - Portfolio']");
  test.assertExists("meta[property='og:title'][content='Nahuel Scotti - Portfolio']");
  test.assertExists("meta[property='og:description'][content='Developer. Currently working at NetEnt, Stockholm - Sweden.']");
  test.assertExists("meta[property='og:type'][content='website']");
  test.assertExists("meta[property='og:url'][content='https://www.singuerinc.com" + canonical + "']");
  test.assertExists("meta[property='og:image'][content='https://www.singuerinc.com/img/projects/zalando--ivy-park.jpg']");
  test.assertExists("meta[property='og:locale'][content='en_US']");
  test.assertExists("meta[property='og:image:type'][content='image/jpg']");
  test.assertExists("meta[property='og:image:width'][content='816']");
  test.assertExists("meta[property='og:image:height'][content='386']");
  test.assertExists("meta[name='twitter:card'][content='summary']");
  test.assertExists("meta[name='twitter:site'][content='@singuerinc']");
  test.assertExists("meta[name='twitter:title'][content='Nahuel Scotti - Portfolio']");
  test.assertExists("meta[name='twitter:description'][content='Developer. Currently working at NetEnt, Stockholm - Sweden.']");
  test.assertExists("meta[name='twitter:image'][content='https://www.singuerinc.com/img/projects/zalando--ivy-park.jpg']");
};
const testAll = function (test, project) {
  const role = project.role,
    client = project.client,
    clientAndTitle = project.clientAndTitle,
    agency = project.agency,
    canonical = project.canonical,
    website = project.website,
    more = project.more,
    relatedCount = project.relatedCount,
    shareCount = project.shareCount,
    image = project.image;

  test.assertHttpStatus(200);
  test.assertSelectorHasText("html title", "Nahuel Scotti - Portfolio / " + clientAndTitle);
  test.assertExists("link[rel='canonical'][href='https://www.singuerinc.com" + canonical + "']");
  test.assertResourceExists("img/projects/" + image + ".jpg");
  test.assertExists("meta[property='og:title'][content='" + clientAndTitle + "']");
  test.assertExists("meta[property='og:description'][content='Developer. Currently working at NetEnt, Stockholm - Sweden.']");
  test.assertExists("meta[property='og:url'][content='https://www.singuerinc.com" + canonical + "']");
  test.assertExists("meta[property='og:image'][content='https://www.singuerinc.com/img/projects/" + image + ".jpg']");
  test.assertExists("meta[property='og:image:width'][content='816']");
  test.assertExists("meta[property='og:image:height'][content='386']");
  test.assertExists("meta[name='twitter:title'][content='" + clientAndTitle + "']");
  test.assertExists("meta[name='twitter:description'][content='Developer. Currently working at NetEnt, Stockholm - Sweden.']");
  test.assertExists("meta[name='twitter:image'][content='https://www.singuerinc.com/img/projects/" + image + ".jpg']");

  test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
  test.assertExists("body.project-page");
  test.assertExists("body.project-page .content h1");
  test.assertExists("body.project-page .content img.image");
  test.assertExists("body.project-page .content .project-content p");
  test.assertSelectorHasText(".content h1", clientAndTitle);

  test.assertExists("body.project-page .content meta[itemprop='name'][content='" + clientAndTitle + "']");
  test.assertExists("body.project-page .content meta[itemprop='contributor'][content='Nahuel Scotti']");
  test.assertExists("body.project-page .content meta[itemprop='keywords']");
  test.assertExists("body.project-page .content meta[itemprop='image'][content='https://www.singuerinc.com/img/projects/" + image + ".jpg']");
  test.assertExists("body.project-page .content meta[itemprop='url'][content='https://www.singuerinc.com" + canonical + "']");

  test.assertSelectorHasText(".info tr:nth-child(1) td:nth-child(1)", "My role");
  test.assertSelectorHasText(".info tr:nth-child(1) td:nth-child(2)", role);
  test.assertSelectorHasText(".info tr:nth-child(2) td:nth-child(1)", "Date release");
  test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(1)", "Client");
  test.assertSelectorHasText(".info tr:nth-child(3) td:nth-child(2)", client);
  test.assertSelectorHasText(".info tr:nth-child(4) td:nth-child(1)", "Agency");
  test.assertSelectorHasText(".info tr:nth-child(4) td:nth-child(2)", agency);
  if (website !== null) {
    test.assertExists(".info tr:nth-child(5) td:nth-child(1)", "Website");
    test.assertExists(".info tr:nth-child(5) td:nth-child(2) a[href='" + website + "']");
  }
  if (more !== null) {
    test.assertExists(".info tr:nth-child(6) td:nth-child(1)", "More");
    test.assertExists(".info tr:nth-child(6) td:nth-child(2) a[href='" + more + "']");
  }

  if (website === null && more === null) {
    test.assertExists(".info tr:nth-child(5) td:nth-child(1)", "Tech");
  }
  else if (website === null || more === null) {
    test.assertExists(".info tr:nth-child(6) td:nth-child(1)", "Tech");
  }

  var isFirstProject = project.id === "zalando_ivy-park",
    isLastProject = project.id === "evax_estudio-risa";

  test.assertElementCount(".project-page .prev-next-project", 1);
  test.assertElementCount(".project-page .prev-next-project li", (isFirstProject || isLastProject) ? 1 : 2);
  test.assertExists(".related-post");
  test.assertSelectorHasText(".related-title", "Related");
  test.assertElementCount(".related-post li", relatedCount);
  test.assertSelectorHasText(".share-title", "Share");
  test.assertExists(".share-post");
  test.assertElementCount(".share-post li", shareCount);
  test.assertExists(".share-post li:nth-child(1) a[href='https://twitter.com/intent/tweet?text=" + encodeURI(clientAndTitle) + "&url=https://www.singuerinc.com" + canonical + "&via=singuerinc']");
  test.assertExists(".share-post li:nth-child(2) a[href='https://www.facebook.com/sharer/sharer.php?u=https://www.singuerinc.com" + canonical + "']");
  test.assertExists(".share-post li:nth-child(3) a[href='https://plus.google.com/share?url=https://www.singuerinc.com" + canonical + "']");

  test.assertExists("body .sidebar header h1 a[href='../']");
  test.assertExists("body .sidebar nav ul:first-child li:nth-child(1) a[href='../']");
  test.assertExists("body .sidebar-mobile ul li:nth-child(1) a[href='../']");
  test.assertExists("body .sidebar nav ul:first-child li:nth-child(2) a[href='../about.html']");
  test.assertExists("body .sidebar-mobile ul li:nth-child(2) a[href='../about.html']");
  test.assertExists("body .sidebar nav ul:first-child li:nth-child(7) a[href='../sitemap.html']");
  test.assertExists("body .sidebar-mobile ul li:nth-child(7) a[href='../sitemap.html']");

  test.assertElementCount("body .sidebar .social li a", 3);
  test.assertExists("body .sidebar .social li a[href='https://twitter.com/intent/tweet?url=https://www.singuerinc.com&via=singuerinc']");
  test.assertExists("body .sidebar .social li a[href='https://www.facebook.com/sharer/sharer.php?u=https://www.singuerinc.com']");
  test.assertExists("body .sidebar .social li a[href='https://plus.google.com/share?url=https://www.singuerinc.com']");
};

casper.test.begin("Test", TOTAL_TESTS, function suite(test) {
  casper.start("http://jekyll:4000/index.html", function () {
    test.assertHttpStatus(200);
    test.assertResourceExists("assets/bundle.js");
    test.assertResourceExists("all.css");
    test.assertResourceExists("https://www.google-analytics.com/analytics.js");
    test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
    test.assertExists("link[rel='canonical'][href='https://www.singuerinc.com/']");

    testCommonMetas(test, "/");

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
    test.assertExists("body .sidebar header a[href='./']", "@singuerinc");

    // sidebar - desktop - links
    test.assertExists("body .sidebar ul");
    // home, about, github, twitter, blog, medium
    test.assertElementCount("body .sidebar nav > ul:first-child > li", 8);
    test.assertSelectorHasText("body .sidebar nav ul:first-child li:nth-child(1) a", "Home");
    test.assertSelectorHasText("body .sidebar nav ul:first-child li:nth-child(2) a", "About");
    test.assertSelectorHasText("body .sidebar nav ul:first-child li:nth-child(3) a", "GitHub");
    test.assertSelectorHasText("body .sidebar nav ul:first-child li:nth-child(4) a", "Twitter");
    test.assertSelectorHasText("body .sidebar nav ul:first-child li:nth-child(5) a", "Blog");
    test.assertSelectorHasText("body .sidebar nav ul:first-child li:nth-child(6) a", "Medium");
    test.assertSelectorHasText("body .sidebar nav ul:first-child li:nth-child(7) a", "Sitemap");

    test.assertExists("body .sidebar nav ul:first-child li:nth-child(1) a[href='./']");
    test.assertExists("body .sidebar nav ul:first-child li:nth-child(2) a[href='./about.html']");
    test.assertExists("body .sidebar nav ul:first-child li:nth-child(3) a[href='https://github.com/singuerinc']");
    test.assertExists("body .sidebar nav ul:first-child li:nth-child(4) a[href='https://twitter.com/singuerinc']");
    test.assertExists("body .sidebar nav ul:first-child li:nth-child(5) a[href='https://blog.singuerinc.com']");
    test.assertExists("body .sidebar nav ul:first-child li:nth-child(6) a[href='https://medium.com/@singuerinc']");
    test.assertExists("body .sidebar nav ul:first-child li:nth-child(7) a[href='./sitemap.html']");

    test.assertElementCount("body .sidebar .social li a", 3);
    test.assertExists("body .sidebar .social li a[href='https://twitter.com/intent/tweet?url=https://www.singuerinc.com&via=singuerinc']");
    test.assertExists("body .sidebar .social li a[href='https://www.facebook.com/sharer/sharer.php?u=https://www.singuerinc.com']");
    test.assertExists("body .sidebar .social li a[href='https://plus.google.com/share?url=https://www.singuerinc.com']");

    // sidebar - mobile - links
    test.assertExists("body .sidebar-mobile ul");
    // home, about, github, twitter, blog, medium
    test.assertElementCount("body .sidebar-mobile ul li", 7);
    test.assertSelectorHasText("body .sidebar-mobile ul li:nth-child(1) a", "Home");
    test.assertSelectorHasText("body .sidebar-mobile ul li:nth-child(2) a", "About");
    test.assertSelectorHasText("body .sidebar-mobile ul li:nth-child(3) a", "GitHub");
    test.assertSelectorHasText("body .sidebar-mobile ul li:nth-child(4) a", "Twitter");
    test.assertSelectorHasText("body .sidebar-mobile ul li:nth-child(5) a", "Blog");
    test.assertSelectorHasText("body .sidebar-mobile ul li:nth-child(6) a", "Medium");
    test.assertSelectorHasText("body .sidebar-mobile ul li:nth-child(7) a", "Sitemap");

    test.assertExists("body .sidebar-mobile ul li:nth-child(1) a[href='./']");
    test.assertExists("body .sidebar-mobile ul li:nth-child(2) a[href='./about.html']");
    test.assertExists("body .sidebar-mobile ul li:nth-child(3) a[href='https://github.com/singuerinc']");
    test.assertExists("body .sidebar-mobile ul li:nth-child(4) a[href='https://twitter.com/singuerinc']");
    test.assertExists("body .sidebar-mobile ul li:nth-child(5) a[href='https://blog.singuerinc.com']");
    test.assertExists("body .sidebar-mobile ul li:nth-child(6) a[href='https://medium.com/@singuerinc']");
    test.assertExists("body .sidebar-mobile ul li:nth-child(7) a[href='./sitemap.html']");

    // posts
    test.assertExists("body .content ul.posts");
    test.assertElementCount("body .content ul.posts li", 20);
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
    test.assertElementCount("body .content ul.posts li#audi_driving-experience", 1);
    test.assertElementCount("body .content ul.posts li#evax_estudio-risa", 1);

    for (var i = 0; i < projects.length; i++) {
      var project = projects[i];

      test.assertElementCount("body .content ul.posts li#" + project.id, 1);
      test.assertExists("li#" + project.id + " meta[itemprop='name'][content='" + project.clientAndTitle + "']");
      test.assertExists("li#" + project.id + " meta[itemprop='contributor'][content='Nahuel Scotti']");
      test.assertExists("li#" + project.id + " meta[itemprop='keywords']");
      test.assertExists("li#" + project.id + " meta[itemprop='image'][content='https://www.singuerinc.com/img/projects/" + project.image + ".jpg']");
      test.assertExists("li#" + project.id + " meta[itemprop='url'][content='https://www.singuerinc.com" + project.canonical + "']");
      test.assertExists("li#" + project.id + " a[href='." + project.canonical + "'][target='_self']");
      test.assertExists("li#" + project.id + " div.post-image.animated." + project.id);
      test.assertSelectorHasText("li#" + project.id + " h3[class='w-title']", project.title);
      test.assertExists("li#" + project.id + " div[class='w-tags']");
    }
  })
    .thenOpen("http://jekyll:4000/random-no-existing-page.html", function () {
      test.assertHttpStatus(404);
    })
    .thenOpen("http://jekyll:4000/404.html", function () {
      test.assertHttpStatus(200);
      test.assertExists("body .content.container");
      test.assertExists("body .content.container .title");
      test.assertExists("body .content.container p a[href='/']");
      test.assertSelectorHasText("body .content.container .title", "404: Page not found");
      test.assertHttpStatus(200);
      // FIXME: test.assertResourceExists("https://www.google-analytics.com/analytics.js");
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("link[rel='canonical'][href='https://www.singuerinc.com/404.html']");
      testCommonMetas(test, "/404.html");
      test.assertExists("body .sidebar header h1 a[href='./']");
      test.assertExists("body .sidebar nav ul:first-child li:nth-child(1) a[href='./']");
      test.assertExists("body .sidebar-mobile ul li:nth-child(1) a[href='./']");
      test.assertExists("body .sidebar nav ul:first-child li:nth-child(2) a[href='./about.html']");
      test.assertExists("body .sidebar-mobile ul li:nth-child(2) a[href='./about.html']");
      test.assertExists("body .sidebar nav ul:first-child li:nth-child(7) a[href='./sitemap.html']");
      test.assertExists("body .sidebar-mobile ul li:nth-child(7) a[href='./sitemap.html']");
    })
    .thenOpen("http://jekyll:4000/about.html", function () {
      test.assertHttpStatus(200);
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("link[rel='canonical'][href='https://www.singuerinc.com/about.html']");
      testCommonMetas(test, "/about.html");
      test.assertExists("body .content.container");
      test.assertExists("body .content.container p img");
      test.assertSelectorHasText("body .content.container .title", "I’m Nahuel Scotti. This is my portfolio.");
      test.assertExists("body .content.container blockquote");
      test.assertSelectorHasText("body .content.container blockquote p", "Disclaimer");
      test.assertExists("body .sidebar header h1 a[href='./']");
      test.assertExists("body .sidebar nav ul:first-child li:nth-child(1) a[href='./']");
      test.assertExists("body .sidebar-mobile ul li:nth-child(1) a[href='./']");
      test.assertExists("body .sidebar nav ul:first-child li:nth-child(2) a[href='./about.html']");
      test.assertExists("body .sidebar-mobile ul li:nth-child(2) a[href='./about.html']");
      test.assertExists("body .sidebar nav ul:first-child li:nth-child(7) a[href='./sitemap.html']");
      test.assertExists("body .sidebar-mobile ul li:nth-child(7) a[href='./sitemap.html']");
      test.assertElementCount("body .sidebar .social li a", 3);
      test.assertExists("body .sidebar .social li a[href='https://twitter.com/intent/tweet?url=https://www.singuerinc.com&via=singuerinc']");
      test.assertExists("body .sidebar .social li a[href='https://www.facebook.com/sharer/sharer.php?u=https://www.singuerinc.com']");
      test.assertExists("body .sidebar .social li a[href='https://plus.google.com/share?url=https://www.singuerinc.com']");
    })
    .thenOpen("http://jekyll:4000/sitemap.html", function () {
      test.assertTextExists("ga('create', 'UA-881783-8', {'cookieDomain': 'none'});");
      test.assertExists("link[rel='canonical'][href='https://www.singuerinc.com/sitemap.html']");
      testCommonMetas(test, "/sitemap.html");
      test.assertExists("body .content.container");
      test.assertSelectorHasText("body .content.container blockquote p", "Disclaimer");
      test.assertExists("body .sidebar header h1 a[href='./']");
      test.assertExists("body .sidebar nav ul:first-child li:nth-child(1) a[href='./']");
      test.assertExists("body .sidebar-mobile ul li:nth-child(1) a[href='./']");
      test.assertExists("body .sidebar nav ul:first-child li:nth-child(2) a[href='./about.html']");
      test.assertExists("body .sidebar-mobile ul li:nth-child(2) a[href='./about.html']");
      test.assertExists("body .sidebar nav ul:first-child li:nth-child(7) a[href='./sitemap.html']");
      test.assertExists("body .sidebar-mobile ul li:nth-child(7) a[href='./sitemap.html']");
      test.assertElementCount("body .sidebar .social li a", 3);
      test.assertExists("body .sidebar .social li a[href='https://twitter.com/intent/tweet?url=https://www.singuerinc.com&via=singuerinc']");
      test.assertExists("body .sidebar .social li a[href='https://www.facebook.com/sharer/sharer.php?u=https://www.singuerinc.com']");
      test.assertExists("body .sidebar .social li a[href='https://plus.google.com/share?url=https://www.singuerinc.com']");
    })
    .thenOpen("http://jekyll:4000/b-reel/zalando-ivy-park.html", function () {
      testAll(test, projects[0]);
    })
    .thenOpen("http://jekyll:4000/b-reel/b-reel-b-reel.html", function () {
      testAll(test, projects[1]);
    })
    .thenOpen("http://jekyll:4000/singuerinc/arawys-store.html", function () {
      testAll(test, projects[2]);
    })
    .thenOpen("http://jekyll:4000/b-reel/htc-vive.html", function () {
      test.assertExists(".info tr:nth-child(7) td:nth-child(2) .award.award-awwwards_site_of_the_day");
      test.assertExists(".info tr:nth-child(7) td:nth-child(2) .award.thefwa_site_of_the_day");
      testAll(test, projects[3]);
    })
    .thenOpen("http://jekyll:4000/b-reel/facebook-moments.html", function () {
      testAll(test, projects[4]);
    })
    .thenOpen("http://jekyll:4000/singuerinc/singuerinc-overlay-app.html", function () {
      testAll(test, projects[5]);
    })
    .thenOpen("http://jekyll:4000/b-reel/skoda-byggd-for-at-tta-skit.html", function () {
      test.assertExists("body.project-page .content .project-content .video-wrapper");
      testAll(test, projects[6]);
    })
    .thenOpen("http://jekyll:4000/b-reel/kick-with-chrome.html", function () {
      test.assertExists("body.project-page .content .project-content .video-wrapper");
      testAll(test, projects[7]);
    })
    .thenOpen("http://jekyll:4000/singuerinc/kit-appetit.html", function () {
      testAll(test, projects[8]);
    })
    .thenOpen("http://jekyll:4000/b-reel/names-not-numbers.html", function () {
      test.assertExists("body.project-page .content .project-content .video-wrapper");
      test.assertExists(".info tr:nth-child(8) td:nth-child(2) .award.award-awwwards_site_of_the_day");
      test.assertExists(".info tr:nth-child(8) td:nth-child(2) .award.thefwa_site_of_the_day");
      testAll(test, projects[9]);
    })
    .thenOpen("http://jekyll:4000/singuerinc/roberto-ivan-cano.html", function () {
      testAll(test, projects[10]);
    })
    .thenOpen("http://jekyll:4000/singuerinc/cuchi-cuchi.html", function () {
      // image = "cuchi-cuchi_50";
      testAll(test, projects[11]);
    })
    .thenOpen("http://jekyll:4000/doubleyou/pepe-jeans.html", function () {
      // image = "pepe-jeans_50";
      testAll(test, projects[12]);
    })
    .thenOpen("http://jekyll:4000/doubleyou/nike-pro-combat.html", function () {
      testAll(test, projects[13]);
    })
    .thenOpen("http://jekyll:4000/doubleyou/nike-my-time-is-now.html", function () {
      testAll(test, projects[14]);
    })
    .thenOpen("http://jekyll:4000/doubleyou/audi-a1-me-gusta.html", function () {
      testAll(test, projects[15]);
    })
    .thenOpen("http://jekyll:4000/doubleyou/fcb-somos-uno.html", function () {
      test.assertExists("body.project-page .content .project-content .video-wrapper");
      test.assertExists(".info tr:nth-child(7) td:nth-child(2) .award.award-sol_bronce");
      testAll(test, projects[16]);
    })
    .thenOpen("http://jekyll:4000/doubleyou/atrapalo-revivelo.html", function () {
      test.assertExists("body.project-page .content .project-content .video-wrapper");
      test.assertExists(".info tr:nth-child(6) td:nth-child(2) .award.award-sol_plata");
      test.assertExists(".info tr:nth-child(6) td:nth-child(2) .award.award-laus");
      test.assertExists(".info tr:nth-child(6) td:nth-child(2) .award.award-efi");
      testAll(test, projects[17]);
    })
    .thenOpen("http://jekyll:4000/doubleyou/audi-driving-experience.html", function () {
      testAll(test, projects[18]);
    })
    .thenOpen("http://jekyll:4000/doubleyou/evax-estudio-risa.html", function () {
      testAll(test, projects[19]);
    })
    .run(function () {
      test.done();
    });
});
