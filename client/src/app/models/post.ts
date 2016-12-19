import {Comment} from "./comment";

export class Post {
  id : number;
  title: string;
  likes:number;
  comments: Comment[]
}
