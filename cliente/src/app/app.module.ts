import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { EncargadoComponent } from './components/encargado/encargado.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { MembresiasComponent } from './components/membresias/membresias.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EncargadoComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    CategoriasComponent,
    ClientesComponent,
    MembresiasComponent,
    ProductosComponent,
    RecuperarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }