import { Component } from '@angular/core';

@Component({
  selector: 'app-analog',
  template: `
    <div class="clock">
      <div class="analog-clock">
        <div class="hour hand" [ngStyle]="{'transform': hourDeg}"></div>
        <div class="minute hand" [ngStyle]="{'transform': minDeg}"></div>
        <div class="second hand" [ngStyle]="{'transform': secDeg}"></div>
        <div class="center-circle"></div>
      </div>
      <div class="digital-clock">
      {{setTime(getHours)}}:{{setTime(getMinutes)}}:{{setTime(getSeconds)}}
      </div>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');

    .analog-clock {
      position: relative;
      margin: 100px auto 0;
      width: 200px;
      height: 200px;
      background-color: aliceblue;
      border-radius: 50%;
    }

    .hand {
      position: absolute;
      left: 50%;
      width: 1px;
      height: 100px;
      /* 자바스크립트에 의해 덮어써진다. */
      /* transform: translate3d(-50%, 0, 0); */
      transform-origin: 100% 100%;
    }

    .hour {
      background-color: #f44336;
    }

    .minute {
      background-color: #3f51b5;
    }

    .second {
      background-color: #9e9e9e;
    }

    .center-circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      width: 12px;
      height: 12px;
      background-color: black;
      border-radius: 50%;
    }

    .digital-clock {
      position: absolute;
      top: 350px;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
      font-size: 2em;
      font-family: 'Source Code Pro', monospace;
    }
  `]
})
export class AnalogComponent {
  //transform: rotate(45deg);
  getHours: number;
  getMinutes: number;
  getSeconds: number;

  hourDeg: string;
  minDeg: string;
  secDeg: string;
  

  constructor() {
    setInterval(this.frameTime.bind(this), 100);
  }

  setTime(time: number) {
    return time < 10 ? '0' + time : time
  }
  
  frameTime() {
    this.getHours = new Date().getHours();
    this.getMinutes = new Date().getMinutes();
    this.getSeconds = new Date().getSeconds();
    
    this.hourDeg = `rotate(${(this.getHours % 12) * 30 + (this.getMinutes * 0.5) + (this.getSeconds * (0.5 / 60))}deg)`;
    this.minDeg = `rotate(${this.getMinutes * 6 + this.getSeconds * 0.1}deg)`;
    this.secDeg = `rotate(${this.getSeconds * 6}deg)`;
  }
}
