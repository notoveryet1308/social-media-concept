import {Label_M} from "../../components/Label"
import {Title_M } from "../Title"
import "./_style.scss"

export const CardOverviewNews= {

  render: ({about, time, newsTitle, imgUrl, trendingWith})=>{
    return `
      <div class="CardOverview">
        <div class="CardOverview__details">
          <div class="CardOverview__meta">
            ${Label_M.render({label:about})}
            ${Label_M.render({label: time})}
          </div>
          <div class="CardOverview__title">
             ${Title_M.render({title:newsTitle})}
          </div>
          <div class="CardOverview__trending">
            ${trendingWith ?Label_M.render({label:`Trending with`}): null}
            <span class="CardOverview__trending--with">
              <a href="/#/home">
                ${trendingWith}
              </a>
            </span>
          </div>
        </div>
        <div class="CardOverview__media">
          <img src="${imgUrl}" alt="card-media" />
        </div>
      </div>   
    `
  }
}

export const CardOverviewTrending = {

  render:({totlaTweets,about, type , title})=>{
    return `
    <div class="CardOverview">
    <div class="CardOverview__details">
      <div class="CardOverview__meta">
        ${Label_M.render({label:about})}
        ${Label_M.render({label: type})}
      </div>
      <div class="CardOverview__title">
         ${Title_M.render({title})}
      </div>
      <div class="CardOverview__tweets">
        ${Label_M.render({label: totlaTweets})}
      </div>
    </div>
  </div> 
    `
  }
}