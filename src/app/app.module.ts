import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QbuilderComponent } from './qbuilder/qbuilder.component';
import { QbuilderService } from './qbuilder/qbuilder.service';
import { TesterComponent } from './tester/tester.component';


@NgModule({
  declarations: [
    AppComponent,
    QbuilderComponent,
    TesterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [QbuilderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
