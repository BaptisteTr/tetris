import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrilleComponent } from './tetris/grille/grille.component';
import { NextTetrominoComponent } from './tetris/next-tetromino/next-tetromino.component';
import { TetrisComponent } from './tetris/tetris.component';
import { ScoreCounterComponent } from './tetris/score-counter/score-counter.component';
import { CommandBarComponent } from './command-bar/command-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    GrilleComponent,
    NextTetrominoComponent,
    TetrisComponent,
    ScoreCounterComponent,
    CommandBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
