import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
	selector: 'app-subject',
	templateUrl: './subject.component.html',
	styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

	users: any;
	
	constructor() { }

	getData() {
		const users = [
			{name: 'david', skill: 'good with stuff'},
			{name: 'gal', skill: "magican"},
			{name: 'dan', skill: 'sleep very well'},
			{name: 'rami', skill: 'can read sentences from end to start'},
			{name: 'berber', skill: 'swimming'}
		]

		let subject = new Subject();
		setTimeout(() => { subject.next(users); subject.complete(); }, 1000)
		return subject ;
	}

	ngOnInit() {
		this.getData().subscribe(data => this.users = data);
	}

}
