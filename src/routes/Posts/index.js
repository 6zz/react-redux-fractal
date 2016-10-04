import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'posts',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const PostList = require('./containers/PostListContainer').default
      const reducer = require('./modules/reducers').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'posts', reducer })
      /*  Return getComponent   */
      cb(null, PostList)

    /* Webpack named bundle   */
    }, 'posts')
  }
})
