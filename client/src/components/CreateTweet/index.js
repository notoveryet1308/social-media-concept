
import pic from "../../assets/images/codeing_pic.jpg";
import "./_style.scss";
import {userdata} from "../../data/userdata"
import { Title_M } from "../Title";

export const CreateTweet = {
  render: ()=>{
    return `
      <div class="CreateTweet">
        <div class="CreateTweet__userDP">
           <img src="${userdata.display}" alt="user-dp"/>
        </div>
        <div class="CreateTweet__content">
          <div class="userInput">
            <input placeholder="What's happening ?" id="createTweet__input" />
          </div>
          <div class="CreateTweet__Media" >
            <div class="CreateTweet__Media--removeBtn">
              <i class="ph-x-circle-fill icon_L removeBtnIcon"></i>
            </div>
            <img src="${pic}" alt="image-input" />
          </div>
          <div class="CreateTweet__info">
            <i class="ph-globe-hemisphere-west-fill icon_s"></i>
            <a href="/#/home">${Title_M.render({title:"Everyone can reply"})}</a>
          </div>
          <div class="CreateTweet__toolbar">
            <div class="CreateTweet__image">
            <input type="file" accepts="jpeg/png" id="CreateTweet__image--input" />
            <div class="CreateTweet__image--icon">
              <i class="ph-image-fill icon-btn"></i>
            </div>
          </div>
          </div>
            
        </div>
        
      </div>
    `
  }
}

// style="background-image: url(${pic})"