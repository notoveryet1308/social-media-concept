import {  PopupHeader } from '../Headers';
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
      }
    })

    PopupHeader.afterRender();
  },
  render: () => {
    return `
      <div class="image-crop">
       <div class="image-crop__header">
        ${PopupHeader.render( 
          { 
          heading: "Edit Media", 
          href: "/#/profile-settings", 
          display:"Apply"
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
