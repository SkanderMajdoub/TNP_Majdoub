import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Livres } from '../../Livres';
import {LivService} from '../../liv.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

libelle : string ;
identifiant : number ;
dispo : boolean ;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.identifiant = this.activatedRoute.snapshot.params['identifiant'];
    this.libelle = this.activatedRoute.snapshot.params['libelle'];
    this.dispo = this.activatedRoute.snapshot.params['dispo'];
   
  }
  onRetour()
  {
  this.router.navigate(['/articles']);
  }
}
