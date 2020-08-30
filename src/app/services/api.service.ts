import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Post} from "../models/post.model";
import {Comment} from "../models/comment.model";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  durationInSeconds = 5;

  constructor(private http: HttpClient, private _snackbar: MatSnackBar) {
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
        this._snackbar.open('Post successfully created', "Close", {
          duration: this.durationInSeconds * 1000,
          panelClass: ['success-alert'],
        })
      });
    form.reset();
  }
}
