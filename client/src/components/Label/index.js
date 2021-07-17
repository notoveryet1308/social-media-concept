import "./style.scss";

export const Label = {
  render: ({label})=>{
    return `<span class="label label-default">${label}</span>`
  }
}

export const Label_M = {
  render: ({label})=>{
    return `<span class="label label-m">${label}</span>`
  }
}