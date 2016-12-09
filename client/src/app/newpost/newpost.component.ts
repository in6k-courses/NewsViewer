import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {PostService} from "../services/new.post.service";

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  constructor(private service: PostService, private router: Router, private location: Location) {
  }

  ngOnInit() {
  }

  create(title: string): void {
    this.service.create(title);
  }

  goBack(): void {
    this.location.back()
  }

}
