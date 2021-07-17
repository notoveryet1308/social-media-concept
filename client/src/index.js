import './index.scss'
import { ProfilePage } from './pages/Profile/profile.js'
import { parseRequestUrl, pageToBeRender } from './util.js'

const routes = {
  '/username/:id': ProfilePage,
}

const router = () => {
  let response = parseRequestUrl()
  const page = routes[pageToBeRender(response.resource)]
  const root = document.getElementById('root')
  root.innerHTML = page.render()
  page.afterRender()
}

window.addEventListener('load', router)
window.addEventListener('hashchange', router)
