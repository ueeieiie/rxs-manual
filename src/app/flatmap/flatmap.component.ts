import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'flatmap',
  templateUrl: './flatmap.component.html',
  styleUrls: ['./flatmap.component.css']
})
export class FlatmapComponent implements OnInit {

  data = new Observable((observer) => {
    observer.next();
  });

  data2;

  constructor() { }

  ngOnInit() {
    this.data.subscribe( data => {console.log('data', data)})
  }

  

}
