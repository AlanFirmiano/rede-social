import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from '../../_models/post';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  
  post:Post;
  nomePessoa="";
  texto="";
  id:number;
  inscricao: Subscription;
  constructor(private service: AppService, private rota: Router,private active:ActivatedRoute) {
    
  }

  ngOnInit() {
    
    this.inscricao = this.active.params.subscribe(
      (data) =>{
        this.service.getPost(data['id']).subscribe(data => {
          this.post = data;
          this.nomePessoa = this.post.nomePessoa;
          this.texto = this.post.texto;
          console.log(data);
          
        },
          error => console.log(error+"ERRO"));
      },
      (err)=>{
        console.log("err");
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  cancelar(){
    this.rota.navigateByUrl("posts");
  }

  getPost(id) {
    this.service.getPost(id).subscribe(data => {
      this.post = data;
      console.log(data);
    },
      error => console.log(error+"ERRO"));
  }
  editarPost(post:Post){
    this.post.nomePessoa = this.nomePessoa;
    this.post.texto = this.texto;
    this.service.editarPost(post).subscribe(data => {
      console.log(data);

    this.rota.navigateByUrl("posts");
    },
      error => console.log(error));
  }
}
