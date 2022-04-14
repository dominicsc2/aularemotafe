import React from 'react'

type ISectionTitleProps = {
  title: string
}

const SectionTitle: React.FC<ISectionTitleProps> = (props) => {
  return <h1 className='section-title'>{props.title}</h1>
}

export default SectionTitle
