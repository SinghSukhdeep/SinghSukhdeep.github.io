import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CommonService } from './shared/common.service';

import {
  SkillAngularDialogComponent, SkillJSDialogComponent, SkillCSSDialogComponent,
  SkillHTMLDialogComponent, SkillMYSQLDialogComponent, SkillNGINXDialogComponent,
  SkillNodeDialogComponent, SkillPHPDialogComponent, AppDialoguesModule
} from './dialogues';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    AppDialoguesModule
  ],
  entryComponents: [
    SkillAngularDialogComponent,
    SkillCSSDialogComponent,
    SkillHTMLDialogComponent,
    SkillJSDialogComponent,
    SkillMYSQLDialogComponent,
    SkillNGINXDialogComponent,
    SkillNodeDialogComponent,
    SkillPHPDialogComponent
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
