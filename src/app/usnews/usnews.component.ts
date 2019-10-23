import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-usnews',
  templateUrl: './usnews.component.html',
  styleUrls: ['./usnews.component.css']
})
export class UsnewsComponent implements OnInit {

  objectKeys = Object.keys;
  enter: any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getEnter()
    .subscribe(res => {
      this.enter = res;
      console.log(res);
    });
  }
  onEdit() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
