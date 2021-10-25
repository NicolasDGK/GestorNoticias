import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetalleNoticiaComponent } from './components/detalle-noticia/detalle-noticia.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoticiaCardComponent } from './components/noticia-card/noticia-card.component';
import { ServicioAlClienteComponent } from './components/servicio-al-cliente/servicio-al-cliente.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DetalleNoticiaComponent,
    NavbarComponent,
    NoticiaCardComponent,
    ServicioAlClienteComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
