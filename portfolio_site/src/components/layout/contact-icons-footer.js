import React from "react"
import FaTwitter from "react-icons/lib/fa/twitter-square"
import FaFacebook from "react-icons/lib/fa/facebook-square"
import FaGitHub from "react-icons/lib/fa/github-square"
import FaLinkedin from "react-icons/lib/fa/linkedin-square"

import "./contact-icons-footer.css"

const FooterContactIcons = () => (
    <div className="contact-icons-footer">
    <a className ="contact-icon" href="https://twitter.com/fdel15"><FaTwitter /></a>
    <a className ="contact-icon" href="https://www.facebook.com/frank.delpidio"><FaFacebook /></a>
    <a className ="contact-icon" href="https://github.com/fdel15"><FaGitHub /></a>
    <a className ="contact-icon" href="https://www.linkedin.com/in/frank-delpidio-ab655883/"><FaLinkedin /></a>
    </div>
)
export default FooterContactIcons