import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ManualSubscriptionsComponent } from './manual-subscriptions/manual-subscriptions.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { ForkJoinOperatorComponent } from './fork-join-operator/fork-join-operator.component';
import { CombineLatestOperatorComponent } from './combine-latest-operator/combine-latest-operator.component';
import { AsyncPipeObjectComponent } from './async-pipe-object/async-pipe-object.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ManualSubscriptionsComponent, AsyncPipeComponent, ForkJoinOperatorComponent, CombineLatestOperatorComponent, AsyncPipeObjectComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
