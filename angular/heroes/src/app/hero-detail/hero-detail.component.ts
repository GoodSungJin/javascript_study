import { Component, Input } from '@angular/core';
import { Hero } from '../hero.interface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name | uppercase}} Details</h2>
      <div><span>id: </span>{{hero.id}}</div>
      <div>
        <label>name:
          <input [(ngModel)]="hero.name" placeholder="name"/>
        </label>
      </div>
      <button (click)="goBack()">go back</button>
    </div>
  `,
  styles: []
})
export class HeroDetailComponent  {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  
  goBack(): void {
    this.location.back();
  }
}
