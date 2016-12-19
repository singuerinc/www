/* global document */
import Portfolio from "./Portfolio.js";

document.addEventListener("turbolinks:load", (e) => {
  console.log(e);
  let a,
    page,
    portfolio;

  a = document.createElement("a");
  a.href = e.data.url;

  page = a.pathname;
  portfolio = new Portfolio();

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
