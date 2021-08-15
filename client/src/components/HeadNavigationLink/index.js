
import "./_style.scss"

export const HeadNavigationLink = {
  render: ({href, icon, display, value, activeNav, logo})=>{

    if(logo){
      return `
        <a href="${href}" class="HeadNavigationLink HeadNav__logo">
          <div class="logoBox">
            <img src="${logo}" alt="logo"/>
          </div>
        </a>
      `
    }else{
      return `
        <a class="HeadNavigationLink ${activeNav === value ? "Head__nav--active":"Head__nav--disabled"}" href="${href}">
          <i class="${icon} icon__nav"></i>
          <h1 class="HeadNav__name"> ${display}</h1>
        </a>
      `
    }
    
  }
}