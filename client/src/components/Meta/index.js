import { Label } from '../Label'
import './style.scss'

export const Meta = {
  render: ({ data, icon }) => {
    return `
      <div class="Meta Meta-default">
        <i class="ph-${icon} icon"></i>
        <span class="meta__data">${Label.render({ label: data })}</span>
      </div>`
  },
}

export const MetaLink = {
  render: ({ data, icon }) => {
    return `
      <div class="Meta Meta-link">
        <i class="ph-${icon} icon"></i>
        <a href="${data}" class="meta__data meta__data--link" target="_blank">${data}</a>
      </div>`
  },
}
