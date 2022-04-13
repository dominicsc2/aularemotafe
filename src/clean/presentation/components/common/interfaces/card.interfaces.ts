import {
  IntersectDocumentCardBaseProps,
  IntersectTeacherCardBaseProps,
} from '../types/card.types';

export interface ICard {
  teacherCard?: IntersectTeacherCardBaseProps;
  documentCard?: IntersectDocumentCardBaseProps;
}
