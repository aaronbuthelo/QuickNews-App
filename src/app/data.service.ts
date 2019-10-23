import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  result: any;
  constructor(private http: Http) { }


getHighlights() {
  return this.http.get('https://newsapi.org/v2/top-headlines?country=us&pageSize=20&apiKey=09eea94fcf724747afeb143ebf7fea5f')
  .map(result => this.result = result.json());
 }

 getSport() {
  // tslint:disable-next-line:max-line-length
  return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=20&apiKey=09eea94fcf724747afeb143ebf7fea5f')
  .map(result => this.result = result.json());
 }

 getTech() {
  // tslint:disable-next-line:max-line-length
  return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=20&apiKey=09eea94fcf724747afeb143ebf7fea5f')
  .map(result => this.result = result.json());
 }

 getBus() {
  // tslint:disable-next-line:max-line-length
  return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=20&apiKey=09eea94fcf724747afeb143ebf7fea5f')
  .map(result => this.result = result.json());
 }

 getEnter() {
  // tslint:disable-next-line:max-line-length
  return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=20&apiKey=09eea94fcf724747afeb143ebf7fea5f')
  .map(result => this.result = result.json());
 }

}
