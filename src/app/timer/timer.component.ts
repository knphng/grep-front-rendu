import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent implements OnInit {
    timePassed = 0;
    // test = moment().startOf('hour').fromNow();
    timeStart;
    timeStop;
    interval;
    isStart: boolean;

  constructor() { }

  ngOnInit() {
  }

    startTimer() {
        this.timeStart = new Date();
        this.interval = setInterval(() => {
            if (this.timePassed >= 0) {
                this.timePassed++;
            } else {
                this.timePassed = 0;
            }
        },1000);
    }

    stopTimer() {
        clearInterval(this.interval);
        this.timeStop = new Date();
    }

}
