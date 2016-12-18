import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import {Comment} from "../models/comment";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs";

@Injectable()
export class CommentService {
  private commentUrl = 'api/comment';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  deleteComment(id: number): Observable<void>{
    return this.http
      .delete(this.commentUrl + "/" + id, {headers: this.headers})
      .map(() => null)
      .catch(this.handleError)
  }

  createComment(title: string, pId: number): Observable<Comment>{
    return this.http
      .post(this.commentUrl,JSON.stringify({title: title, likes:0, postId: pId}), {headers: this.headers})
      .map(comment => comment.json())
      .catch(this.handleError)
  }

  private handleError(error: any): Observable<any> {
    return Observable.throw(error.json().error || 'Server error');
  }
}
