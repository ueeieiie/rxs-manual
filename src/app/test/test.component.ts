import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() id;
  @Input() ids;
  

  constructor() { }

  ngOnInit() {
  }

  logLocalVariable(localVariable){
    console.log(localVariable);
  }
}
