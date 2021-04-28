import { Component, OnInit } from '@angular/core';
import { Score } from './Objets/score';
import { Tetromino } from './Objets/tetromino';

@Component({
  selector: 'app-tetris',
  templateUrl: './tetris.component.html',
  styleUrls: ['./tetris.component.css']
})
export class TetrisComponent implements OnInit {

  public nextTetromino:any;
  public score:any;

  constructor() { }

  ngOnInit(): void {
  }

  nextTetrominoChangedHandler(nextTetromino: Tetromino){
    this.nextTetromino = nextTetromino;
  }

  scoreChangedHandler(score:Score){
    this.score = score;
  }

}
