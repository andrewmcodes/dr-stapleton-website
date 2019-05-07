import React from 'react'
import Carousel from '../components/carousel'

function Interaction() {
  return (
    <section id="interaction" className="interaction">
      <div className="section-container">
        <h1 className="section-header">Interaction</h1>
        <p className="section-content">
          More than 50 research students have been supported by my federal
          grants in the last five years, and I encourage networking among my
          students and with many other students and colleagues. My research
          students have gone on to successful careers in fields ranging from
          plant breeding informatics to biostatistics to high-school science
          teaching. Career mentoring and training in project management is a key
          part of my student mentoring strategy.
        </p>
        <div className="carousel">
          <h2 className="section-header">Student Comments</h2>
          <div className="carousel-body">
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Interaction
