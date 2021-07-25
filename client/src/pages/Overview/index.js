import { SearchInput } from "../../components/SearchInput";
import "./_style.scss";
import {Title} from "../../components/Title"

export const Overview = {
  render:()=>{
    return `
      <section class="Overview">
        <div class="Overview__search">
          ${SearchInput.render({placeholder:"Search Twitter"})}
        </div>
        <div class="Overview__content">
          <div class="Overview__content--title">
            ${Title.render({title:"What's happening"})}
          </div>
        </div>
      </section>
    `
  }
}