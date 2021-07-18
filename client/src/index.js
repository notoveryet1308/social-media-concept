import './index.scss'
import { ProfilePage } from './pages/Profile/profile.js'
import { ProfileSettings } from './pages/ProfileSetting'
import { parseRequestUrl, pageToBeRender } from './util.js'

const routes = {
  '/username/:id/:action': ProfilePage,
  '/profile-settings': ProfileSettings
}

const router = () => {
  let response = parseRequestUrl()
  const page = routes[pageToBeRender(response.resource)]
  const root = document.getElementById('root')
  if(page && response.action){
    page.beforeRender({action: response.action })
  }
  root.innerHTML = page && page?.render({href: response.url})
  page && page.afterRender && page.afterRender()
}

window.addEventListener('load', router)
window.addEventListener('hashchange', router)
