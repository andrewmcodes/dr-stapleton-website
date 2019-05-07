import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="bg-white font-sans fixed w-full z-50 shadow-lg border-t-4 border-blue-darkest">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 md:p-6">
        <Link
          to="/"
          className="no-underline text-blue-darkest font-semibold text-xl">
          {siteTitle}
        </Link>

        <button
          className="block md:hidden border border-blue-darkest flex items-center px-3 py-2 rounded text-white bg-blue-darkest"
          onClick={() => toggleExpansion(!isExpanded)}>
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto mt-4 md:mt-0`}>
          <div className="text-center shadow-inner md:shadow-none">
            <Link
              to="#about"
              className="nav-link underline-transition md:md:hover:border-blue-darkest"
              onClick={() => toggleExpansion(!isExpanded)}>
              About
            </Link>

            <Link
              to="#publications"
              className="nav-link underline-transition md:hover:border-blue-darkest"
              onClick={() => toggleExpansion(!isExpanded)}>
              Publications
            </Link>

            <Link
              to="#interaction"
              className="nav-link underline-transition md:hover:border-blue-darkest"
              onClick={() => toggleExpansion(!isExpanded)}>
              Interaction
            </Link>

            <Link
              to="#impact"
              className="nav-link underline-transition md:hover:border-blue-darkest"
              onClick={() => toggleExpansion(!isExpanded)}>
              Impact
            </Link>

            <Link
              to="#contact"
              className="nav-link underline-transition md:hover:border-blue-darkest"
              onClick={() => toggleExpansion(!isExpanded)}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Dr. Ann E. Stapleton`,
}

export default Header
