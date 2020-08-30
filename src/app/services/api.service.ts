import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Post} from "../models/post.model";
import {Comment} from "../models/comment.model";

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

  submitPost(form: NgForm) {
    const value = form.value;
    let newPost: Post = new Post(value.userid, 1, value.title, value.content);

    this.http
      .post(this.addPostsURL, newPost).subscribe(res => {
        console.log(res);
      });
    form.reset();
  }
}
