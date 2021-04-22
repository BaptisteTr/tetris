import {Square} from './square';
import {Tetromino} from './tetromino';

export class Grid {

  public square_list: Array<Square>;

  constructor(public height: number, public width: number){
    this.square_list = new Array<Square>();
    for(let i = 0; i<height; i++){
      for(let j = 0; j<width; j++){
        this.square_list.push(new Square(i,j));
      }
    }
  }

  display_tetromino(tetromino:Tetromino){
    if(tetromino.type == "I"){
      if(tetromino.direction == 1){
        this.square_list.forEach(function(square){ // TODO implémenter dans une méthode séparée
          if(square.width_position == tetromino.centerPosX && square.height_position <= tetromino.centerPosY +1 && square.height_position >= tetromino.centerPosY -2)
          {
            square.color = tetromino.color;
          }
        });
      } else {

      }
    }
  }

}
