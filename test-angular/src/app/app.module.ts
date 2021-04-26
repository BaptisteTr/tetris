import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrilleComponent } from './tetris/grille/grille.component';
import { NextTetrominoComponent } from './next-tetromino/next-tetromino.component';

@NgModule({
  declarations: [
    AppComponent,
    GrilleComponent,
    NextTetrominoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
