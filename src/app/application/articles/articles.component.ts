import { Component, OnInit } from '@angular/core';
import { Livres } from '../../Livres';
import {LivService} from '../../liv.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  tabLivres:Livres[];
  id : number ;
  favoris=[]  ;

  //identifiant : number ;
  constructor(private LivService:LivService) { }

  ngOnInit() {
    this.tabLivres = this.LivService.tabLivres;
  }
  onEffacer(identifiant:number)
{
this.tabLivres=this.LivService.Effacer(identifiant);
}



onFavoris(libelle:string)
{

this.favoris[this.favoris.length]=libelle ;
}

}
