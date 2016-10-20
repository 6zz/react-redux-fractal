import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>Level Studio Wordpress SPA Demo</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/stories' activeClassName='route--active'>
      Stories
    </Link>
  </div>
)

export default Header
