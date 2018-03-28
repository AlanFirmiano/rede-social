import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { Post } from '../../_models/post';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  posts: Post[];
   
  constructor(private service:AppService ,private router:Router) { }

  ngOnInit() {
    this.posts = this.service.getPosts();
  }
  removePost(post:Post){
    this.service.removePost(post);
  }

  recebeuLike(post:Post){
    this.service.recebeuLike(post);
  }

}