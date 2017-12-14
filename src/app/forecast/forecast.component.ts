import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
	selector: 'app-forecast',
	templateUrl: './forecast.component.html',
	styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {

	constructor(private httpClient: HttpClient) { }
	cityName='';
	cityTemp='';
	searchCity(){
		this.httpClient.get('http://api.openweathermap.org/data/2.5/forecast?q='+this.cityName+',br&APPID=ec7912861113ecfcf0070975704abbc8')
		.subscribe(
			(data:Response) => {
				console.log(data.json());
				
			}
			)
	}
}