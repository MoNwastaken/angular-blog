import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  id: number;

  constructor(public api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (!this.api.dataAvailable) {
      this.api.getPosts();
    }
    this.id = this.route.snapshot.params['id'];
    this.api.getComments(this.id);
  }

}
