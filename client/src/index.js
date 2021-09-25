import './index.scss'
import { Overview } from './pages/Overview'
import { Home } from './pages/Home'
import { HeadNavigation } from './pages/HeadNavigation'
import { ProfilePage } from './pages/Profile/profile.js'
import { ProfileSettings } from './pages/ProfileSetting'
import { parseRequestUrl, pageToBeRender } from './util.js'



const routes = {
  '/home': Home,
  '/username/:id/:action': ProfilePage,
  '/profile-settings': ProfileSettings
}
const mainHeadNav = document.querySelector(".main-header");

const router = () => {
	let response = parseRequestUrl()
	if (response.resource === undefined) {
		window.location.hash = '/home'
		return
	}
	const page = routes[pageToBeRender(response.resource)]
	const root = document.getElementById('root')

	if (page && response.action) {
		page.beforeRender({ action: response.action })
	}
	console.log({ root, page })
	
	root.innerHTML = page ? page?.render({ href: response.url }) : null
	root.insertAdjacentHTML('beforeend', Overview.render())
	page && page.afterRender && page.afterRender()
  root.insertAdjacentHTML(
		'afterbegin',
		HeadNavigation.render({ activeNav: response.resource }),
	)
	console.log(response.resource)
	mainHeadNav.innerHTML = null
	// mainHeadNav.insertAdjacentHTML("afterbegin", HeadNavigation.render({activeNav: response.resource}));
}



window.addEventListener('load', router)
window.addEventListener('hashchange', router)
