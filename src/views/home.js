import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Division Engineer</title>
        <meta property="og:title" content="Dynamic Division Engineer" />
      </Helmet>
    </div>
  )
}

export default Home
