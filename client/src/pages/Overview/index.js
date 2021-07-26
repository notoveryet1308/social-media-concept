import { SearchInput } from "../../components/SearchInput";
import "./_style.scss";
import {Title} from "../../components/Title"
import { CardOverviewNews, CardOverviewTrending } from "../../components/CardOverview";
import new1 from "../../assets/images/new_1.jpg"
import new2 from "../../assets/images/new_2.jpg"
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
          ${CardOverviewNews.render({
            about:"Politics .",
            time:"This afternoon",
            newsTitle:"BS Yediyurappa resigns as Karnataka chief minister",
            trendingWith:"#BsyResigns",
            imgUrl: new1
          })}
          ${CardOverviewTrending.render({
            about:"Indian Premier League .",
            type:"Trending",
            title:"#MSDhoni",
            totlaTweets:"17.1k"
          })}
          ${CardOverviewTrending.render({
            about:"Enterrainment.",
            type:"Trending",
            title:"#KapilSharma",
            totlaTweets:"3,452 Tweets"
          })}
          ${CardOverviewNews.render({
            about:"Politics .",
            time:"5 hours ago",
            newsTitle:"Rahul Gandhi drives tractor to parliament to protest farm laws",
            trendingWith:"Tractor",
            imgUrl: new2
          })}
        </div>
      </section>
    `
  }
}