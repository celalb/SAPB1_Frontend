import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import {PendingChangesGuard} from './guards/pending-changes.guard';

// import { PostListComponent } from './posts/post-list/post-list.component';


// import { SignupComponent } from './auth/signup/signup.component';



const routes: Routes = [
  { path: '', component: NavComponent, canActivate: [AuthGuard], canDeactivate: [PendingChangesGuard] },

   { path: 'dash', component: MaindashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
