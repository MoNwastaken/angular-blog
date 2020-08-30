import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getPostsURL = "https://jsonplaceholder.typicode.com/posts";
  getCommentsURL: string;
  addPostsURL = "https://jsonplaceholder.typicode.com/posts";
  posts: Post[] = [];
  comments: Comment[] = [];
  dataAvailable: boolean = false;
  commentsAvailable: boolean = false;

  constructor(private http: HttpClient) {
  }

  getPosts() {
    this.http.get<any>(this.getPostsURL).subscribe(res => {
      this.posts = res;
      this.dataAvailable = true;
    }, (err) => {
      console.log(err);
    });
  }

  getComments(postID) {
    this.getCommentsURL = "https://jsonplaceholder.typicode.com/posts/";
    this.getCommentsURL += postID;
    this.getCommentsURL += '/comments';
    this.http.get<any>(this.getCommentsURL).subscribe(res => {
      this.comments = res;
      this.commentsAvailable = true;
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

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
