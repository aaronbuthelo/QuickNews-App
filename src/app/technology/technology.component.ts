import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  objectKeys = Object.keys;
  tech: any;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getTech()
    .subscribe(res => {
      this.tech = res;
      console.log(res);
    });
  }
  onEdit() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }


}
