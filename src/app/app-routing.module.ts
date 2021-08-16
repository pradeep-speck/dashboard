import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelpContentComponent } from './menu-items/knowledge/help-content/help-content.component';
import { KnowledgeComponent } from './menu-items/knowledge/knowledge.component';

const routes: Routes = [
  // {path: 'knowledge', loadChildren: './menu-items/knowledge/knowledge.module#KnowledgeModule'}
  {path: '', component: HomeComponent},
  { path: 'knowledge', loadChildren: () => import('./menu-items/knowledge/knowledge.module').then( m => m.KnowledgeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
