import { CreateTweet } from "../../components/CreateTweet"
import {Title} from "../../components/Title"
import "./_style.scss"

export const Home = {
  afterRender: ()=>{
    CreateTweet.afterRender();
    let homeWidth = document.querySelector('.Home__width');
    let width = window.innerWidth - 90 > 600 ? 600:  90;
    homeWidth.style.width = `${width}px`;
    window.addEventListener('resize', ()=>{
      width = window.innerWidth - 90 > 600 ? 600: window.innerWidth - 90;
      homeWidth.style.width = `${width}px`;
    })
  },
  render: ()=>{
    return `
      <div class="Home">
        <header class="Home__header">
           ${Title.render({title:"Home"})}
        </header>
        <div class="Home__width"></div>
        <div class="Home__createTweet">
          ${CreateTweet.render()}
        </div>
      </div>
    `
  }
}