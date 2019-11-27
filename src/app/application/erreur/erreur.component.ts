import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erreur',
  templateUrl: './erreur.component.html',
  styleUrls: ['./erreur.component.css']
})
export class ErreurComponent implements OnInit {

  nom="Nom d'utilisateur" ;
  mdp="Mot de passe"  ;
  constructor(private lien:Router) { }
onReturn()
{

  this.lien.navigate(['/authentification']) ;


}
  ngOnInit() {
  }

}
