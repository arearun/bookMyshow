import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesInfoComponent } from './components/movies-info/movies-info.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'movie',component:MoviesInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
