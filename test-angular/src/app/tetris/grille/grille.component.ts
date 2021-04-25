import {Component, HostListener, Inject, OnInit} from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import {Grid} from '../Objets/grid';
import { Tetromino, TetrominoI, TetrominoJ, TetrominoL, TetrominoO, TetrominoS, TetrominoT, TetrominoZ } from '../Objets/tetromino';

@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.css']
})
export class GrilleComponent implements OnInit {
  public grid : Grid;
  public lines: number = 20;
  public columns: number = 10;
  public currentTetromino:Tetromino;
  public nextTetromino:Tetromino;

  constructor() {
    this.grid = new Grid(0,0);
    this.currentTetromino = this.randomTetromino();
    this.nextTetromino = this.randomTetromino();
  }

  async ngOnInit() {

    this.grid = new Grid(this.lines,this.columns);

    this.grid.display(this.currentTetromino);

    setInterval(()=>{
      this.currentTetromino.checkAndMoveDown(this.grid);
      this.grid.display(this.currentTetromino);
    },1000);
  }

  onArrowLeft(){
    this.currentTetromino.checkAndMoveLeft(this.grid);
    this.grid.display(this.currentTetromino);
  }

  onArrowRight(){
    this.currentTetromino.checkAndMoveRight(this.grid);
    this.grid.display(this.currentTetromino);
  }

  onArrowDown(){
    this.currentTetromino.checkAndMoveDown(this.grid);
    this.grid.display(this.currentTetromino);
  }

  onArrowUp(){
    this.currentTetromino.centerPosY--;
    this.grid.display(this.currentTetromino);
  }

  onSpaceBar(){
    this.currentTetromino.rotate(this.grid);
    this.grid.display(this.currentTetromino);
  }


  randomTetromino(): Tetromino {
    const tetrominos = [TetrominoI, TetrominoJ, TetrominoL, TetrominoO, TetrominoS, TetrominoT, TetrominoZ];
    var randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
    const colors = ["purple","grey","red","orange","turquoise","blue"];
    var randColor = colors[Math.floor(Math.random() * colors.length)];
    return new randTetromino(randColor);
  }


  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
   if(event.key == "ArrowLeft"){
    this.onArrowLeft();
   } else if(event.key == "ArrowRight"){
    this.onArrowRight();
   } else if(event.key == "ArrowDown"){
    this.onArrowDown();
   } else if(event.key == "ArrowUp"){
    this.onArrowUp();
   } else if(event.key == " "){
    this.onSpaceBar();
   } else {
     console.log(event.key);
   }
  }
}
