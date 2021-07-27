import { CreateTweet } from "../../components/CreateTweet"
import {Title} from "../../components/Title"
import "./_style.scss"

export const Home = {
  afterRender: ()=>{
    CreateTweet.afterRender();
  },
  render: ()=>{
    return `
      <div class="Home">
        <header class="Home__header">
           ${Title.render({title:"Home"})}
        </header>
        <div class="Home__createTweet">
          ${CreateTweet.render()}
        </div>
      </div>
    `
  }
}