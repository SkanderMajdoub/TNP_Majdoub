import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
auth : string ;
mdp : string ;


  constructor(private lien:Router) { }

  onVerif(auth:string,mdp:string)
{

  if(this.auth != "skander" && this.mdp != "1234")
  this.lien.navigate(['/erreur']) ;
  else
  this.lien.navigate(['/presentation']);

}
  ngOnInit() {
  }

}
