import { Component, OnInit } from '@angular/core';
import { emojisplosion, emojisplosions } from 'emojisplosion';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  cancel: any;

  constructor() { }

  ngOnInit() {
    // Just one explosion
    emojisplosion();

    // Start continuous explosions in 10 secs
    let countDownDate = new Date();
    countDownDate = new Date(countDownDate.getTime() + 1000 * 10);

    // Update the count down every 1 second
    const x = setInterval(() => {

      // Get todays date and time
      const now = new Date().getTime();

      // Find the difference between now and the count down date
      const countDown = +countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
      const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
      console.log(now, 'now', 'countDownDate', countDownDate, 'countDown', countDown, 'days', days);

      // Output the result in an element with id="demo"
      document.getElementById('demo').innerHTML = '&nbsp;&nbsp;&nbsp;EXPLODING will commence in ' + days + 'd ' + hours + 'h '
        + minutes + 'm ' + seconds + 's ';

      // If the count down is over then start continuous explosions
      if (countDown < 0) {
        clearInterval(x);
        document.getElementById('demo').innerHTML = '&nbsp;&nbsp;&nbsp;EXPLODING NOW !!!';
        // Commence explosions!
        const { cancel } = emojisplosions();
      }
    }, 1000);

  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave aemojis page');

    // ...but stop after two seconds.
    setTimeout(this.cancel, 200);
  }

}
