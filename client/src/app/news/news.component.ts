import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import "rxjs/add/operator/switchMap";
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

  constructor(private newsService : NewsService,
              private comService: CommentService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllTags();
    this.getAllNews();
    this.route.params
      .switchMap((params: Params) => params['id'])
      .subscribe(h => alert(h))
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
      .then(()=> {post.comments = post.comments.filter(com => com !== comment)})
  }

  private createComm(title: string, post: Post): void{
    title = title.trim();
    if (!title) {return;}
    this.comService.createComment(title, post.id)
      .then(comm => post.comments.push(comm))
  }

  private addLike(post: Post): void{
    this.newsService.addLike(post.id)
      .then(newPost => post.likes = newPost.likes)
  }
}
