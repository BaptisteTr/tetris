import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Grid } from '../tetris/Objets/grid';

@Component({
  selector: 'app-next-tetromino',
  templateUrl: './next-tetromino.component.html',
  styleUrls: ['./next-tetromino.component.css']
})
export class NextTetrominoComponent implements OnInit, OnChanges  {
  public grid : Grid = new Grid(0,0);
  public lines: number = 5;
  public columns: number = 5;
  @Input()
  tetromino: any;

  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.refresh();
  }

  ngOnInit(): void {
    this.grid = new Grid(this.lines,this.columns);
    this.refresh();
  }

  refresh(): void{
    this.grid.display(this.tetromino);
  }

}
