import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app.routing.module";
import {NewsComponent} from "./news/news.component";
import {NewsService} from "./services/news.service";
import {BestPostComponent} from "./bestpost/bestpost.component";
import {TagsComponent} from "./tags/tags.component";
import {TagService} from "./services/tag.crud.service";
import {NewpostComponent} from "./newpost/newpost.component";
import {PostService} from "./services/post.service";
import {CommentService} from "./services/comment.service";

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    BestPostComponent,
    TagsComponent,
    NewpostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [NewsService, TagService, PostService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
