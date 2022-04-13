import { ReactChild } from 'react';

interface HistoryPushObj {
  pathname: string;
  hash?: string;
  search?: string;
}
export interface PropsChild {
  children: ReactChild;
}
export interface ISelectOptions {
  id: string | number;
  value: string | number;
  selected?: boolean;
}
export interface IRadioButton {
  label: string;
  name: string;
  checked?: boolean;
}
export interface ISwitch {
  label: string;
  checked?: boolean;
}
export interface ModalMenuOptions {
  image: string;
  option: string;
}
export interface AddedStyles {
  additionalStyles?: string;
  id?: string;
}
export interface PassedValues {
  value?: string;
}
export interface History {
  push: (obj: HistoryPushObj) => void;
}
export interface IBaseCard {
  icon: string;
}
export interface IDocument {
  title: string;
  description?: string;
  author: string;
  ranking?: number;
  image: string;
  tipo?: 'tarea' | 'examen' | 'trabajo' | 'otros';
}

export interface ITeacher {
  name: string;
  classDescription: string;
  hoursDictating: number;
  spectators: number;
  image: string;
}

export interface IRoundImage {
  id: string;
  imgSrc: string;
  name: string;
}
export interface IPost {
  _id: string;
  topic: string;
  tags?: string[];
  memberType: string;
  postType: 'query' | 'publication';
  date: string;
  content: string;
  graph_quantity: number;
  posted: string;
  author: IAuthor;
  hoursMinute: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IAuthor extends IUser {
  publication_number: number;
  valoration: number;
  memberType: string;
}

export interface IUser {
  _id: string;
  online: boolean;
  email: string;
  name: string;
  password: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ICommentGrid {
  id?: number;
  heading?: string;
  title: string;
  content?: string;
  author: string;
  time: string;
  etiqueta?: string;
  image: string;
  imagesub: string;
}

export interface IFlexForum extends ICommentGrid {
  contentStyle: string;
}

export interface IDownload {
  _id: number;
  topic: string;
  description: string;
}

export interface IGraphQLErrors {
  graphQLErrors: [{
    extensions: number;
    message: IErrorFields[];
    path: string[];
  }]
}

export interface IErrorFields {
  errors: string[];
  field: string;
}