import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetalleNoticiaComponent } from './components/detalle-noticia/detalle-noticia.component'
import { ServicioAlClienteComponent } from './components/servicio-al-cliente/servicio-al-cliente.component' 

const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"inicio",component:InicioComponent},
  {path:"detalleNoticia/:id",component:DetalleNoticiaComponent},
  {path:"detalleNoticia",component:DetalleNoticiaComponent},
  {path:"ServicioAlCliente",component:ServicioAlClienteComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
