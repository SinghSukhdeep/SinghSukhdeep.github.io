import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import {
  SkillAngularDialogComponent, SkillJSDialogComponent, SkillCSSDialogComponent,
  SkillHTMLDialogComponent, SkillMYSQLDialogComponent, SkillNGINXDialogComponent,
  SkillNodeDialogComponent, SkillPHPDialogComponent
} from './dialogues';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog) { }

  openDialog(skill: string) {
    let dialogComponent = null;

    switch (skill) {
      case 'angular':
        dialogComponent = SkillAngularDialogComponent;
        break;
      case 'js':
        dialogComponent = SkillJSDialogComponent;
        break;
      case 'html':
        dialogComponent = SkillHTMLDialogComponent;
        break;
      case 'css':
        dialogComponent = SkillCSSDialogComponent;
        break;
      case 'node':
        dialogComponent = SkillNodeDialogComponent;
        break;
      case 'php':
        dialogComponent = SkillPHPDialogComponent;
        break;
      case 'mysql':
        dialogComponent = SkillMYSQLDialogComponent;
        break;
      case 'nginx':
        dialogComponent = SkillNGINXDialogComponent;
        break;

      default:
        break;
    }

    if (dialogComponent) {
      this.dialog.open(dialogComponent);
    }
  }
}
