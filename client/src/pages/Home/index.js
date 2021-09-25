import homeTweets from '../../ClientState/homeTweets'
import { CreateTweet } from '../../components/CreateTweet'
import { Title } from '../../components/Title'
import { TweetCard } from '../../components/TweetCard'
import './_style.scss'

export const Home = {
	afterRender: () => {
		CreateTweet.afterRender({
			insertTweetContainer: document.querySelector('.Home__tweets'),
		})
		let homeWidth = document.querySelector('.Home__width')
		let width = window.innerWidth - 90 > 600 ? 600 : 90
		homeWidth.style.width = `${width}px`
		window.addEventListener('resize', () => {
			width = window.innerWidth - 90 > 600 ? 600 : window.innerWidth - 90
			homeWidth.style.width = `${width}px`
		})
	},
	render: () => {
		return `
      <div class="Home">
        <header class="Home__header">
           ${Title.render({ title: 'Home' })}
        </header>
        <div class="Home__width"></div>
        <div class="Home__createTweet">
          ${CreateTweet.render()}
        </div>
        <div class="Home__tweets">
          ${homeTweets
						.map((tweet) => TweetCard.render({ ...tweet }))
						.join('\n')}
        </div>
      </div>
    `
	},
}
