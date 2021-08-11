import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpContentComponent } from './menu-items/knowledge/help-content/help-content.component';
import { KnowledgeComponent } from './menu-items/knowledge/knowledge.component';

const routes: Routes = [
  {path: 'knowledge', component: KnowledgeComponent,
   children: [
     { path:'admin-guide', component: HelpContentComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
