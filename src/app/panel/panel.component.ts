import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../_models/post';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PostComponent implements OnInit {
  
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
