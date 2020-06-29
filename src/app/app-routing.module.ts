import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PaginaProtegidaComponent } from './components/pagina-protegida/pagina-protegida.component';
import { CallbackComponent } from './components/callback/callback.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { titulo: 'Inicio' } },
  { path: 'productos', component: ProductosComponent, data: { titulo: 'Productos' } },
  { path: 'protegida', component: PaginaProtegidaComponent, data: { titulo: 'Página Protegida' } },
  { path: 'callback', component: CallbackComponent, data: { titulo: 'Callback' } },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
