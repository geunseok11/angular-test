import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample4',
  template: ` <p>
      {{ massage }}
    </p>
    <button {click}="click()">클릭</button>
    <input type="text" [(ngModel)]="massage" />`,
  styles: [],
})
export class Sample4Component implements OnInit {
  massage = 'sample4 works!';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.massage = 'changed';
    }, 2000);
  }
  click() {
    this.massage = 'clicked';
  }
}
