import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './application/authentification/authentification.component';
import { MenuComponent } from './application/menu/menu.component';
import { PresentationComponent } from './application/presentation/presentation.component';
import { ErreurComponent } from './application/erreur/erreur.component';
import { ContacterComponent } from './application/contacter/contacter.component';
import { ArticlesComponent } from  './application/articles/articles.component';
import { DetailsComponent } from './application/details/details.component';
const routes: Routes = [
  {path :'menu',component:MenuComponent},
  {path:'authentification', component:AuthentificationComponent},
  {path:'presentation',component:PresentationComponent },
  {path:'erreur',component:ErreurComponent},
  {path: 'contacter',component:ContacterComponent},
  {path: 'articles',component:ArticlesComponent},
  {path: 'articles/:identifiant/:libelle/:dispo' , component:DetailsComponent},
  {path:'', redirectTo:'authentification', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
