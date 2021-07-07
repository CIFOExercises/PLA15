import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css'],
})
export class NgIfComponent implements OnInit {
  @Input() props!: {
    mensaje: string;
    autor: string;
  };
  isVisible: boolean = true;
  numero: number = Math.floor(Math.random() * (11 - 1)) + 1;

  constructor() {}

  ngOnInit(): void {}
}
