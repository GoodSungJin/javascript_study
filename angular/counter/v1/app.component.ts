import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <button class="increase" (click)="increase()">+</button>
      <div class="counter">{{count}}</div>
      <button class="decrease" (click)="decrease()">-</button>
    </div>
  `,
  styles: [`
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 130px;
      margin: 20px auto;
      font-size: 24px;
      color: #3f51b5;
    }
    button {
      padding: 5px 10px;
      font-size: 24px;
      border-radius: 5px;
      color: #3f51b5;
      border-color: #3f51b5;
      outline: none;
      cursor: pointer;
    }
  
    .counter {
      width: 50px;
      text-align: center;
    }
  `]
})

export class AppComponent {
  count = 0;

  decrease() {
    return this.count = this.count > 0 ? --this.count : 0;
  }

  increase() {
    return ++this.count;
  }
}