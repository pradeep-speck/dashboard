import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HelpContentComponent } from "./help-content/help-content.component";
import { KnowledgeComponent } from "./knowledge.component";

const routes: Routes = [
    {path: '', component: KnowledgeComponent,
    children: [
      { path:'admin-guide', component: HelpContentComponent}
    ]}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class KnowledgeRoutingModule {

}