import Listing from './components/ListingView'
import PostsRoute from './routes/Listing'
import SingleRoute from './routes/Post'

export default (store) => ({
  path:        'stories',
  component:   Listing,
  indexRoute:  PostsRoute(store),
  childRoutes: [
    SingleRoute(store)
  ]
})
