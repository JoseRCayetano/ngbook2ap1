import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  /**
   * Especifica los componentes definidos en el módulo.
   * Hay que declarar los componentes aqui antes de usarlos.
   */
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent
  ],
  /**
   * Describe las dependencias del módulo
   */
  imports: [
    BrowserModule, //Esta se importa porque estamos creando una app web
    FormsModule,
    HttpModule
  ],
  providers: [],
  /**
   * Le dice a angular que cuando  este modulo sea usado para arrancar la app, debemos cargar AppComponent  como el componente top-level.
   */
  bootstrap: [AppComponent]
})
export class AppModule { }
