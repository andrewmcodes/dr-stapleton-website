import { Link } from 'gatsby'
import React from 'react'
import { IoIosMail, IoLogoLinkedin, IoIosCall, IoMdMap } from 'react-icons/io'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <h1 className="section-header">Contact</h1>
        <div className="card-container">
          <div className="card-alternate">
            <a
              href="mailto:stapletona@uncw.edu"
              title="email"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer">
              <IoIosMail className="w-12 h-12" />
              stapletona@uncw.edu
            </a>
          </div>
          <div className="card-alternate">
            <a
              href="https://www.linkedin.com/in/ann-stapleton-4473717/"
              title="LinkedIn"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer">
              <IoLogoLinkedin className="w-12 h-12" />
              Ann Stapleton
            </a>
          </div>
          <div className="card-alternate">
            <a
              href="tel:1-910-962-7267"
              title="telephone"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer">
              <IoIosCall className="w-12 h-12" />
              (910) 962-7267
            </a>
          </div>
          <div className="card-alternate">
            <a
              href="http://www.uncw.edu/bio/about-faculty.html"
              title="My Office"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer">
              <IoMdMap className="w-12 h-12" />
              Friday Hall 2062
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
