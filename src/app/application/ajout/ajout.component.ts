import { Component, OnInit } from '@angular/core';
import { Livres } from '../../Livres';
import {LivService} from '../../liv.service';

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

  ajout()
  {
  
    this.liv=new Livres(this.identifiant,this.libelle,this.photo,this.prix,new Date(),this.dispo);
    this.LivService.AjoutLivre(this.liv);
  


  }




  ngOnInit() {
  }

}
