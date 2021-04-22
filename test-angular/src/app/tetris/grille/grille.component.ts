import {Component, Inject, OnInit} from '@angular/core';
import {Grid} from '../Objets/grid';
import {Square} from '../Objets/square';
import { Tetromino } from '../Objets/tetromino';

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

  ngOnInit() {

    this.grid = new Grid(this.lines,this.columns);

    let tetromino :Tetromino = new Tetromino("orange","I");
    tetromino.centerPosX = 5;
    tetromino.centerPosY = 18;
    tetromino.direction = 1;
    this.grid.display_tetromino(tetromino);

  }

}
