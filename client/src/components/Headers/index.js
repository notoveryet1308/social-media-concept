import {BackButton, PopupBackBtn, PrimaryButton} from "../Button"
import {Title} from "../Title";
import {Label_M} from "../Label"
import "./style.scss"

export const ProfileHeader = {
  afterRender:()=>{
    BackButton.afterRender();
  },
  render: ({heading, display, href, subHeading})=>{
    return `
    <header class="profile-header">
      <div class="profile-header__content">
        ${BackButton.render()}
        <div class="profile-header__heading">
          ${Title.render({title: heading})}
          ${subHeading ? Label_M.render({label: subHeading}):""}
        </div> 
      </div>
      <div class="profile-header__btns">
        ${display ? PrimaryButton.render({display, href}):""}
      </div>
   </header>
    `
  }
}

export const PopupHeader = {
  afterRender: ()=>{
    PopupBackBtn.afterRender();
  },
  render: ({heading, display, href, subHeading})=>{
    return `
     <header class="profile-header">
        <div class="profile-header__content">
          ${PopupBackBtn.render()}
          <div class="profile-header__heading">
            ${Title.render({title: heading})}
            ${subHeading ? Label_M.render({label: subHeading}):""}
          </div> 
        </div>
        <div class="profile-header__btns">
          ${display ? PrimaryButton.render({display, href}):""}
        </div>
     </header>
    `
  }
}