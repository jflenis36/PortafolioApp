import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'home', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
    { path: 'marketplace', loadChildren: () => import('./projects/marketplace/marketplace.module').then(m => m.MarketplaceModule) },
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
