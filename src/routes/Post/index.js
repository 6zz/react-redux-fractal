import { injectReducer } from '../../store/reducers'
import SinglePost from './containers/PostContainer'
import reducer from './modules/reducers'

export default (store) => {
  return ({
    onEnter: () => {
      console.log('entering SinglePost route');
      injectReducer(store, { key: 'singlePost', reducer })
    },
    path: 'stories/:slug',
    component: SinglePost
  })
}
