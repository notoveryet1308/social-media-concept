export const parseRequestUrl = () => {
  const url = document.location.hash.toLocaleLowerCase()
  const request = url.split('/')

  return {
    resource: request[1],
    id: request[2],
  }
}

export const pageToBeRender = (resource) => {
  switch (resource) {
    case '/home':
      return '/'
    case 'username':
      return '/username/:id'
    case '/search':
      return '/search'
    default:
      return '/error404'
  }
}
