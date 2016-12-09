import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Tag} from "../models/tag";


@Injectable()
export class TagService {
  private tagUrl = 'api/tag';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor (private http: Http) {}

  create(title: string): Promise<Tag> {
    return this.http
      .post(this.tagUrl, JSON.stringify({title: title}), {headers: this.headers})
      .toPromise()
      .then(tag => tag.json())
      .catch(this.handleError);
  }

  getAllTags(): Promise<Tag[]> {
    return this.http
      .get(this.tagUrl)
      .toPromise()
      .then(response => response.json() as Tag[])
      .catch(this.handleError)
  }


  delete(id: number) {
    this.http.delete(this.tagUrl + "/" + id, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch()
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
