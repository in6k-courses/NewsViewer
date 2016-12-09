import {Component, OnInit} from "@angular/core";
import {TagService} from "../services/tag.crud.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {Tag} from "../models/tag";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  private tags: Tag[];

  constructor(private tagService: TagService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.getAllTags()
  }

  private getAllTags() {
    this.tagService.getAllTags().then(tags => this.tags = tags)
  }

  createTag(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.tagService.create(title)
      .then(tag => {
        this.tags.push(tag);
      });
  }

  goBack(): void {
    this.location.back();
  }

}
