import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjectLinksComponent } from './project-links/project-links.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProjectLinksComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
