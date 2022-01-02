export class List {
  id?: string;
  title?: string;
  type?: string;
  genre?: string;
  content?: MovieContent[] | any;
}

export class MovieContent {
  contentId?: string
}