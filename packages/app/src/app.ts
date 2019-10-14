import Portfolio, { IPost } from "./Portfolio"

export interface IPage {
  page: string
}

export const getPage = (): string => {
  const a: HTMLAnchorElement = document.createElement("a")
  const meta: HTMLMetaElement = document.querySelector(
    'meta[name="page:url"]'
  ) as HTMLMetaElement

  a.href = meta.getAttribute("content") as string
  return a.pathname
}

export const navigate = (
  page: string,
  portfolio: Portfolio,
  posts: IPost[]
): void => {
  if (page === "" || page === "/" || page === "/index.html") {
    portfolio.loadIndex(posts)
  } else if (page === "/about.html") {
    portfolio.loadAbout()
  } else if (page === "/sitemap.html") {
    portfolio.loadSiteMap()
  } else if (page === "/404.html") {
    portfolio.load404()
  } else if (/(\/.+){2}.html/.test(page)) {
    portfolio.loadProject()
  } else {
    throw new Error(`Page '${page}' can not be handled.`)
  }
}

export const init = (
  document: HTMLDocument,
  portfolio: Portfolio,
  posts: IPost[]
): Promise<IPage> => {
  return new Promise(resolve => {
    document.addEventListener("turbolinks:load", () => {
      const page: string = getPage()

      navigate(page, portfolio, posts)

      resolve({
        page,
      })
    })
  })
}
