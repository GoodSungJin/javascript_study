import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  template: `
    <div class="stop-watch">
      <div class="display">{{minView}}:{{secView}}:{{msecView}}</div>
      <button class="control" (click)="toggleStart(button)" #button>Start</button>
    </div>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');

    .stop-watch {
      font-family: 'Source Code Pro', monospace;
      text-align: center;
      font-size: 3em;
      padding: 30px;
    }

    .control {
      width: 300px;
      padding: 5px;
      margin-top: 15px;
      font-size: 36px;
      font-weight: bold;
      border: 2px solid #f44336;
      border-radius: 4px;
      cursor: pointer;
      outline: none;
    }

    .control:hover {
      background: #f44336;
      color: aliceblue;
    }
  `]
})

export class StopWatchComponent{
  setTime: any;
  msec = 100;
  sec = 100;
  min = 100;

  msecView = '00';
  secView = '00';
  minView = '00';
  
  toggleStart(button: HTMLButtonElement) {
    if (button.textContent === "Start") {
      button.textContent = "Stop";
      
      this.setTime = setInterval(this.frameTime.bind(this), 10);
    } else {
      button.textContent = "Start";

      this.setTime = clearInterval(this.setTime);
    }
  }

  frameTime() {
    this.msec++;
    this.msecView = `${this.msec}`.substring(1);

    if (this.msec === 200) {
      this.msec = 100;
      this.sec++;
      this.secView = `${this.sec}`.substring(1);
    }
    if (this.sec === 60) {
      this.sec = 0;
      this.min++;
      this.minView = `${this.min}`.substring(1);;
    }
  }
}
