import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
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

  selectedPost: Post;
  posts: Post[];
  tags: Tag[];

  constructor(private newsService : NewsService,
              private comService: CommentService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllTags();
    this.getAllNews();
    // try {
    //   this.route.params
    //     .switchMap((params: Params) => params['id'])
    //     .subscribe(h => alert(h))
    // }finally {
    //
    // }
  }

  onSelect(post: Post) {
    this.selectedPost = post;
  }

  getAllNews(): void {
    this.newsService.getAllPosts().subscribe(posts => this.posts = posts);
  }

  private getAllTags() {
    this.newsService.getAllTags().subscribe(tags => this.tags = tags)
  }

  private gotoCategory(tag: Tag): void{
    alert(tag.title);
  }

  private deleteComment(comment: Comment, post: Post){
    this.comService.deleteComment(comment.id)
      .subscribe(()=> {post.comments = post.comments.filter(com => com !== comment)})
  }

  private deletePost(post: Post){
    this.newsService.deletePost(post.id)
      .subscribe(()=> {this.posts = this.posts.filter(p => p !== post)})
  }

  private createComment(title: string, post: Post): void {
    title = title.trim();
    if (!title) {return;}
    this.comService.createComment(title, post.id)
      .subscribe(comm => post.comments.push(comm))
  }

  private addLike(post: Post): void{
    this.newsService.addLike(post.id)
      .subscribe(newPost => post.likes = newPost.likes)
  }
}
