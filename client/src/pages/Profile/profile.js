import { userdata } from '../../data'
import { BackButton, TertiaryButtonLink } from '../../components/Button'
import { Title } from '../../components/Title'
import { Label, Label_M } from '../../components/Label'
import { Paragraph } from '../../components/Paragraph'
import { Meta, MetaLink } from '../../components/Meta'
import {Tab} from "../../components/Tab"
import './style.scss'

import {Profile} from "../../ClientState/profilePage.js"
import { ProfileHeader } from '../../components/Headers'


// let editClick = (href)=>{
//   console.log({href});
//   window.open(href)
// },
const ProfilePage = {
  beforeRender: ({action})=>{
    Profile.tabs.forEach(el => {
      if(el.value === action){
        el.isActive = true
      }else if(el.value !== action){
        el.isActive = false
      }
    })
  },
  
  afterRender: () => {
    BackButton.afterRender();
    Tab.afterRender({data: Profile.tabs})
  },
  render: () => {
    const {
      name,
      bio,
      display,
      cover,
      username,
      followers,
      following,
      location,
      website,
      born,
      joined,
      totalTweet,
    } = userdata

    return `
    <section class="Profile-container">
      ${ProfileHeader.render(
        { 
          heading: name, 
          subHeading:`${totalTweet} Tweets`,
          
        }
      )}
      <main class="Profile-details">
        <div class="Profile-details__cover" style="background-image:url(${cover})">
          <img
            class="Profile-details__cover--data"
            id="profile_cover"
            src="${cover}"
            alt="profile-cover"
          />
        </div>
        <div class="Profile-details__info">
          <div class="Profile-details__top">
            <div class="Profile-details__displayPic">
              <div class="image-holder">
                <img
                  class="Profile-details__displayPic--data"
                  id="profile_displayImage"
                  src="${display}"
                  alt="display-picture"
                />
              </div>
              <div class="title-username__holder">
                ${Title.render({ title: name })}
                ${Label.render({ label: username })}
              </div>
            </div>
            <div class="Profile-detail__editOption">
              ${TertiaryButtonLink.render({
                value: 'Edit Profile',
                href: '/#/profile-settings',
              })}
            </div>
          </div>
          <div class="Profile-details__bio">
            ${Paragraph.render({ paragraph: bio })}
          </div>
          <div class="Profile-details__meta">
            ${Meta.render({ data: location, icon: 'map-pin' })}
            ${MetaLink.render({ data: website, icon: 'link' })}
            ${Meta.render({ data: `Born ${born}`, icon: 'cake' })}
            ${Meta.render({ data: `Joined ${joined}`, icon: 'calendar' })}
          </div>
        </div>
        <div class="Profile__connection">
          <div class="Profile-following">
            <span class="p-following bold">${following}</span>
            ${Label.render({ label: 'Following' })}
          </div>
          <div class="Profile-followers">
            <span class="p-followers bold">${followers}</span>
            ${Label.render({ label: 'Followers' })}
          </div>
        </div>
      </main>
      <section class="Profile__tab">
        ${Profile.tabs.map(d => Tab.render({...d, href:`/#/username/rahulraz1308${d.url}`})).join(",")}
      </section>
    </section>
    `
  },
}

export { ProfilePage }
