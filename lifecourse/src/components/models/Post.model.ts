export interface IPost {
  id: number;
  body: string;
  image: string;
  postDate: string;
  section: string;
  photo: IPhoto;
}

export interface IPhoto {
  id: number;
  url: string;
}
