import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpExerciseComponent } from './http-exercise/http-exercise.component';  
import { HttpFillUpComponent } from './http-fill-up/http-fill-up.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {path: '', component : HomepageComponent},
  // {path: 'fill_up', component : HttpFillUpComponent},
  // {path: 'edit_data', component: HttpFillUpComponent},
  {path: 'dashboard', component : HttpFillUpComponent },
  {path: 'view/:id', component : ViewComponent},
  {path: 'not_found', component : ErrorpageComponent },
  {path: '**', redirectTo: '/not_found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
