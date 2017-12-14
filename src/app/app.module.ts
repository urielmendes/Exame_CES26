import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
  AppComponent,
  WeatherComponent,
  ForecastComponent,
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpClientModule,
  RouterModule.forRoot([
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: 'forecast',
    component: ForecastComponent
  }


  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
