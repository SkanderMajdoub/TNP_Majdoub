import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './application/authentification/authentification.component';
import { MenuComponent } from './application/menu/menu.component';
import { PresentationComponent } from './application/presentation/presentation.component';
import { ErreurComponent } from './application/erreur/erreur.component';
import { ContacterComponent } from './application/contacter/contacter.component';
import { ArticlesComponent } from  './application/articles/articles.component';
import { DetailsComponent } from './application/details/details.component';
import { AjoutComponent } from './application/ajout/ajout.component';
import { RealisateurPipe } from './realisateur.pipe';
import { RechercherComponent } from './application/rechercher/rechercher.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    MenuComponent,
    PresentationComponent,
    ErreurComponent,
    ContacterComponent,
    ArticlesComponent,
    DetailsComponent,
    AjoutComponent,
    RealisateurPipe,
    RechercherComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
