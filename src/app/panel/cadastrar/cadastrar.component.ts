import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../../_models/post';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor(private service:AppService,private rota:Router){

  }
  id_post: number;
  nomePessoa: string = "";
  texto: string = "";


  onSubmit(event){
    this.service.addPost(new Post(this.id_post,this.nomePessoa,this.texto,0));
    this.limpar();
    this.rota.navigate(['/posts']);
  }

  limpar(){
    this.id_post=undefined;
    this.nomePessoa="";
    this.texto="";
  }
  ngOnInit() {
  }

}
