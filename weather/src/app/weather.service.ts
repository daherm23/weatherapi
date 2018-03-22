import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather(city: string){
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b3112bae0271a6635517da8fde592332
    `)
    .map( data => data.json() )
      .toPromise();
  }
}