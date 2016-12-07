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

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    BestPostComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [NewsService, TagService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
