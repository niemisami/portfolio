import React from 'react'
import { graphql } from 'gatsby'

import '../styles/index.scss'
import Home from '../components/Home'
import SEO from '../components/seo'

const App = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  return (
    <>
      <Home
        html={html}
        {...frontmatter}
      />
      <SEO />
    </>
  )
}

export default App

export const pageQuery = graphql`
  query HomePage {
    markdownRemark(fileAbsolutePath: { regex: "/home.md/" }) {
      html
      frontmatter {
        title
        description
        professions
        profilePic {
          childImageSharp {
            fixed(width: 360) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        hero {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
