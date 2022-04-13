import { IntersectBaseProps } from '../types/flex.types';

export interface IFlexContents {
  key?: any
  image?: string
  heading?: string | JSX.Element
  content?: string | JSX.Element | JSX.Element[] | null
  headingStyles?: string
  contentStyle?: string
  headingType?: 'p' | 'h1' | 'h2' | 'h3'
}
export interface IFlexList {
  contentArray: IntersectBaseProps[]
}
