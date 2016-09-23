/* global page */
import Portfolio from "./Portfolio.js";

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
else if (page === "/project") {
  portfolio.loadProject();
}
