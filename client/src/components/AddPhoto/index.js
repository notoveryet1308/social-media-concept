import { CropPhoto } from '../CropPhoto'
import './style.scss'

export const AddPhoto = {
  afterRender: () => {
    const addBtn = document.getElementsByClassName('Add-photo__icon')
    const input = document.querySelector('.Add-photo input')
    addBtn[0].addEventListener('click', () => {
      input.click()
      if (input.id && input.files[0]) {
        const container = document.querySelector('.Add-photo')
        container.insertAdjacentHTML('beforebegin', CropPhoto.render())
        CropPhoto.afterRender({ inputId: input.id })
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
