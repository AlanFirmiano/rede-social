import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { routing } from './app.routing';
import { ListarComponent } from './panel/listar/listar.component';
import { CadastrarComponent } from './panel/cadastrar/cadastrar.component';
import { AppService } from './app.service';
import { EditarComponent } from './panel/editar/editar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TimelineComponent,
    ListarComponent,
    CadastrarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
