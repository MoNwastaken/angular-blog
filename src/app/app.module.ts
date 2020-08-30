import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturedComponent } from './home/featured/featured.component';
import { PostsComponent } from './home/posts/posts.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PostComponent } from './post/post.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  { path: '', component:HomeComponent, pathMatch: 'full' },
  { path: ':id', component: PostComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeaturedComponent,
    PostsComponent,
    HomeComponent,
    LoadingSpinnerComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
