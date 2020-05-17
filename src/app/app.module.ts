import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectfruitComponent } from './welcome/selectfruit/selectfruit.component';
import { ResponseFirstComponent } from './responses/response-first/response-first.component';
import { ResponseSecondComponent } from './responses/response-second/response-second.component';
import { ResponseThirdComponent } from './responses/response-third/response-third.component';
import { ResponseFourthComponent } from './responses/response-fourth/response-fourth.component';
import { ResultPageComponent } from './result/result-page/result-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectfruitComponent,
    ResponseFirstComponent,
    ResponseSecondComponent,
    ResponseThirdComponent,
    ResponseFourthComponent,
    ResultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
