import {Component, OnInit} from "@angular/core";
import {NewsService} from "../services/news.service";
import {Post} from "../models/post";
import {Tag} from "../models/tag";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  posts: Post[];
  tags: Tag[];

  constructor(private newsService : NewsService) { }

  ngOnInit() {
    this.getAllTags();
    this.getAllNews();
  }

  getAllNews(): void {
    this.newsService.getAllPost().then(posts => this.posts = posts);
  }

  private getAllTags() {
    this.newsService.getAllTags().then(tags => this.tags = tags)
  }

  private gotoCategory(tag: Tag): void{
    alert(tag.title);
  }
}
