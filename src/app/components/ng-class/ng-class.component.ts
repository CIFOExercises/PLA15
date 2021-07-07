import { Component, OnInit } from '@angular/core';
import { faSave, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css'],
})
export class NgClassComponent implements OnInit {
  alertType: string = 'info';
  changeColor: boolean = false;
  faSave = faSave;
  faSyncAlt = faSyncAlt;
  isLoading: boolean = false;

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

  toggleColor() {
    this.changeColor = !this.changeColor
  }

  AsyncClick(){
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
  }
}
