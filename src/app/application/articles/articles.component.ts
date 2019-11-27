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
  constructor(private LivService:LivService) { }

  ngOnInit() {
    this.tabLivres = this.LivService.tabLivres;
  }

}
