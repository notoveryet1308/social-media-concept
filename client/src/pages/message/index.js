import { ProfileHeader } from '../../components/Headers'

import './style.scss'

export const Message = {
	render: () => {
		return `
       <div class="message-container">
        ${ProfileHeader.render({ heading: 'Message' })}
        <div class="under-work">
           <p class='under-work--info'> Code for this page is still being written !!</p>
           <p class='under-work--suggestion'> Check out HOME and PROFILE page. </p>
        </div>
       </div>
     `
	},
}