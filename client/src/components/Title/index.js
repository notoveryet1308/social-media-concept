import "./style.scss";

export const Title = {
  render: ({ title }) => {
    return `<h1 class="title">${title}</h1>`
  },
}

export const Title_M = {
  render: ({ title })=>{
    return `<h2 class="title-m">${title}</h2>`
  }
}
