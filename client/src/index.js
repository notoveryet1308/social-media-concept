import './index.scss'
import { Overview } from './pages/Overview'
import { Home } from './pages/Home'
import { MainNavigation } from './pages/MainNavigation'
import { ProfilePage } from './pages/Profile/profile.js'
import { ProfileSettings } from './pages/ProfileSetting'
import { parseRequestUrl, pageToBeRender } from './util.js'



const routes = {
  '/home': Home,
  '/username/:id/:action': ProfilePage,
  '/profile-settings': ProfileSettings
}
const mainNavContainer = document.querySelector(".main-nav--container");
const router = () => {
  let response = parseRequestUrl()
  if(response.resource === undefined){
    window.location.hash = "/home"
    return
  }
  const page = routes[pageToBeRender(response.resource)]
  const root = document.getElementById('root')
  if(page && response.action){
    page.beforeRender({action: response.action })
  }
  root.innerHTML = page ? page?.render({href: response.url}): null
  root.insertAdjacentHTML("beforeend", Overview.render())
  page && page.afterRender && page.afterRender()
  console.log(response.resource);
  mainNavContainer.innerHTML = null
  mainNavContainer.insertAdjacentHTML("afterbegin", MainNavigation.render({activeNav: response.resource}));
}



window.addEventListener('load', router)
window.addEventListener('hashchange', router)
