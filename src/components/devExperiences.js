import React from 'react'

function DevExperiences() {
  return (
    <section className="dev-experiences" id="dev-experiences">
      <div className="section-container">
        <h1 className="section-header px-4 md:px-0">About the Developers</h1>
        <p className="section-content">
          This site was built by Onshore Studios, a website creation and design
          company run by two UNCW graduates. We used the skills gained from our
          time at UNCW to start a website building and design business. Ethan,
          our administrator, graduated with an accounting degree from the
          Cameron school of business. His knowledge of keeping financial records
          and managing clients and work orders is what keeps our business
          running smoothly, legally, and efficiently. Andrew, our developer,
          graduated with a degree in Computer Science. His coding and design
          ability is what creates our elegant sites and maintains high quality
          products for our customers. Andrew has experience in many programming
          languages, but primarily works as a Ruby on Rails devloper for N2
          Publishing. This shows you should not take the lessons you learn at
          UNCW for granted because one day you could be running your own
          business as well.
        </p>
        <a
          href="https://www.onshorestudios.com/"
          title="Onshore Studios"
          className="btn"
          target="_blank"
          rel="noopener noreferrer">
          Visit our Site
        </a>
      </div>
    </section>
  )
}

export default DevExperiences
