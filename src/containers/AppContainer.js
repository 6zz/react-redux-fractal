import React, { Component, PropTypes } from 'react'
import { applyRouterMiddleware, browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import useScroll from 'react-router-scroll/lib/useScroll'

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <div style={{ height: '100%' }}>
          <Router
            history={browserHistory}
            children={routes}
            render={applyRouterMiddleware(useScroll())}
          />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
