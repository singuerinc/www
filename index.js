/* global page */
import Portfolio from "./Portfolio.js";

document.addEventListener("turbolinks:load", (e) => {

  const a = document.createElement("a");
  a.href = e.data.url;
  const page = a.pathname;
  // page = `/${e.data.url.split("/").pop()}`;
  console.log(`load: ${page}, url: ${e.data.url}`);
  const portfolio = new Portfolio();

  if (page === "/" || page === "/index.html") {
    portfolio.loadIndex();
  }
  else if (page === "/about.html") {
    portfolio.loadAbout();
  }
  else if (page === "/sitemap.html") {
    portfolio.loadSiteMap();
  }
  else if (page === "/404.html") {
    portfolio.load404();
  }
  else {
    portfolio.loadProject();
  }
});
