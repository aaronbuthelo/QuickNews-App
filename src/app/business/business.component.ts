import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  objectKeys = Object.keys;
  bus: any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getBus()
    .subscribe(res => {
      this.bus = res;
      console.log(res);
    });
  }
  onEdit() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
