/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
     resolve: `gatsby-plugin-manifest`,
      options:{
        name: `Free-Trial-Plus`,
        short_name: `ftp`,
        start_url: `/`,
        background_color: '#00000000',
        theme_color: '#00000000',
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      }
    },
    //`gatsby-plugin-transition-link`,
    `gatsby-plugin-page-transitions`,
    `gatsby-plugin-smoothscroll`,
    
  ],
}
