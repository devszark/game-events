import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  gameStarted: number = 0;
  score: number = 0;
  @Output() emitedScore = new EventEmitter<number>();
  @Output() resetEvent = new EventEmitter<number>();
  myIntervalId;

  addScore(): void {
    this.score++;
    this.emitedScore.emit(this.score);
    console.log(`addScore: score=${this.score}`);
  }

  startGame(){
    if (this.gameStarted===1) return;
    this.gameStarted=1;
    // this.myIntervalId = setInterval(this.addScore, 1000);
    //zmienic na lambda function !!!!!!!
    this.myIntervalId = setInterval(() => {
      this.score++;
      this.emitedScore.emit(this.score);
      console.log(`addScore: score=${this.score}`);
    }, 1000);

    console.log(`startGame(): interval ID=${this.myIntervalId}`);
    console.log("startGame(): Game started !");
  }

  stopGame(){
    this.gameStarted=0;
    clearInterval(this.myIntervalId);
    console.log("stopGame(): Game stopped !");
  }

  resetGame(){
    this.stopGame();
    this.resetEvent.emit(1);
  }
  ngOnInit(){
    
  }
}
