import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Post} from "../models/post";


@Injectable()
export class PostService {
  private postUrl = 'api/post';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor (private http: Http) {}

  getAllPost(): Promise<Post[]> {
    return this.http.get(this.postUrl)
      .toPromise()
      .then(response => response.json() as Post[])
      .catch(this.handleError);
  }

  create(title: string): void {
    this.http
      .post(this.postUrl, JSON.stringify({title: title}), {headers: this.headers})
      .toPromise()
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
