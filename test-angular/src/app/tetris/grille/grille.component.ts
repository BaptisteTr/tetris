import {Component, HostListener, OnInit} from '@angular/core';
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
    this.currentTetromino.setStartPosition();
    this.nextTetromino = this.randomTetromino();
    this.nextTetromino.setDefaultPosition();
  }

  async ngOnInit() {

    this.grid = new Grid(this.lines,this.columns);

    this.grid.display(this.currentTetromino);

    setInterval(()=>this.gameplayLoop(),1000);
  }

  gameplayLoop(){
    this.currentTetromino.checkAndMoveDown(this.grid);
    if(this.currentTetromino.locked){
      this.currentTetromino = this.nextTetromino;
      this.nextTetromino = this.randomTetromino();
      this.nextTetromino.setDefaultPosition();
      this.currentTetromino.setStartPosition();

      this.cleanCompletedLines();
    }
    this.grid.display(this.currentTetromino);
  }

  cleanCompletedLines(){
    for(let y:number = this.lines; y >= 0; y--){
      let line = this.grid.square_list.filter(block => (block.height_position == y && block.filled));
      if(line.length == this.columns){

        for(let y2:number = y; y2 >= 0; y2--)
        {
          let currentLine = this.grid.square_list.filter(block => (block.height_position == y2));

          let upperLine = this.grid.square_list.filter(block => (block.height_position == y2-1));

          currentLine.forEach(block => {
            let upperBlock = upperLine.find(upperBlock => upperBlock.width_position == block.width_position);

            if(upperBlock != undefined){
              block.color = upperBlock.color;
              block.filled = upperBlock.filled;
            }
          });
        }
        y++;
      }
    }
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

  onL(){
    this.currentTetromino.lock(this.grid);
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
   } else if(event.key == "l"){
    this.onL();
   } else {
     console.log(event.key);
   }
  }
}


