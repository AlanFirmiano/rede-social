import { Component, Input } from '@angular/core';
import { Post } from './_models/post';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Facetruck';
  constructor(private service:AppService, private router:Router){

  }
}
