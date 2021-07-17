import { userdata } from '../../data'
import { BackButton, ButtonTertiaryLink } from '../../components/Button'
import { Title } from '../../components/Title'
import { Label, Label_M } from '../../components/Label'
import { Paragraph } from '../../components/Paragraph'
import { Meta, MetaLink } from '../../components/Meta'
import './style.scss'

const ProfilePage = {
  afterRender: () => {
    BackButton.afterRender()
  },
  render: () => {
    const {
      name,
      bio,
      display,
      cover,
      username,
      followers,
      following,
      location,
      website,
      born,
      joined,
      totalTweet,
    } = userdata
    return `
    <section class="Profile-container">
      <header class="Profile-header">
        ${BackButton.render()}
        <div class="Profile-header__content">
          ${Title.render({ title: name })}
          ${Label_M.render({ label: `${totalTweet} Tweets` })}
        </div>
      </header>
      <main class="Profile-details">
        <div class="Profile-details__cover" style="background-image:url(${cover})">
          <img
            class="Profile-details__cover--data"
            id="profile_cover"
            src="${cover}"
            alt="profile-cover"
          />
        </div>
        <div class="Profile-details__info">
          <div class="Profile-details__top">
            <div class="Profile-details__displayPic">
              <div class="image-holder">
                <img
                  class="Profile-details__displayPic--data"
                  id="profile_displayImage"
                  src="${display}"
                  alt="display-picture"
                />
              </div>
              <div class="title-username__holder">
                ${Title.render({ title: name })}
                ${Label.render({ label: username })}
              </div>
            </div>
            <div class="Profile-detail__editOption">
              ${ButtonTertiaryLink.render({
                value: 'Edit Profile',
                href: '/#/settings/profile',
              })}
            </div>
          </div>
          <div class="Profile-details__bio">
            ${Paragraph.render({ paragraph: bio })}
          </div>
          <div class="Profile-details__meta">
            ${Meta.render({ data: location, icon: 'map-pin' })}
            ${MetaLink.render({ data: website, icon: 'link' })}
            ${Meta.render({ data: `Born ${born}`, icon: 'cake' })}
            ${Meta.render({ data: `Joined ${joined}`, icon: 'calendar' })}
          </div>
        </div>
        <div class="Profile__connection">
          <div class="Profile-following">
            <span class="p-following bold">${following}</span>
            ${Label.render({ label: 'Following' })}
          </div>
          <div class="Profile-followers">
            <span class="p-followers bold">${followers}</span>
            ${Label.render({ label: 'Followers' })}
          </div>
        </div>
      </main>
    </section>
    `
  },
}

export { ProfilePage }
