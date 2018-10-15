import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import {
  SkillAngularDialogComponent, SkillJSDialogComponent, SkillCSSDialogComponent,
  SkillHTMLDialogComponent, SkillMYSQLDialogComponent, SkillNGINXDialogComponent,
  SkillNodeDialogComponent, SkillPHPDialogComponent
} from './dialogues';
import { Config } from './shared/Config';
import { CommonService } from './shared/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactForm: FormGroup;
  showProgressSpinner = false;

  // tslint:disable-next-line:max-line-length
  constructor(public dialog: MatDialog, public snackBar: MatSnackBar, private formBuilder: FormBuilder, private commonService: CommonService) {
    this.contactForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      email: new FormControl(null, [Validators.required, Validators.maxLength(255), Validators.email]),
      phoneNumber: new FormControl(null, [Validators.maxLength(15)]),
      message: new FormControl(null, [Validators.required, Validators.maxLength(1000)])
    });
  }

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

  sendContactRequest() {
    this.showProgressSpinner = true;
    this.commonService.makeRequest(Config.firebaseMailUrl, this.contactForm.value).subscribe(
      response => {
        console.log(response);
        // tslint:disable-next-line:max-line-length
        const message = response && (response.message || response.error) ? response.message || response.error : 'Something went wrong, Please try again';
        this.snackBar.open(message, 'OK', {
          duration: 5000
        });
        this.contactForm.reset();
      },
      error => {
        this.snackBar.open('Something went wrong, Please try again', 'OK', {
          duration: 5000
        });
      },
      () => this.showProgressSpinner = false);
  }

  showContactForm() {
    document.getElementById('contact-form').scrollIntoView({
      behavior: 'smooth'
    });
  }
}
