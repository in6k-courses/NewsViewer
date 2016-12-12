import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";

@Injectable()
export class CommentService {
  private commentUrl = 'api/comment';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  deleteComment(id: number): Promise<void>{
    return this.http
      .delete(this.commentUrl + "/" + id, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
