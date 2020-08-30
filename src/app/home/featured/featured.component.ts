import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getPosts();
  }

}
