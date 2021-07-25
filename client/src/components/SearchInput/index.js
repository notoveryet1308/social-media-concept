import "./_style.scss"

export const SearchInput = {

  render: ({placeholder})=>{
    return `
      <div class="SearchInput">
        <div class="SearchInput__searchIcon">
          <i class="ph-magnifying-glass icon"></i>
        </div>
        <input class="SearchInput__input" placeholder="${placeholder}" />
      </div>
    `
  }
}