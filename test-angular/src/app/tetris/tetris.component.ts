import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GrilleComponent } from './grille/grille.component';
import { Score } from './Objets/score';
import { Tetromino } from './Objets/tetromino';

@Component({
  selector: 'app-tetris',
  templateUrl: './tetris.component.html',
  styleUrls: ['./tetris.component.css']
})
export class TetrisComponent implements OnInit,AfterViewInit  {

  public nextTetromino:any;
  public score:any;
  public fps:any;

  @ViewChild(GrilleComponent)
  private grille: any;

  constructor() {
    this.fps = 60;
  }

  ngAfterViewInit(): void {
    setInterval(()=> this.gameLoop(), 1000/this.fps);
  }

  ngOnInit(): void {
  }

  private gameLoop(){
    this.grille.draw();
  }

  nextTetrominoChangedHandler(nextTetromino: Tetromino){
    this.nextTetromino = nextTetromino;
  }

  scoreChangedHandler(score:Score){
    this.score = score;
  }

}
