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
  date = new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
  
  constructor(private service:AppService ,private router:Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getPosts().subscribe(data=>{
      this.posts = data;
      console.log(data);
    },
      error=>console.log(error));
  }

  removePost(post:Post){
    this.service.removePost(post).subscribe(data=>{
      console.log(data);
      this.getAll();
    },
    error=>{
      console.log(error);
      console.log("ID : "+post.id);
    });
  }

  recebeuLike(post:Post){
    this.service.recebeuLike(post).subscribe(data=>{
      console.log(data);
      this.getAll();
    },
    error=>console.log(error));
  }

}