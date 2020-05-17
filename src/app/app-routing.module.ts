import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectfruitComponent } from './welcome/selectfruit/selectfruit.component';
import { ResponseFirstComponent } from './responses/response-first/response-first.component';
import { ResponseSecondComponent } from './responses/response-second/response-second.component';
import { ResponseThirdComponent } from './responses/response-third/response-third.component';
import { ResponseFourthComponent } from './responses/response-fourth/response-fourth.component';
import { ResultPageComponent } from './result/result-page/result-page.component';


const routes: Routes = [
  { path: 'welcome', component: SelectfruitComponent },
  { path: 'page1/:id', component: ResponseFirstComponent },
  { path: 'page2/:id', component: ResponseSecondComponent },
  { path: 'page3/:id', component: ResponseThirdComponent },
  { path: 'page4/:id', component: ResponseFourthComponent },
  { path: 'result/:id', component: ResultPageComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
