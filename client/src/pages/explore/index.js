import { ProfileHeader } from '../../components/Headers'

import './style.scss'

export const Explore = {
	render: () => {
		return `
       <div class="explore-container">
        ${ProfileHeader.render({ heading: 'Explore' })}
        <div class="under-work">
           <p class='under-work--info'> Code for this page is still being written !!</p>
           <p class='under-work--suggestion'> Check out HOME and PROFILE page. </p>
        </div>
       </div>
     `
	},
}
