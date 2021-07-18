export const parseRequestUrl = () => {
  const url = document.location.hash.toLocaleLowerCase()
  const request = url.split('/')

  return {
    url: `/${document.location.hash}`,
    resource: request[1],
    id: request[2],
    action:request[3]
  }
}

export const pageToBeRender = (resource) => {
  switch (resource) {
    case 'home':
      return '/'
    case 'username':
      return '/username/:id/:action'
    case 'search':
      return 'search'
    case 'profile-settings':
      return '/profile-settings'
    default:
      return '/error404'
  }
}
