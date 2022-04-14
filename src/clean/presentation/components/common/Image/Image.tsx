import React from 'react'
import { IImageProps } from '../interfaces'

const Image: React.FC<IImageProps> = (props) => (
  <img className={props.style} src={props.src} alt={props.alt} />
)

export default Image
