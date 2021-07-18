import "./style.scss"

export const AddPhoto = {
  afterRender: ()=>{
     const addBtn =   document.getElementsByClassName("Add-photo__icon");
      addBtn[0].addEventListener('click', ()=>{
        const input = document.querySelector(".Add-photo input");
        input.click();
     })
  },
  render: ({fileId})=>{
    return `
      <div class="Add-photo">
        <div class="Add-photo__icon">
          <i class="ph-image-square icon"></i>
        </div>
        <input class="Add-photo--input" name="${fileId}" type="file" accepts="image/jpeg,image/png,image/webp" />
      </div>
    `
  }
}
