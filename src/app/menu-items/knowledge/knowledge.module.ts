import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatModulesModule } from "src/app/mat-modules.module";

import { HelpContentComponent } from "./help-content/help-content.component";
import { HelpMenuComponent } from "./help-menu/help-menu.component";
import { KnowledgeRoutingModule } from "./knowledge-routing.module";
import { KnowledgeComponent } from "./knowledge.component";

@NgModule({
    declarations: [
    KnowledgeComponent,
    HelpMenuComponent,
    HelpContentComponent,
    ],
    imports: [
        CommonModule,
        KnowledgeRoutingModule,
        MatModulesModule
    ]
})
export class KnowledgeModule {

}