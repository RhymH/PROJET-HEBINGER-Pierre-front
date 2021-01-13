import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Articles} from '../modules/models/articles-interface';
import {AddArticles, DelAllArticles, DelArticles} from '../modules/actions/article-action';
import {ArticlesState} from '../modules/states/articles-state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private store: Store) { }

  listArticles: Observable<Articles[]>;
  ArticlesNumber: Observable<number>;


  ngOnInit(): void {
    this.listArticles = this.store.select(state => state.listArticles.articles);
    this.ArticlesNumber = this.store.select(ArticlesState.getNbArticless);
  }


  OnClick(item: Articles) {
    this.addArticle(item.nom, item.details, item.categorie, item.prix, item.image);
  }

  addArticle(nom: string, details: string, categorie: string, prix: string, image: string) {
    this.store.dispatch(new DelArticles({ nom, details, categorie, prix, image }));
  }

  OnBuy(){
    this.store.dispatch(new DelAllArticles());
  }
}
