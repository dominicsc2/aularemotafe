import { clickHandler } from '@clean/presentation/ts/types/app-types';

export interface IBanner {
  backgroundImage: string
  mainTitle: string
  bannerDescription: string
  textPosition?: 'top' | 'center' | 'center-top' | 'center-bottom' | 'bottom'
  descriptionPosition?: 'top' | 'center' | 'bottom'
  height?: string
}

export interface IBannerCallToAction extends IBanner {
  contentWrapperStyle?: string
  mainInfoStyle?: string
  buttonText: string
  href: string
  onClick?: clickHandler
  searchBoxPlaceholder?: string
  buttonStyle?: 'primary' | 'secondary' | 'outline'
  buttonMaxWidth?: number
}
