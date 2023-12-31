import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectLinksComponent } from './project-links/project-links.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project-links', component: ProjectLinksComponent },
  { path: 'project-links/:id', component: ProjectLinksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
