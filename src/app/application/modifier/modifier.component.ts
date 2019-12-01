import { Component, OnInit } from '@angular/core';
import { Livres } from '../../Livres';
import {LivService} from '../../liv.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  tabLivres:Livres[];
  identifiant:number ;
  identif : number ;
  libelle : string ;
  photo : string ;
  prix : number ;
  datefab : Date ;
  dispo : boolean ;


  constructor(private LivService:LivService) { }


Modif()
{
  if( (isNaN(this.identif)==true) || (this.prix < 0))
  alert("Confirmer Votre champs SVP ") ;
else
{
this.LivService.Modifier(this.identifiant,this.identif,this.libelle,this.photo,this.prix,this.datefab,this.dispo);
alert("Livre Modifié avec succès , Voir la liste des livres pour Confirmer ") ;  
}

}





  ngOnInit() {
    this.tabLivres = this.LivService.tabLivres;
  }

}
