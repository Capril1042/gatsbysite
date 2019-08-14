import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About Me</h1>
    <img src="http://frankd.co/img/about-page-photo.jpg" alt="Frank's picture" height="100" width="100"/>
    <p>I am a life long learner always searching for my next adventure. 
    I enjoy reading and learning about many different topics including coding, 
    sabermetrics, the stock market, poker, entrepreneurship, and more. I am a die hard Philadelphia Eagles fan and like to relax by watching movies and documentaries that make me think. I am currently working as a Software Engineer in Wakefield MA.
    <br/>
    If you would like to follow me on twitter my user name is @fdel15</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
