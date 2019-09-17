import { AuthGuard } from './_guards/auth.guard';
import { Routes, CanActivate } from '@angular/router';

import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '', // This is only to guard all the child routes with one guard
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
      {path: 'members/:id', component: MemberDetailsComponent},
      {path: 'messages', component: MessagesComponent},
      {path: 'lists', component: ListsComponent},
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
