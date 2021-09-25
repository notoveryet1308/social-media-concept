import { HeadNavigationLink } from "../../components/HeadNavigationLink"
import { mainNavMenu } from "../../data/static"
import "./_style.scss"

export const HeadNavigation = {

  render: ({activeNav})=>{
    return `
      <nav class="HeadNavigation">
        <div class="HeadNav__list">
          ${mainNavMenu.map((data)=>{
           return HeadNavigationLink.render({...data, activeNav})
          }).join("\n")}
        </div>
      </nav>
    `
  }
}