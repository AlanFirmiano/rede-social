import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../_models/post';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  
  @Output() newPost = new EventEmitter();
  
  texto:string ="";
  

  postar(event){
    event.preventDefault();
    this.newPost.emit(
      new Post(6,"TESTE",this.texto,0)
    );
  }
  
  constructor() { }

  ngOnInit() {
  }
  
  
}
