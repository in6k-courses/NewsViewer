import {Component, OnInit} from "@angular/core";
import {NewsService} from "../services/news.service";
import {Post} from "../models/post";
import {Tag} from "../models/tag";
import {Comment} from "../models/comment";
import {CommentService} from "../services/comment.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  posts: Post[];
  tags: Tag[];

  constructor(private newsService : NewsService, private comService: CommentService ) { }

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

  private deleteComment(comment: Comment, post: Post){
    this.comService.deleteComment(comment.id)
      .then(()=> this.posts = this.posts.filter(p =>{ if(p.id === post.id)return post.comments.filter(c=> c !== comment)}))
  }
}
