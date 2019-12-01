import { Injectable } from '@angular/core';
import { Livres } from './Livres';

@Injectable({
  providedIn: 'root'
})
export class LivService {


  public tabLivres:Livres[] = [
    new Livres(1000,'Harry Poter And The Order Of the Phoenix','../assets/1.jpg',20,new Date(2000, 8,13),true),
    new Livres(1001,'Gone With The Wind','../assets/2.jpg',15,new Date(2017, 4,15),true),
    new Livres(1002,'The Da Vinci Code','../assets/3.jpg',14,new Date(1994, 0,11),true),
    new Livres(1003,'The Great Gatsby ','../assets/4.jpg',16,new Date(1996, 2, 2),true),
    new Livres(1004,'Crime And Punishment','../assets/5.jpg',23,new Date(2016,11,15),false),
    
    
    ];

Effacer(identifiant:number):Livres[]
{
for( let i=0 ;i<this.tabLivres.length; i++){
        if(identifiant==this.tabLivres[i].identifiant)
        {
        this.tabLivres.splice(i,1);
        }
}
return this.tabLivres;
}


/* fonction qui ajout un livre a la liste des livres(bibliothèque) */
AjoutLivre(liv:Livres)
{
  this.tabLivres.push(liv); 
}

getid(identifiant : number):Livres
{
for( let i=0;i<this.tabLivres.length;i++)
{
if(identifiant==this.tabLivres[i].identifiant)
return this.tabLivres[i];
}
return null;
}

Modifier(identifiant:number,identif:number,libelle:String,photo:String,prix:number,datefab:Date,dispo:boolean)
{
let liv:Livres=this.getid(identifiant);
liv.identifiant=identif;
liv.libelle=libelle;
liv.photo=photo;
liv.prix=prix;
liv.datefab = new Date() ;
liv.dispo=dispo;
}




  constructor() { }
}
