import { injectReducer } from '../../store/reducers'

export default (store) => {
  return {
    onEnter: () => {
      console.log('entering SinglePost route');
    },
    path: 'stories/:slug',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        /*  Webpack - use require callback to define
            dependencies for bundling   */
        const SinglePost = require('./containers/PostContainer').default
        const reducer = require('../../store/posts').default

        /*  Add the reducer to the store on key 'counter'  */
        injectReducer(store, { key: 'story', reducer })
        /*  Return getComponent   */
        cb(null, SinglePost)

      /* Webpack named bundle   */
      }, 'story')
    }
  }
}
