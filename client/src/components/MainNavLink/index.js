import { Title } from "../Title"
import "./_style.scss"

export const MainNavLink = {
  render: ({href, icon, display, value, activeNav, logo})=>{

    if(logo){
      return `
        <a href="${href}" class="MainNavLink ManiNav__logo">
          <div class="logoBox">
            <img src="${logo}" alt="logo"/>
          </div>
        </a>
      `
    }else{
      return `
        <a class="MainNavLink ${activeNav === value ? "main__nav--active":"main__nav--disabled"}" href="${href}">
          <i class="${icon} icon__nav"></i>
          <h1 class="MainNav__name"> ${display}</h1>
        </a>
      `
    }
    
  }
}