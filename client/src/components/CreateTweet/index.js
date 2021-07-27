import pic from '../../assets/images/codeing_pic.jpg'
import './_style.scss'
import { userdata } from '../../data/userdata'
import { Title_M } from '../Title'
import { PrimaryButton } from '../Button'

export const CreateTweet = {
  afterRender: ()=>{
    const mediaContainer = document.querySelector(".CreateTweet__userMediaDisplay")
    const mediaInfo = document.querySelector(".CreateTweet__userMediaInfo")
    const mediaRemoveBtn = document.querySelector(".CreateTweet__removeMediaBtn")
    mediaRemoveBtn.addEventListener("click", ()=>{
      mediaContainer.style.backgroundImage = "none";
      mediaContainer.style.display="none"
      mediaInfo.style.display="none"
    })

    const imgInputBtn  = document.querySelector(".CraeteTweet__toolbar--ImageInput")
    const imgInput = document.getElementById("CraeteTweet__ImageInput--input")
    imgInputBtn.addEventListener("click", ()=>{
      imgInput.click();
    })

    imgInput.addEventListener("input", ()=>{
      const file = imgInput.files[0];
      const reader = new FileReader()
      reader.addEventListener("load", ()=>{
        mediaContainer.style.backgroundImage = `url(${reader.result})`;
        mediaContainer.style.display="block"
        mediaInfo.style.display="flex"
      })
      if(file){
        reader.readAsDataURL(file)
      }
    })
  },
  render: () => {
    return `
       <div class="CreateTweet">
         <div class="CreateTweetContainer">
           <div class="CreateTweet__left">
             <div class="CreateTweet__userdp">
                <img src="${userdata.display}" alt="user-dp" />
             </div>
           </div>
           <div class="CreateTweet__right">
             <div class="CreateTweet__userinputWrapper">
                <div class="CreateTweet__userInput">
                  <input placeholder="What's happening ?" id="tweetInputText" />
                </div>
                <div class="CreateTweet__userMediaDisplay">
                  <div class="CreateTweet__removeMediaBtn">
                    <i class="ph-x-fill icon CreateTweetIcon"></i>                    
                  </div>
                  <img src="${pic}" alt="media-input" id="CreateTweet__mediaInput" />
                </div>
                <div class="CreateTweet__userMediaInfo">
                  <div class="CreateTweet__userMediaInfo--tagPeople">
                     <a href="/#/">
                       <i class="ph-user icon_s"></i>
                      <span class="tag">Tag People</span>
                     </a>
                  </div>
                  <div class="CreateTweet__userMediaInfo--addDescription">
                     <a href="/#/">
                     <i class="ph-note icon_s"></i>
                      <span class="description">Add description</span>
                     </a>
                  </div>
                </div>
             </div>
             <div class="CreateTweet__actions">
               <div class="CreateTweet__info">
                 <a href="/#/" class="CreateTweet__info--link">
                   <i class="ph-globe-hemisphere-west-fill icon"></i>
                   <span>Everyone can reply</span>
                 </a>
               </div>
               <div class="CreateTweet__toolbarWrapper">
                  <div class="CreateTweet__toolbar--input">
                    <div class="CraeteTweet__toolbar--ImageInput toolbarItem">
                      <i class="ph-image-square icon_L CreateTweetIcon"></i>
                      <input type="file" accepts="jpeg/png" class="hidden_input" id="CraeteTweet__ImageInput--input" />
                    </div>
                    <div class="CraeteTweet__toolbar--PollInput toolbarItem">
                      <i class="ph-chart-bar-horizontal icon_L CreateTweetIcon"></i>
                    </div>
                    <div class="CraeteTweet__toolbar--EmojiInput toolbarItem">
                      <i class="ph-smiley icon_L CreateTweetIcon"></i>
                    </div>
                    <div class="CraeteTweet__toolbar--ScheduleInput toolbarItem">
                      <i class="ph-calendar-plus icon_L CreateTweetIcon"></i>
                    </div>
                  </div>
                  <div class="CreateTweet__toolbar--create">
                    ${PrimaryButton.render({href: "/#/", display:"Tweet"})}
                  </div>
               </div>
             </div>
           </div>
         </div>
       </div>
    `
  },
}

// style="background-image: url(${pic})"
