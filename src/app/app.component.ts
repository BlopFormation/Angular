import { Component, OnInit } from '@angular/core';

import {Magasin} from './models/magasin';
import {Produit} from './models/produit';
import {current} from 'codelyzer/util/syntaxKind';
import {ActivatedRoute} from '@angular/router';
import {ProductRepositoryService} from './product/services/product-repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  Product: Produit;

  constructor(private repo: ProductRepositoryService){}
  ngOnInit(): void {
    this.Product = this.repo.GetProduitParCodeBar("cb0");
  }
}
