import { Grid } from "./grid";
import { Square } from "./square";


export abstract class Tetromino {

  public centerPosX: number = 4;
  public centerPosY: number = -1;

  public blocks : Array<Square>;
  public directions : Array<Array<Square>> = new Array();

  constructor(public color:string = "purple"){
    this.blocks = this.directions[0];
  }


  public display(square_list: Array<Square>){
    square_list.filter(square => square.filled == false).map(square => square.color = "white");
    this.blocks.forEach(
      block => {
        let square = square_list.find(square => square.height_position == (block.height_position + this.centerPosY) && square.width_position == (block.width_position + this.centerPosX) );
        if(square != undefined){
          square.color = this.color;
        }
      }
    );
  }

  public rotate(grid: Grid){

    let index :number = this.directions.findIndex( direction => this.blocks == direction);

    if(index < this.directions.length-1){
      this.blocks = this.directions[index+1];
      if(!this.isLegal(grid,0)){
        this.blocks = this.directions[index];
      }
    } else {
      this.blocks = this.directions[0];
      if(!this.isLegal(grid,0)){
        this.blocks = this.directions[index];
      }
    }
  }

  public isLegal(grid: Grid, direction: number): boolean {
    let resultat: boolean = true;
    let posXOffset: number = 0;
    let posYOffset: number = 0;
    if(direction == 1){
      posXOffset--;
    } else if (direction == 2){
      posYOffset++;
    } else if (direction == 3){
      posXOffset++;
    }

    this.getBlocks().forEach(block => {
      if(this.centerPosY + block.height_position + posYOffset >= grid.height){
        resultat= false;
      }
      if((this.centerPosX + block.width_position + posXOffset < 0) || (this.centerPosX + block.width_position + posXOffset >= grid.width)){
        resultat= false;
      }
    });

    return resultat;
  }

  public getBlocks(): Square[]{
    return this.blocks;
  }

  public checkAndMoveDown(grid:Grid): void{
    if(this.isLegal(grid, 2)){
      this.centerPosY++;
    }
  }

  public checkAndMoveLeft(grid:Grid): void{
    if(this.isLegal(grid, 1)){
      this.centerPosX--;
    }
  }

  public checkAndMoveRight(grid:Grid): void{
    if(this.isLegal(grid, 3)){
      this.centerPosX++;
    }
  }

}

export class TetrominoI extends Tetromino {

  centerPosY: number = -3;

  private position1 = new Array<Square> (
    new Square(2,0),
    new Square(1,0),
    new Square(0,0),
    new Square(-1,0)
  );
  private position2 = new Array<Square> (
    new Square(0,-1),
    new Square(0,0),
    new Square(0,1),
    new Square(0,2)
  );

  directions = new Array<Array<Square>>(this.position1, this.position2)
  blocks = this.position1;

}

export class TetrominoJ extends Tetromino {

  private position1 = new Array<Square> (
    new Square(-1,-1),
    new Square(0,-1),
    new Square(0,0),
    new Square(0,+1)
  );
  private position2 = new Array<Square> (
    new Square(-1,1),
    new Square(1,0),
    new Square(0,0),
    new Square(-1,0)
  );
  private position3 = new Array<Square> (
    new Square(0,-1),
    new Square(0,0),
    new Square(0,1),
    new Square(1,1)
  );
  private position4 = new Array<Square> (
    new Square(1,0),
    new Square(0,0),
    new Square(-1,0),
    new Square(1,-1)
  );

  directions = new Array<Array<Square>>(this.position1, this.position2, this.position3, this.position4);
  blocks = this.position1;
}

export class TetrominoL extends Tetromino {

  private position1 = new Array<Square> (
    new Square(0,-1),
    new Square(0,0),
    new Square(0,1),
    new Square(-1,1)
  );
  private position2 = new Array<Square> (
    new Square(1,0),
    new Square(0,0),
    new Square(-1,0),
    new Square(1,1)
  );
  private position3 = new Array<Square> (
    new Square(0,-1),
    new Square(0,0),
    new Square(0,1),
    new Square(1,-1)
  );
  private position4 = new Array<Square> (
    new Square(1,0),
    new Square(0,0),
    new Square(-1,0),
    new Square(-1,-1)
  );

  directions = new Array<Array<Square>>(this.position1, this.position2, this.position3, this.position4);
  blocks = this.position1;
}

export class TetrominoO extends Tetromino {

  centerPosY: number = -2;

  private position1 = new Array<Square> (
    new Square(0,0),
    new Square(1,0),
    new Square(0,1),
    new Square(1,1)
  );

  directions = new Array<Array<Square>>(this.position1);
  blocks = this.position1;
}

export class TetrominoS extends Tetromino {

  private position1 = new Array<Square> (
    new Square(0,0),
    new Square(0,-1),
    new Square(-1,0),
    new Square(-1,1)
  );

  private position2 = new Array<Square> (
    new Square(0,1),
    new Square(-1,1),
    new Square(-1,0),
    new Square(-2,0)
  );

  directions = new Array<Array<Square>>(this.position1,this.position2);
  blocks = this.position1;
}

export class TetrominoT extends Tetromino {

  private position1 = new Array<Square> (
    new Square(0,0),
    new Square(0,-1),
    new Square(0,1),
    new Square(-1,0)
  );

  private position2 = new Array<Square> (
    new Square(-1,0),
    new Square(0,0),
    new Square(1,0),
    new Square(0,1)
  );

  private position3 = new Array<Square> (
    new Square(0,-1),
    new Square(0,0),
    new Square(1,0),
    new Square(0,1)
  );

  private position4 = new Array<Square> (
    new Square(-1,0),
    new Square(0,0),
    new Square(1,0),
    new Square(0,-1)
  );

  directions = new Array<Array<Square>>(this.position1,this.position2, this.position3,this.position4);
  blocks = this.position1;
}

export class TetrominoZ extends Tetromino {

  centerPosY: number = -2;

  private position1 = new Array<Square> (
    new Square(0,0),
    new Square(0,-1),
    new Square(1,0),
    new Square(1,1)
  );

  private position2 = new Array<Square> (
    new Square(0,0),
    new Square(-1,0),
    new Square(0,-1),
    new Square(1,-1)
  );

  directions = new Array<Array<Square>>(this.position1,this.position2);
  blocks = this.position1;
}
