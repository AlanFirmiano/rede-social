import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../_models/post';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  
  
  @Input() posts: Post[] ;

  constructor() { }

  ngOnInit() {
  }
  
  contadorLikes(post:Post){
    post.qtdLikes += 1;
    
    this.recebeuLike(post);
  }

  recebeuLike(dado){
    console.log(dado);
  }
  
}
