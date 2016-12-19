import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Post} from "../models/post";
import {Tag} from "../models/tag";
import {Observable} from "rxjs";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class NewsService {
  private postUrl = 'api/posts';  // URL to web API
  private tagUrl = 'api/tag';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor (private http: Http) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get(this.postUrl)
      .map(response => response.json() as Post[])
      .catch(this.handleError);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http
      .get(this.tagUrl)
      .map(response => response.json() as Tag[])
      .catch((err: any) => this.handleError(err))
  }

  getBestPost(): Observable<Post>{
    return this.http
      .get(this.postUrl + "/best")
      .map(resp => resp.json() as Post)
      .catch((err: any) => this.handleError(err))
  }

  addLike(id: number): Observable<Post> {
    return this.http.patch(this.postUrl + "/" + id + "/like")
      .map(post => post.json())
      .catch(this.handleError)
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete(this.postUrl + "/" + id, {headers: this.headers})
      .map(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    return Observable.throw(error.json().error || 'Server error');
  }
}
