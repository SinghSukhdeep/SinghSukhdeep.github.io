import { NgModule } from '@angular/core';

import { SkillAngularDialogComponent } from './skill-angular-dialog.component';
import { SkillJSDialogComponent } from './skill-js-dialog.component';
import { SkillHTMLDialogComponent } from './skill-html-dialog.component';
import { SkillCSSDialogComponent } from './skill-css-dialog.component';
import { SkillNodeDialogComponent } from './skill-node-dialog.component';
import { SkillPHPDialogComponent } from './skill-php-dialog.component';
import { SkillMYSQLDialogComponent } from './skill-mysql-dialog.component';
import { SkillNGINXDialogComponent } from './skill-nginx-dialog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [SharedModule],
    exports: [],
    declarations: [SkillAngularDialogComponent, SkillCSSDialogComponent, SkillHTMLDialogComponent, SkillJSDialogComponent,
        SkillMYSQLDialogComponent, SkillNGINXDialogComponent, SkillNodeDialogComponent, SkillPHPDialogComponent],
    providers: [],
})
export class AppDialoguesModule { }
