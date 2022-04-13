import { AddedStyles } from '@clean/presentation/ts/interfaces/app.interfaces'
import React from 'react'

export const SectionContainer: React.FC<AddedStyles> = ({ additionalStyles, children, id }) => {
  const sectionStyles = additionalStyles ? ['container', additionalStyles].join(' ') : 'container'

  return (
    <section aria-label="section-container" id={id && id} className={sectionStyles}>
      {children}
    </section>
  )
}

export default SectionContainer
