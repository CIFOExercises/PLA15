import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css'],
})
export class NgClassComponent implements OnInit {
  alertType: string = 'info';
  textType: string = 'info';

  constructor() {}

  ngOnInit(): void {}

  info() {
    this.alertType = 'info';
  }

  success() {
    this.alertType = 'success';
  }

  warning() {
    this.alertType = 'warning';
  }

  danger() {
    this.alertType = 'danger';
  }

  toggleText() {
    if (this.textType == 'info') {
      this.textType = 'danger';
    } else {
      this.textType = 'info';
    }
  }
}
