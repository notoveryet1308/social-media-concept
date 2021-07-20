import { CropPhoto } from '../CropPhoto'
import './style.scss'

export const AddPhoto = {
  afterRender: () => {
    const addBtn = document.getElementsByClassName('Add-photo__icon')
    const input = document.querySelector('.Add-photo input')
    addBtn[0].addEventListener('click', () => {
      input.click()
    })

    window.addEventListener('change', () => {
      if (input.id) {
        const container = document.querySelector('#popup')
        container.insertAdjacentHTML('beforeend', CropPhoto.render())
        
        let imgFile = input.files[0]
        console.log({imgFile});
        var reader = new FileReader()
        reader.addEventListener(
          'load',
          () => {
            CropPhoto.afterRender({ src: reader.result })
          },
          false
        )
        if (imgFile) {
          reader.readAsDataURL(imgFile)
        }
      }
    })
  },
  render: ({ fileId }) => {
    return `
      <div class="Add-photo">
        <div class="Add-photo__icon">
          <i class="ph-image-square icon"></i>
        </div>
        <input class="Add-photo--input" id="${fileId}" type="file" accepts="image/jpeg,image/png,image/webp" />
      </div>
    `
  },
}
