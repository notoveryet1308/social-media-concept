import './style.scss'


export const PrimaryButton = {

  render:({display, href, classname})=>{
    return `
      <a href="${href}" class="btn primary-btn primary-btn__link bold ${classname}">${display}</a>
    `
  }
}

export const TertiaryButtonLink = {
  render: ({ value, href }) => {
    return `<a href="${href}"  class="btn tertiary-btn tertiary-btn__link bold"> ${value} </a>`
  },
}

export const GhostButtonLink = {
  render: ({value, href, classname})=>{
    return `
      <a href="${href}" class="btn ghost-btn bold ${classname}">
        ${value}
      </a>`
  }
}

export const BackButton = {
  afterRender: () => {
    const backBtn = document.getElementsByClassName('back-btn')
    backBtn[0].addEventListener('click', () => {
      window.history.back()
    })
  },
  render: () => {
    return `
     <button class="btn back-btn">
      <i class="ph-arrow-left icon"></i>
     </button>
    `
  },
}
export const PopupBackBtn = {
  afterRender: () => {
    const backBtn = document.getElementsByClassName('popupBack-btn')
    backBtn[0].addEventListener('click', () => {
      let popup = document.getElementById("popup")
      popup.innerHTML = ""
    })
  },
  render: ()=>{
    return `
      <button class="btn popupBack-btn">
        <i class="ph-arrow-left icon"></i>
      </button>
    `
  }
}

