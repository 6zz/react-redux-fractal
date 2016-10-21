import React from 'react'

const ListingView = ({ children }) => (
  <div className='posts'>
    { children }
  </div>
)

ListingView.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default ListingView
