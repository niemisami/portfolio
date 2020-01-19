import React from 'react'
import Img from 'gatsby-image'

const Hero = ({ src }) => (
  <figure className='h-full w-full overflow-hidden'>
    <Img fluid={src} className='h-full' />
  </figure>
)

export default Hero
