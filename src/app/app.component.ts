import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-cwicz2';

  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onEmitedScore(score: number){
    if (score%2===0) {
      this.evenNumbers.push(score);
    } else {
      this.oddNumbers.push(score);
    }
    console.log("AppComponent:onEmitedScore() - score received: "+score+", "+JSON.stringify(this.evenNumbers));
  }

  onResetEvent(n: number){
    this.evenNumbers = [];
    this.oddNumbers = [];
  }
}
