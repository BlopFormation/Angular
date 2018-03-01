import { Injectable } from '@angular/core';
import {Produit} from '../../models/produit';

@Injectable()
export class ProductRepositoryService {

  constructor() { }

  GetProduitParCodeBar(cb: string): Produit{
    let storage = JSON.parse(localStorage.getItem("magasin"));
    let retour: Produit = null;

    storage.forEach((item) => {
      let produit: Produit = new Produit(item.key);
      if(produit.CodeBar == cb){
        retour = produit;
      }
    });
    return retour;
  }

}
