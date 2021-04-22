import { Square } from "./square";

export abstract class Tetromino {

  public centerPosX: number = 19;
  public centerPosY: number = 10;
  public direction: number = 1;

  constructor(public color:string = "purple"){

  }

  public abstract display(square_list: Array<Square>):void;

  public abstract rotate(): void;

}

export class TetrominoI extends Tetromino {

  public display(square_list: Array<Square>){
    square_list.filter(square => square.filled == false).map(square => square.color = "white")
    if(this.direction == 1){
      square_list.forEach(square => this.direction1(square));
    } else {
      square_list.forEach(square => this.direction2(square));
    }
  }

  public rotate(){
    if(this.direction == 1){
      this.direction++;
    } else {
      this.direction = 1;
    }
  }

  private direction1(square:Square) {
    if(square.width_position == this.centerPosX
      && square.height_position <= this.centerPosY +2
      && square.height_position >= this.centerPosY -1)
    {
      square.color = this.color;
    }
  }

  private direction2(square:Square) {
    if(square.width_position <= this.centerPosX +2
      && square.width_position >= this.centerPosX -1
      && square.height_position == this.centerPosY)
    {
      square.color = this.color;
    }
  }
}

export class TetrominoJ extends Tetromino {

  public display(square_list: Array<Square>){
    square_list.filter(square => square.filled == false).map(square => square.color = "white")
    if(this.direction == 1){
      square_list.forEach(square => this.direction1(square));
    } else if(this.direction == 2) {
      square_list.forEach(square => this.direction2(square));
    } else if(this.direction == 3) {
      square_list.forEach(square => this.direction3(square));
    } else if(this.direction == 4) {
      square_list.forEach(square => this.direction4(square));
    }
  }

  public rotate(){
    if(this.direction < 4){
      this.direction++;
    } else {
      this.direction = 1;
    }
  }

  private direction1(square:Square) {
    if((square.width_position <= this.centerPosX +1
        && square.width_position >= this.centerPosX -1
        && square.height_position == this.centerPosY)
      || (square.width_position == this.centerPosX -1
        && square.height_position == this.centerPosY -1))
    {
      square.color = this.color;
    }
  }

  private direction2(square:Square) {
    if((square.height_position <= this.centerPosY +1
        && square.height_position >= this.centerPosY -1
        && square.width_position == this.centerPosX)
      || (square.width_position == this.centerPosX +1
        && square.height_position == this.centerPosY -1))
    {
      square.color = this.color;
    }
  }

  private direction3(square:Square) {
    if((square.width_position <= this.centerPosX +1
        && square.width_position >= this.centerPosX -1
        && square.height_position == this.centerPosY)
      || (square.width_position == this.centerPosX +1
        && square.height_position == this.centerPosY +1))
    {
      square.color = this.color;
    }
  }

  private direction4(square:Square) {
    if((square.height_position <= this.centerPosY +1
        && square.height_position >= this.centerPosY -1
        && square.width_position == this.centerPosX)
      || (square.width_position == this.centerPosX -1
        && square.height_position == this.centerPosY +1))
    {
      square.color = this.color;
    }
  }
}

