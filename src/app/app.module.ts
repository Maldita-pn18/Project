import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentDrivenComponent } from './parent-driven/parent-driven.component';
import { ChildDrivenComponent } from './child-driven/child-driven.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpExerciseComponent } from './http-exercise/http-exercise.component';
import { UserService } from './user.service';
import { HttpClientModule} from '@angular/common/http';
import { HttpFillUpComponent } from './http-fill-up/http-fill-up.component';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ViewComponent } from './view/view.component';


// const appRoutes : Routes = [
//   {path: '', component : HomepageComponent},
//   {path: 'fill_up', component : HttpFillUpComponent},
//   {path: 'edit_data', component: HttpFillUpComponent},
//   {path: 'dashboard', component : HttpExerciseComponent },
//   {path: 'view/:id', component : ViewComponent},
//   {path: 'not_found', component : ErrorpageComponent },
//   {path: '**', redirectTo: '/not_found'},
// ]

@NgModule({
  declarations: [
    AppComponent,
    ParentDrivenComponent,
    ChildDrivenComponent,
    HttpExerciseComponent,
    HttpFillUpComponent,
    HomepageComponent,
    ErrorpageComponent,
    ViewComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // RouterModule.forRoot(appRoutes)
    
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
