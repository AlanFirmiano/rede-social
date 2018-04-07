import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from '../../_models/post';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor(private service: AppService, private rota: Router) {

  }

  id_post: number;
  nomePessoa: string = "";
  texto: string = "";
  date:string = this.service.newDate();

  ngOnInit() {

  }

  addPost(event) {
    this.service.addPost(new Post(null, this.nomePessoa, this.texto, 0,this.date))
      .subscribe(data => {
        console.log(data);
        this.rota.navigateByUrl("posts");
      },
        error => console.log(error));

    this.limpar();
    this.rota.navigate['/posts'];
  }

  limpar() {
    this.id_post = undefined;
    this.nomePessoa = "";
    this.texto = "";
  }

}
