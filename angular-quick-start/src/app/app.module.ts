import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Sample1Component } from './components/sample1component';
import { Sample2Component } from './components/sample2/sample2.component';
import { Sample3Component } from './components/sample3/sample3.component';
import { Sample4Component } from './components/sample4/sample4.component';

@NgModule({
  declarations: [AppComponent, Sample1Component, Sample2Component, Sample3Component, Sample4Component],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
