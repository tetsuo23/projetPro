import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NavigationComponent } from './navigation/navigation.component'

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'index', component: NavigationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
