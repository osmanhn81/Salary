import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JobsComponent} from './pages/jobs/jobs.component';
import { WeekWorkedHoursDetailsComponent } from './pages/week-worked-hours-details/week-worked-hours-details.component';
import { AddHoursWorkedComponent } from './pages/add-hours-worked/add-hours-worked.component';


const routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'jobs', component: JobsComponent },
    { path: 'WeekWorkedHoursDetails', component: WeekWorkedHoursDetailsComponent },
    { path: 'addHoursWorked', component: AddHoursWorkedComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
