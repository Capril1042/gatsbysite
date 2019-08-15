import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>General Information</h1>
    <p>I love talking with developers 
      and people learning to code! 
      Please feel free to reach out to me :)
      <br/>
      Twitter and email are the best ways to reach me.
      </p>
    <h1>Contact Details</h1>
    <ul> 
      <li>email: frankdelpidio@gmail.com</li>
      <li>twitter: @fdel15 </li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage