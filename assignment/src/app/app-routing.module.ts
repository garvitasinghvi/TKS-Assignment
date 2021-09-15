import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from './job/job.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'job',
    pathMatch: 'full'
  },
  {
    path:'job',
    component:JobComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
