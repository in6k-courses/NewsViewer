import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";
import {Post} from "../models/post";
import {Router} from "@angular/router";
import {NewsService} from "../services/news.service";

@Component({
  selector: 'app-bestpost',
  templateUrl: './bestpost.component.html',
  styleUrls: ['./bestpost.component.css']
})
export class BestPostComponent implements OnInit {

  post: Post;

  constructor(private router: Router,
              private service: NewsService,
  private location: Location) { }

  ngOnInit() {
    this.getBestPost();
  }

  private getBestPost(){
    this.service.getBestPost().subscribe(resp =>this.post = resp);
  }

  goBack(): void {
    this.location.back();
  }

}
