import "./style.scss"

export const Tab = {
  afterRender: ({data})=>{
    const tabBtns = document.getElementsByClassName("Tab__content");

    for(let i=0; i< tabBtns.length; i++){
       tabBtns[i].addEventListener('click', (e)=>{
          for(let i=0; i< data.length; i++){
             if(e.target.id !== (data[i].value)){
               data[i].isActive = false   
             }else if(e.target.id === (data[i].value)){
              data[i].isActive = true
             }
          }
       })
    }
  },
  render: ({display, href, value, isActive})=>{
    return `
      <div class="Tab Tab--${isActive ? "active":"disabled"}">
       <a href="${href}" id="${value}" class="Tab__content">
         <span class="tab-name bold">${display}</span>
         <div class="TabActive--indicator ${value}"></div>
       </a> 
      </div>
    `  
  }
}