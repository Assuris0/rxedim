module.exports = {
  siteMetadata: {
    title: "Prescription Earth",
    author: "Wes Anderson",
    siteUrl: "https://donboulton.com",
    siteImage: "/static/assets/bg.jpg",
    description: "Prescription Earth Website"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "2wac8h85",
        dataset: "<rxdim",
      },
    }, 
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'dimension-v4',
        short_name: 'Gatsby Starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/assets/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "2wac8h85",
        dataset: "public",
        watchMode: true,
        overlayDrafts: true,
        token: skF5onBG4YiOlyKSOojAKWYXhNhRNCvqNTrzERZ1x04VvupDsvo1O8pCZ5wS2wCTWcvVkeqAB5rWHhPEKhmTS7aaUg6Se1lFF8PB5uQHdXJqbTcE2As8TFKdwA5BJFXW9wSqmEsqhTCtgqZQefyv4AN6zzip76QhGHEM4y0NOUoFC4Wq3BTW,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-000000-2', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true, // default
          allowAdFeatures: false // default
        },
        googleTagManager: {
          trackingId: 'GTM-00000000', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
        facebookPixel: {
          pixelId: 'YOUR_FACEBOOK_PIXEL_ID', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-facebook-pixel', // default
        },
        tikTokPixel: {
          pixelId: 'YOUR_TIKTOK_PIXEL_ID', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-tiktok-pixel', // default
        },
        hotjar: {
          hjid: '0000000',
          hjsv: '6',
          cookieName: 'gatsby-gdpr-hotjar', // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-plugin-sitemap`
  ],
}
