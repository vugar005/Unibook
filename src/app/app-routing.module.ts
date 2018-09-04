import { NotFoundComponent } from './home/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, children: [
    {path: 'main', loadChildren: './home/main-page/main-page.module#MainPageModule', data: { animation: 'fadeIn' }},
    {path: 'distance-learning', loadChildren: './home/distance-learning/distance-learning.module#DistanceLearningModule',
    data: { animation: 'fadeIn' }},
    { path: '404', component: NotFoundComponent },
    {path: '**', redirectTo: '404'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
