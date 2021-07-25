import { MainNavLink } from "../../components/MainNavLink"
import { mainNavMenu } from "../../data/static"
import "./_style.scss"

export const MainNavigation = {

  render: ({activeNav})=>{
    return `
      <nav class="MainNavigation">
        <div class="MainNav__list">
          ${mainNavMenu.map((data)=>{
           return MainNavLink.render({...data, activeNav})
          }).join("\n")}
        </div>
      </nav>
    `
  }
}