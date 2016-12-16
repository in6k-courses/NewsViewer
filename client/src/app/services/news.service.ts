import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Post} from "../models/post";
import {Tag} from "../models/tag";


@Injectable()
export class NewsService {
  private postUrl = 'api/posts';  // URL to web API
  private tagUrl = 'api/tag';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor (private http: Http) {}

  getAllPost(): Promise<Post[]> {
    return this.http.get(this.postUrl)
      .toPromise()
      .then(response => response.json() as Post[])
      .catch(this.handleError);
  }

  getAllTags(): Promise<Tag[]> {
    return this.http
      .get(this.tagUrl)
      .toPromise()
      .then(response => response.json() as Tag[])
      .catch(this.handleError)
  }

  getBestPost(): Promise<Post>{
    return this.http
      .get(this.postUrl + "/best")
      .toPromise()
      .then(resp => resp.json() as Post)
      .catch(this.handleError)
  }

  addLike(id: number): Promise<Post> {
    return this.http.patch(this.postUrl + "/" + id + "/like")
      .toPromise()
      .then(post => post.json())
      .catch(this.handleError)
  }

  private deletePost(id: number): Promise<void> {
    return this.http.delete(this.postUrl + "/" + id, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
