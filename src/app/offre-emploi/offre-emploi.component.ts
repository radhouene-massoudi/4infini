import { Component, OnInit } from '@angular/core';
import {Emploi} from "../core/model/article";

@Component({
  selector: 'app-offre-emploi',
  templateUrl: './offre-emploi.component.html',
  styleUrls: ['./offre-emploi.component.css']
})
export class OffreEmploiComponent implements OnInit {
  nboffre=0;
  entreprise="";
  listeEmploi:Emploi[]=[
    {reference: 'ref', titre: "T-shirt 1", entreprise: 'esprit', etat: true},
    {reference: 'ref1', titre: "1", entreprise: 'vermeg', etat: false},
    {reference: 'ref2', titre: "T-shirt 3", entreprise: 'sofrcom', etat: false},
    {reference: 'ref3', titre: "T-shirt 4", entreprise: 'trutix', etat: true},

  ];
  constructor() { }

  ngOnInit(): void {
  }
Bilan(){
    for(let i=0;i<this.listeEmploi.length;i++){
      if(this.listeEmploi[i].etat==true){
        this.nboffre++;
      }
    }
}
}
