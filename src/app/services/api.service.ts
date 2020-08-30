import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getPostsURL = "https://jsonplaceholder.typicode.com/posts";
  getCommentsURL = "https://jsonplaceholder.typicode.com/posts/1/comments";
  addPostsURL = "https://jsonplaceholder.typicode.com/posts";
  posts: Post[] = [];

  constructor(private http: HttpClient) {
  }

  getPosts() {
    this.http.get<any>(this.getPostsURL).subscribe(res => {
      this.posts = res;
    }, (err) => {
      console.log(err);
    });
  }
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
