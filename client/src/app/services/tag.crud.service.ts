import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Tag} from "../models/tag";
import {Observable} from "rxjs";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TagService {
  private tagUrl = 'api/tag';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor (private http: Http) {}

  create(title: string): Observable<Tag> {
    return this.http
      .post(this.tagUrl, JSON.stringify({title: title}), {headers: this.headers})
      .map(tag => tag.json())
      .catch(this.handleError);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http
      .get(this.tagUrl)
      .map(response => response.json() as Tag[])
      .catch(this.handleError)
  }


  delete(id: number): Observable<void> {
    return this.http.delete(this.tagUrl + "/" + id, {headers: this.headers})
      .map(() => null)
      .catch(this.handleError)
  }

  private handleError(error: any): Observable<any> {
    return Observable.throw(error.json().error || 'Server error');
  }
}
