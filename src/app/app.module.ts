import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabComponent } from './shared/component/tab/tab.component';
import { Tab2Component } from './shared/component/tab2/tab2.component';
import { Tab3Component } from './shared/component/tab3/tab3.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    Tab2Component,
    Tab3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
