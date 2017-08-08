import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: '../heroes/heroes.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService:HeroesService
  ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
    this.heroes = this._heroesService.buscarHeroes( params.q );
    console.log(this.heroes.length);
  });
  }

}
