import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'regular-observable',
  templateUrl: './regular-observable.component.html',
  styleUrls: ['./regular-observable.component.css']
})
export class RegularObservableComponent implements OnInit {
  data = [];
  constructor() { }

  ngOnInit() {  }

  add(val) {
    let obs = new Observable(observer => {
      observer.next(val.value);
      observer.complete();
    });

    let subscriber = obs.subscribe(newData => {
      setTimeout(() => {
        console.log(newData)
        this.data.push(newData);
      }, 1000)
    });
  }

}
