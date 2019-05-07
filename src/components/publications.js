import React from 'react'
import systemsSeminar2018PDF from '../pdf/systems_seminar2018_Stapleton_materials.pdf'

function Publications() {
  return (
    <section id="publications" className="publications">
      <div className="section-container">
        <h1 className="section-header">Publications &amp; Projects</h1>
        <div className="flex flex-col w-full">
          <div className="card">
            <div className="mb-4">
              <h2 className="card-header">Publications</h2>
              <p className="card-text">
                You can find all of my publications by clicking the button below
              </p>
              <a
                href="https://scholar.google.com/citations?hl=en&user=MfwDLb0AAAAJ&sortby=pubdate&view_op=list_works"
                className="btn"
                rel="noopener noreferrer"
                target="_blank">
                See More
              </a>
            </div>
          </div>
          <div className="card">
            <div className="mb-4">
              <h2 className="card-header">Biology 495 Seminar</h2>
              <p className="card-text">
                Are Biological Systems Like Facebook? Understanding Interactions
                in Cells, Organisms, Ecosystems
              </p>
              <a
                href={systemsSeminar2018PDF}
                className="btn"
                rel="noopener noreferrer"
                target="_blank">
                See More
              </a>
            </div>
          </div>
          <div className="card">
            <div className="mb-4">
              <h2 className="card-header">EnviroTyping</h2>
              <p className="card-text">
                Genetically-Informed EnviroTyping Tools to Better Test and
                Target Environments
              </p>
              <a
                href="http://envirotyping.readthedocs.io/en/master/"
                className="btn"
                rel="noopener noreferrer"
                target="_blank">
                See More
              </a>
            </div>
          </div>
          <div className="card">
            <div className="mb-4">
              <h2 className="card-header">Validate 1.0</h2>
              <p className="card-text">
                Test predictions, integrate applications, and manage GWAS and
                prediction applications in parallel
              </p>
              <a
                href="https://na01.safelinks.protection.outlook.com/?url=http%3A%2F%2Fvalidate-10.readthedocs.io%2Fen%2Flatest%2F&data=01%7C01%7Cstapletona%40uncw.edu%7C5b1002d2e8b34526ffcf08d5cb295f5e%7C2213678197534c75af2868a078871ebf%7C1&sdata=e7bspsMH9plJGgGbaarct0Zcz9FRwMQboOeFk0lBf2A%3D&reserved=0"
                className="btn"
                rel="noopener noreferrer"
                target="_blank">
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Publications
