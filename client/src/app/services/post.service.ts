import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Post} from "../models/post";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs";


@Injectable()
export class PostService {
  private postUrl = 'api/posts';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor (private http: Http) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get(this.postUrl)
      .map(response => response.json() as Post[])
      .catch(this.handleError);
  }

  create(title: string): void {
    if (!title){return;}
    this.http
      .post(this.postUrl, JSON.stringify({title: title}), {headers: this.headers})
      .toPromise()
  }

  private handleError(error: any): Observable<any> {
    return Observable.throw(error.json().error || 'Server error');
  }
}
