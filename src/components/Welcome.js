import React from 'react'

const Welcome = ({ children }) => (
  <section className='p-6 inline-block align-middle'>
    <h1 className='uppercase'>
      {children}
    </h1>
  </section>
)

export default Welcome
