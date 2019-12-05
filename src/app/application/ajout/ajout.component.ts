import { Component, OnInit } from '@angular/core';
import { Livres } from '../../Livres';
import {LivService} from '../../liv.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  liv :Livres ;
identifiant : number ;
libelle : string ;
photo : string ;
prix : number ;
dispo : boolean ;
  constructor(private LivService:LivService) { }


  /* function who takes the variables from HTML and adds them to the Livres Table" */
  onSubmit(f:NgForm)
  {
   if( (isNaN(this.identifiant)==true) )
  alert("Confirmer Votre Identifiant SVP ") ;
  else
  
if ( this.prix <0)
alert("Confirmer Votre Prix SVP") ;

  

  else
  {
    this.liv=new Livres(this.identifiant,this.libelle,this.photo,this.prix,new Date(),this.dispo);
    this.LivService.AjoutLivre(this.liv);
  
alert("Livre ajouté avec succès , voir la liste des livres pour confirmer") ;
  } 
}




  ngOnInit() {
  }

}
