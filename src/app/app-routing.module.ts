import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module')
      .then(m => m.ProjectsModule)
  },
  {
    path: 'instructors',
    loadChildren: () => import('./instructors/instructors.module')
      .then(m => m.InstructorsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contacts/contacts.module')
      .then(m => m.ContactsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
