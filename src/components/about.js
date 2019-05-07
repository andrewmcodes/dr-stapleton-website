import React from 'react'
import profilePicture from '../images/profile-picture.jpg'
import biographicalSketchPDF from '../pdf/Biographical_Sketch_Stapleton.pdf'

function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="bg-cover mx-auto pt-8">
          <img
            className="rounded-full shadow-inner h-80"
            src={profilePicture}
            alt="Ann Stapleton Headshot"
            height="20rem"
          />
        </div>
        <h1 className="section-header">About</h1>
        <p className="section-content">
          Dr. Ann E. Stapleton’s research is focused on experimental testing of
          genotype-environment-phenotype models and systems modeling and she has
          more than ten years experience in development of cyberinfrastructure
          for biology. She has published in computer science, statistics, and
          biology journals. She was elected the Chair of the 2017 Gordon
          Research Conference on Quantitative Genetics and Genomics and recently
          served as the faculty lead to develop and approve a new
          interdisciplinary professional science master’s program in data
          science. Dr. Stapleton is currently serving as Program Director at
          U.S. National Science Foundation, Office of Integrative Activities,
          EPSCoR to strengthen and manage programs that build research
          capability, enhance STEM professional development, broaden
          participation in STEM, and impact economic development.{' '}
        </p>
        <a
          href={biographicalSketchPDF}
          className="btn"
          target="_blank"
          rel="noopener noreferrer">
          See My CV
        </a>
      </div>
    </section>
  )
}

export default About
