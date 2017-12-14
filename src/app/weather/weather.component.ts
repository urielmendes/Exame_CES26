import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

	constructor(private httpClient: HttpClient) { }
	cityName='';
	cityTemp='';
	searchCity(){
		this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q='+this.cityName+',br&appid=ec7912861113ecfcf0070975704abbc8')
		.subscribe(
			(data:Response) => {
				
				console.log(data.json());

			}
			)
	}
}