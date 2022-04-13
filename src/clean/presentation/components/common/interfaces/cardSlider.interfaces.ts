import { IRoundImage, ITeacher, IDocument } from '@clean/presentation/ts/interfaces/app.interfaces';

export interface ICardSlider {
  content: IRoundImage[] | ITeacher[] | IDocument[]
  contentType: 'roud-image' | 'card-document' | 'card-teacher'
  idAdditional?: string
  gap: 'small' | 'medium' | 'large'
}
