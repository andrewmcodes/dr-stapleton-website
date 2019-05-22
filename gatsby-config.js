module.exports = {
  pathPrefix:  `/stapletona/`,
  siteMetadata: {
    title: `Dr. Ann E. Stapleton`,
    description: `Researcher. Mentor. Innovator. Dr. Ann E. Stapleton's research is focused on experimental testing of genotype-environment-phenotype models and system modeling.`,
    author: `Andrew Mason`,
    siteUrl: `http://people.uncw.edu/stapletona/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dr. Ann E. Stapleton's Personal Site`,
        short_name: `Dr. Ann E. Stapleton`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1c3d5a`,
        display: `standalone`,
        icon: `./src/images/dr-ann-stapleton-favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-99046738-1',
        head: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/dr-ann-stapleton-favicon.png',

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#1c3d5a',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '2.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/css/style.css'],
      },
    },
  ],
}
