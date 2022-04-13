import { ITeacher, IDocument } from '@clean/presentation/ts/interfaces/app.interfaces';

export interface IGrid {
  teacherCards?: ITeacher[]
  documentCards?: IDocument[]
}
