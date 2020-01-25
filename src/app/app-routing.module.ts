import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './pages/dash/dash.component';
import { AboutComponent } from './pages/about/about.component';
import { DonateComponent } from './pages/donate/donate.component';
import { DebugComponent } from './pages/debug/debug.component';


const routes: Routes = [
  { path: '', component: DashComponent },
  { path: 'about', component: AboutComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'debug', component: DebugComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
