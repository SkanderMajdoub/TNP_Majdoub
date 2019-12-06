export class Livres
{
    _identifiant: number;
    _libelle:String;
    _photo:String;
    _prix: number;
    _datefab: Date;
    _dispo: boolean;

    constructor(identifiant:number,libelle:String,photo:String,prix:number,datefab:Date,dispo:boolean)
    {
      this._identifiant =identifiant;
      this._libelle =libelle ;
      this._photo = photo;
      this._prix = prix;
      this._datefab = datefab;
      this._dispo = dispo;
  
    }

    public get identifiant(): number 
    {
        return this._identifiant;
    }
    
    public set identifiant(value: number) 
    {
        this._identifiant = value;
    }
      
    public get libelle():String 
    {
        return this._libelle;
    }
      
    public set libelle(value:String) 
    {
        this._libelle = value;
    }
    
    
    public get photo():String 
    {
        return this._photo;
    }
      
    public set photo(value:String) 
    {
        this._photo = value;
    }
      
    public get prix(): number 
    {
        return this._prix;
    }
      
    public set prix(value: number) 
    {
        this._prix = value;
    }
      
    public get datefab(): Date 
    {
        return this._datefab;
    }
      
    public set datefab(value: Date) 
      {
        this._datefab = value;
      }
      
      public get dispo(): boolean 
      {
        return this._dispo;
      }
      public set dispo(value: boolean) {
        this._dispo = value;
      }
    
    

}   