export const getProjectTitle = (client, title) =>
  client === title ? title : [client, "·", title].join(" ")

export const getProjectTitleEscaped = title => encodeURIComponent(title)

export const getProjectUrl = path => `https://www.singuerinc.com${path}`

export const getProjectUrlEscaped = url => encodeURIComponent(url)
