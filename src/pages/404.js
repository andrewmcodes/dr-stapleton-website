import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="container mx-auto">
        <h2 className="bg-yellow inline-block my-8 p-3">
          Looks like you have arrived at an imaginary page....
        </h2>
      </div>
    </Layout>
  )
}

export default NotFoundPage
