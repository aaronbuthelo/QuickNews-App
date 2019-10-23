import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  objectKeys = Object.keys;
  sport: any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getSport()
    .subscribe(res => {
      this.sport = res;
      console.log(res);
    });
  }
  onEdit() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}

