import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ForumComponent } from './page/forum/forum.component';

export const routes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'forum', component: ForumComponent},

];
