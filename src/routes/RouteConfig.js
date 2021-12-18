import strings from '../res/strings'

const config = {
  home: {
    title: strings.home,
    path: '/home/:pgno/:size?',
    defaultPath: '/home/1/10'
  },
  post: {
    title: strings.post,
    path: '/post/:id?'
  }
}
export default config
