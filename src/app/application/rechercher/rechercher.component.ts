import { Component, OnInit } from '@angular/core';
import { Livres } from '../../Livres';
import {LivService} from '../../liv.service';

@Component({
  selector: 'app-rechercher',
  templateUrl: './rechercher.component.html',
  styleUrls: ['./rechercher.component.css']
})
export class RechercherComponent implements OnInit {
  tabLivres:Livres[];
  prix:number ;
  constructor(private LivService:LivService) { }

  ngOnInit() {
    this.tabLivres = this.LivService.tabLivres;
  }

}
