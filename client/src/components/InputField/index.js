import { userdata } from "../../data/userdata";
import { Label_M } from "../Label";
import "./_style.scss"


export class InputArea{
  inputID;
  userdatainputName;
  constructor(id){
   this.inputID = id;
   this.userdatainputName = id.split("-")[1];
   console.log(`Input filed is of ${this.inputID} CREARED ✨ and userdatainputName is ${this.userdatainputName}`);
  }
  
  afterRender(){
    
    const input = document.getElementById(this.inputID)
    const maxCharBox = document.querySelector(`.inputChar__count-${this.inputID}`)
    maxCharBox.insertAdjacentHTML("beforeend", Label_M.render({
      label: `${(input.value.length)} / ${input.maxLength}`}))
   
    input.addEventListener("input", ()=>{
     maxCharBox.innerHTML = ""
     maxCharBox.insertAdjacentHTML("beforeend", Label_M.render({
      label: `${(input.value.length)} / ${input.maxLength}`}))
      userdata[this.userdatainputName] = input.value;
     })

    input.addEventListener("focus", ()=>{
      maxCharBox.style.display="block";
    })
    input.addEventListener("blur", ()=>{
      maxCharBox.style.display="none";
    })
  }

  render({label, placeholder, value, maxCharLength}){
    return `
    <div class="Input-field inputfield">
      <div class="inputChar__count-${this.inputID} inputcount">    
      </div>
      ${Label_M.render({label})}
      <input 
        type="text"
        placeholder="${placeholder}" 
        maxLength="${maxCharLength}" 
        name="userProfile-input" 
        id="${this.inputID}" 
        value="${value}"/>
    </div>
    `
  }
}



export class TextArea{
   textareaID;
   userdatainputName;
   constructor(id){
    this.textareaID = id
    this.userdatainputName = id.split("-")[1]
    console.log(`Textarea class of ${this.textareaID} is CREATED and userdatainputName is ${this.userdatainputName} ✨`)
  }
  afterRender(){
    // const textarea = document.querySelector("[name='userProfile-textArea']");
    const textareaByID = document.getElementById(this.textareaID)
    const maxCharBox = document.querySelector(`.TextareaChar__count-${this.textareaID}`);
    
    maxCharBox.insertAdjacentHTML("beforeend", Label_M.render({
      label: `${textareaByID.value.length} / ${textareaByID.maxLength}`
    }))
    textareaByID.addEventListener("input", ()=>{
      maxCharBox.innerHTML = ""
      maxCharBox.insertAdjacentHTML("beforeend", Label_M.render({
        label: `${textareaByID.value.length} / ${textareaByID.maxLength}`
      }))
      userdata[this.userdatainputName] = textareaByID.value
    })

    textareaByID.addEventListener("focus", ()=>{
      maxCharBox.style.display="block";
    })
    textareaByID.addEventListener("blur", ()=>{
      maxCharBox.style.display="none";
    })
  }
  render({label, maxCharLength, value, }){
    return `
    <div class="Textarea-field inputfield">
      <div class="TextareaChar__count-${this.textareaID} inputcount"></div>    
      ${Label_M.render({label})}
      <textarea 
        type="text"
        maxLength="${maxCharLength}" 
        name="userProfile-textArea" 
        id="${this.textareaID}" 
        >${value}</textarea>
     </div>
    `
  }
}











// export const TextArea ={
  //   afterRender: ()=>{
  //     const textarea = document.querySelector("[name='userProfile-textArea']");
  //     const textareaByID = document.getElementById(textarea.id)
  //     const maxCharBox = document.querySelector(".TextareaChar__count");
  
  //     maxCharBox.insertAdjacentHTML("beforeend", Label_M.render({
  //       label: `${textarea.value.length} / ${textarea.maxLength}`
  //     }))
  //     textareaByID.addEventListener("input", ()=>{
  //       maxCharBox.innerHTML = ""
  //       maxCharBox.insertAdjacentHTML("beforeend", Label_M.render({
  //         label: `${textarea.value.length} / ${textarea.maxLength}`
  //       }))
  //     })
  
  //     textareaByID.addEventListener("focus", ()=>{
  //       maxCharBox.style.display="block";
  //     })
  //     textareaByID.addEventListener("blur", ()=>{
  //       maxCharBox.style.display="none";
  //     })
  //   },
  //   render: ({label, maxCharLength, value,textareaId, })=>{
  //     return `
  //     <div class="Textarea-field inputfield">
  //       <div class="TextareaChar__count inputcount">
          
  //       </div>
  //       ${Label_M.render({label})}
  //       <textarea 
  //         type="text"
  //         maxLength="${maxCharLength}" 
  //         name="userProfile-textArea" 
  //         id="${textareaId}" 
  //         >${value}</textarea>
  //      </div>
  //     `
  //   }
  // }