import { Link } from 'gatsby'
import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p className="footer-text">© 2019 Ann E. Stapleton</p>
        <p className="footer-text">
          Designed and developed by &nbsp;
          <Link
            to="https://www.onshorestudios.com/"
            title="Onshore Studios"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer">
            Onshore Studios
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
