import './style.scss'
export const CropPhoto = {
  afterRender: ({ inputId }) => {
    let imgContainer = document.querySelector('.image-crop__container')
    const imgHolder = document.getElementById('imgHolder')
    let inputEl = document.getElementById(inputId)
    const previewImg = () => {
      let preview = document.querySelector('img')
      let imgFile = inputEl.files[0]
      var reader = new FileReader()
      reader.addEventListener(
        'load',
        () => {
          preview.src = reader.result
          imgHolder.style.backgroundImage = reader.result
        },
        false
      )
      if (imgFile) {
        reader.readAsDataURL(imgFile)
      }
      console.log({ imgFile })
    }
    inputEl.addEventListener('change', previewImg)
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

    const cropImage = (posY) => {
      let currPosY = imgHolder.style.transform
        ? parseInt(imgHolder.style.transform.split(' ')[1].replace('px,', ''))
        : 0
      if (currPosY + posY > -79 && currPosY + posY < 79) {
        imgHolder.style.transform = `translate3d(0px, ${
          currPosY + posY
        }px, 0px)`
      }
    }
    const delay = 1000
    imgContainer.addEventListener('pointermove', (e) => {
      if (e.pressure > 0) {
        debounce(cropImage(e.movementY), delay)
      }
    })
  },
  render: () => {
    return `
      <div class="image-crop__container">
        <div class="image-crop__content">
          <div class="image-crop__imgHolder" id="imgHolder">
            <img src="" />
          </div>
          <div class="image-crop__placeholder"></div>
        </div>
      </div>
    `
  },
}
