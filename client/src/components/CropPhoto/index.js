import {  PopupHeader } from '../Headers';
import {userdata} from "../../data/userdata.js"
import './style.scss'
export const CropPhoto = {
  afterRender: ({ src }) => {
    let imgContainer = document.querySelector('.image-crop__container')
    const imageCrop__placeholder = document.querySelector(".image-crop__placeholder");
    const imageCrop__imgHolder = document.querySelector(".image-crop__imgHolder");
    const imgHolder = document.getElementById('imgHolder')
    const previewImg = document.getElementById('previewImg');
    
    if(src){
      imgHolder.style.backgroundImage = `url(${src})`
      previewImg.src= src
      imageCrop__placeholder.style.height= `${imgContainer.clientWidth/3}px`
      imageCrop__placeholder.style.display = "block"
    }
    
    
    const delay = 1000
    const debounce = function (fn, d) {
      let timer
      return function () {
        let context = this,
          args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(context, args)
        }, d)
      }
    }

    const cropImage = (posY, offSet) => {
      let currPosY = imgHolder.style.transform
        ? parseInt(imgHolder.style.transform.split(' ')[1].replace('px,', ''))
        : 0
      if (currPosY + posY > - offSet 
            && currPosY + posY < offSet) {
        imgHolder.style.transform = `translate3d(0px, ${
          currPosY + posY
        }px, 0px)`
      }
    }

    imgContainer.addEventListener('pointermove', (e) => {
      if (e.pressure > 0) {
        const maxOffset = parseInt(( imageCrop__imgHolder.clientHeight - imageCrop__placeholder.clientHeight) /2);
        debounce(cropImage(e.movementY, maxOffset), delay)
        console.log({imgHolder: imageCrop__imgHolder.getBoundingClientRect()});
        console.log({imageCrop__placeholder: imageCrop__placeholder.getBoundingClientRect()});
      }
    })

    PopupHeader.afterRender();
    const applyBtn = document.querySelector(".apply-coverPhoto");
    applyBtn.addEventListener("click", (e)=>{
      const imgPlaceholderRect = imageCrop__placeholder.getBoundingClientRect()
      const cropImageRect = imageCrop__imgHolder.getBoundingClientRect();
      console.log(e.target);
      const removePopup = document.querySelector(".popupBack-btn");
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d')
      const image = new Image();
      image.onload = ()=>{
        
        const dpp_H = image.naturalHeight/imgPlaceholderRect.height;
        const dpp_W = image.naturalWidth / imgPlaceholderRect.width;
        const dpp_B = image.naturalHeight/  imgPlaceholderRect.bottom;
        const cropX= 0;
        const cropY = (Math.abs(imgPlaceholderRect.top - cropImageRect.top)* dpp_H);
        const cropWidth= imgPlaceholderRect.width * dpp_W;
        const cropHeight = image.naturalHeight - (Math.abs(cropImageRect.bottom - imgPlaceholderRect.bottom)* dpp_B);
        console.log({cropY, cropWidth, cropHeight });
        ctx.drawImage(image, cropX, cropY, cropWidth, cropHeight, 0, 0, imgPlaceholderRect.width, imgPlaceholderRect.height  );
        const url = canvas.toDataURL("image/png", 1.0);
        userdata.cover = url;
       }
      image.src = src
      removePopup.click();
    })
  },
  render: () => {
    return `
      <div class="image-crop">
       <div class="image-crop__header">
        ${PopupHeader.render( 
          { 
          heading: "Edit Media", 
          href: "/#/profile-settings", 
          display:"Apply",
          btnIdentifier:"apply-coverPhoto"
          }
        )}
       </div>
       <div class="image-crop__container">
          <div class="image-crop__content">
            <div class="image-crop__imgHolder" id="imgHolder">
              <img id="previewImg" src="../../assets/images/loading.jpg" />
            </div>
            <div class="image-crop__placeholder"></div>
          </div>
       </div>
      </div>
    `
  },
}
