import {Component, Inject, OnInit} from '@angular/core';
import { interval } from 'rxjs';
import {Grid} from '../Objets/grid';
import { Tetromino, TetrominoI, TetrominoJ } from '../Objets/tetromino';

@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.css']
})
export class GrilleComponent implements OnInit {
  public grid : Grid;
  public lines: number = 20;
  public columns: number = 10;

  constructor() {
    this.grid = new Grid(0,0);
  }

  async ngOnInit() {

    this.grid = new Grid(this.lines,this.columns);

    let tetromino :Tetromino = new TetrominoJ("purple");
    tetromino.centerPosX = 4;
    tetromino.centerPosY = 15;
    tetromino.direction = 2;

    this.grid.display(tetromino);

    setInterval(()=>{
      tetromino.rotate();
      this.grid.display(tetromino);
    },1000);
  }


}
