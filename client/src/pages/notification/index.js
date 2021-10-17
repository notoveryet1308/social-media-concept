import { ProfileHeader } from '../../components/Headers'

import './style.scss'

export const Notification = {
	render: () => {
		return `
       <div class="notification-container">
        ${ProfileHeader.render({ heading: 'Notification' })}
        <div class="under-work">
           <p class='under-work--info'> Code for this page is still being written !!</p>
           <p class='under-work--suggestion'> Check out HOME and PROFILE page. </p>
        </div>
       </div>
     `
	},
}