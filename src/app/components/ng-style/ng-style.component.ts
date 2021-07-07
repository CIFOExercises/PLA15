import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css'],
})
export class NgStyleComponent implements OnInit {
  tam: number = 15;

  constructor() {}

  ngOnInit(): void {}

  aumentar() {
    this.tam += 1;
  }

  disminuir() {
    this.tam -= 1;
  }
}
