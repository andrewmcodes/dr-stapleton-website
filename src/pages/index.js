import React from 'react'

import Layout from '../components/layout'
import Home from '../components/home'
import About from '../components/about'
import Contact from '../components/contact'
import Impact from '../components/impact'
import Interaction from '../components/interaction'
import DevExperiences from '../components/devExperiences'
import Publications from '../components/publications'
import SEO from '../components/seo'

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <Home />
      <About />
      <Publications />
      <Interaction />
      <Impact />
      <DevExperiences />
      <Contact />
    </Layout>
  )
}

export default IndexPage
