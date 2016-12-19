import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {Post} from "../models/post";
import {Subject, Observable} from "rxjs";
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-search-post',
  templateUrl: './search-post.component.html',
  styleUrls: ['./search-post.component.css'],
  providers: [PostService]
})
export class SearchPostComponent implements OnInit {

  private searchTerms = new Subject<string>();
  searchPosts: Observable<Post[]>;

  constructor(private service: PostService) { }

  ngOnInit() {

    this.searchPosts = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.service.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Post[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Post[]>([]);
      });
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

}
