import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {
  ChartAllModule,
  AccumulationChartAllModule,
  RangeNavigatorAllModule,
} from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AccumulationChartAllModule,
    RangeNavigatorAllModule,
    ChartAllModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
