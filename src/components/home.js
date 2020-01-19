import React from 'react'
import Img from 'gatsby-image'

import Hero from './Hero'
import Markdown from './Markdown'
import Tags from './Tags'
import Welcome from './Welcome'

const Home = ({ html, title, professions, profilePic, hero }) => {
  const heroSrc = hero.childImageSharp.fluid
  const profilePicSrc = profilePic.childImageSharp.fixed
  return (
    <main className='flex items-center'>
      <div className='w-1/3 bg-gray-400 h-screen'>
        <Hero src={heroSrc} />

      </div>
      <div className='w-1/3 bg-gray-500 h-12'>
        <Welcome>{title}</Welcome>

      </div>
      <div className='w-1/3 bg-gray-400 h-12'>
        <Markdown html={html} />
        <Tags tags={professions} />
        <Img fixed={profilePicSrc} />
      </div>
    </main>
  )
}

export default Home
