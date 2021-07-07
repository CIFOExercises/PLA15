import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'],
})
export class NgForComponent implements OnInit {
  list: string[] = [
    'Cras justo odio',
    'Dapius ac facislis',
    'Morbi leo risus',
    'Porta as consectetur ac',
    'Vestibulum at eros',
  ];

  constructor() {}

  ngOnInit(): void {}
}
