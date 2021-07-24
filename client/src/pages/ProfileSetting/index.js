import { ProfileHeader } from "../../components/Headers"

import"./style.scss"
import {userdata} from "../../data/userdata.js"
import { AddPhoto } from "../../components/AddPhoto"
import { InputArea, TextArea} from "../../components/InputField"

const textAreaBio = new TextArea("user-bio");
const inputUserName = new InputArea("user-name");
const inputUserLocation = new InputArea("user-location")
const inputUserWebsite = new InputArea("user-website")


export const ProfileSettings = {

  afterRender: ()=>{
    AddPhoto.afterRender();
    ProfileHeader.afterRender();
    textAreaBio.afterRender()
    inputUserName.afterRender()
    inputUserLocation.afterRender()
    inputUserWebsite.afterRender()
  },


  render:()=>{

    const {
      name,
      bio,
      display,
      cover,
      username,
      location,
      website,
      born,
    } = userdata

    return `
    <div class="prfile-settings">
      ${ProfileHeader.render( 
        { 
          heading:"Edit Profile", 
          href:`/#/username/${username}`,
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
             <img draggable="false" src="${display}" />
             <div class="dp__actions--holder">
              ${AddPhoto.render({fileId:"profileDisplayImg"})}
            </div>
          </div>
        </div>
      </div>
      <div class="profile-setings__details">
        <div class="Profile-settings__name">
          ${inputUserName.render(
            { 
              label: "Name", 
              placeholder:"Enter your name", 
              value: name,
              maxCharLength: 50
            })
          }
        </div>
        <div class="Profile-settings__bio">
          ${textAreaBio.render({
            label:'Bio',
            maxCharLength: 150,
            value: bio,
            textareaId:"user-bio"
          })}
        </div>
        <div class="Profile-settings__location">
          ${inputUserLocation.render(
            { 
              label: "Location", 
              placeholder:"your location", 
              value:location,
              maxCharLength: 30
            })
          }
        </div>
        <div class="Profile-settings__website">
          ${inputUserWebsite.render(
            { 
              label: "Website", 
              placeholder:"your website", 
              value:website,
              maxCharLength: 30
            })
          }
        </div>
      </div>
  </div>
    `
  }
}

