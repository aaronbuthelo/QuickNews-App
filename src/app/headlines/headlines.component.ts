import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {
  objectKeys = Object.keys;
  high: any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getHighlights()
    .subscribe(res => {
      this.high = res;
      console.log(res);
    });
  }
  onEdit() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
