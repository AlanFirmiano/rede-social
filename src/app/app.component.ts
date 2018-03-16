import { Component, Input } from '@angular/core';
import { Post } from './_models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  posts = [
    new Post(1,"Leo","asndaskjn ajsdhakjda",5),
    new Post(2,"Davi","asndaskjn ajsdhakjda",8),
    new Post(3,"Marcos","asndaskjn ajsdhakjda",2),
    new Post(4,"João","asndaskjn ajsdhakjda",13),
    new Post(5,"Alan","asndaskjn ajsdhakjda",23)
  ];
 
  
  title = 'app';
}
