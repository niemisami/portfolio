import React from 'react'

const Markdown = ({ html }) => (
  <section className='markdown' dangerouslySetInnerHTML={{ __html: html }} />
)

export default Markdown
