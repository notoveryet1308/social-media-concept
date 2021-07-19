import { ProfileHeader } from "../../components/ProfileHeader"

import"./style.scss"
import {userdata} from "../../data/userdata.js"
import { AddPhoto } from "../../components/AddPhoto"

export const ProfileSettings = {

  afterRender: ()=>{
    AddPhoto.afterRender();
    ProfileHeader.afterRender()
  },

  render:()=>{

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
    <div class="prfile-settings">
      ${ProfileHeader.render( 
        { 
          heading:"Edit Profile", 
          href:"/#/username/rahulraz1308",
          display: "save"
        }
      )}
      <div class="profile-settings__images">
        <div class="profile-settings__cover" style="background-image: url(${cover})">
          <div class="cover__actions">
            <div class="cover__actions--holder">
              ${AddPhoto.render({fileId:"profileCoverImg"})}
              <div class="cover_remove">
                <i class="ph-x icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="profile-settings__dp">
          <!-- More will come -->
          <div class="dp_holder">
             <img src="${display}" />
             <div class="dp__actions--holder">
              ${AddPhoto.render({fileId:"profileDisplayImg"})}
            </div>
          </div>
        </div>
      </div>
      <div class="profile-setings__details">
        <div class="Profile-ettings__name">
          <div class="Input-field">
            <label>Name</label>
            <input placeholder="your name"/>
          </div>
        </div>
        <div class="Profile-ettings__bio">
          <div class="TextArea-field">
            <label>BIO</label>
            <textarea >Helo</textarea>
          </div>
        </div>
      </div>
  </div>
    `
  }
}