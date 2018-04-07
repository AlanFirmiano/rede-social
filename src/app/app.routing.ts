import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { ListarComponent } from './panel/listar/listar.component';
import { CadastrarComponent } from './panel/cadastrar/cadastrar.component';
import { EditarComponent } from './panel/editar/editar.component';


const APP_ROUTES: Routes =[
    {path: "", redirectTo:"/posts", pathMatch:"full"},
    {path: 'posts', component: ListarComponent},
    {path: 'adicionar', component: CadastrarComponent},
    {path: 'posts/editar/:id', component: EditarComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
  })
  export class routing {
  
  }