import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrilleComponent } from './tetris/grille/grille.component';


const routes: Routes = [
  { path: '', redirectTo: '/tetris', pathMatch: 'full' },
  { path: 'tetris', component: GrilleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
