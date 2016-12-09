import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NewsComponent} from "./news/news.component";
import {BestPostComponent} from "./bestpost/bestpost.component";
import {TagsComponent} from "./tags/tags.component";
import {NewpostComponent} from "./newpost/newpost.component";

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news',  component: NewsComponent },
  { path: 'best', component: BestPostComponent},
  { path: 'tag', component: TagsComponent},
  { path: 'post', component: NewpostComponent}
  // { path: 'best/:id', component: BestPostComponent},
  // { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
