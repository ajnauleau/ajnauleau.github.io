import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Welcome</h1>
    <p>
      I’m a full stack software engineer focused on Javascript, Python, C, and
      Rust. My code powers projects such as MetaMask, to building small network
      routing modules, to building an app to help individuals for a community in
      need of recovery from addiction.
    </p>
    <p>Now go build something great.</p>
    <Link to="/about/">Go to about</Link>
  </div>
)

export default IndexPage
