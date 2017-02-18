export default function (document, portfolio) {
  return new Promise((resolve, reject) => {
    document.addEventListener("turbolinks:load", () => {
      let page = getPage();

      navigate(page, portfolio);

      resolve({
        page
      });
    });
  });
};

export let navigate = (page, portfolio) => {
  if (page === "" || page === "/" || page === "/index.html") {
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
  else if (/(\/.+){2}.html/.test(page)){
    portfolio.loadProject();
  } else {
    throw new Error(`Page '${page}' can not be handled.`);
  }
};

export let getPage = () => {
  let a = document.createElement("a");
  let meta = document.querySelector("meta[name=\"page:url\"]");
  a.href = meta.getAttribute("content");
  return a.pathname;
};
