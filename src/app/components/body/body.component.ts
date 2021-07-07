import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  propsIf = {
    autor: 'Homer Simpson',
    mensaje:
      'Tendrá todo el dinero del mundo, pero hay algo que jamás comprar: un Dinosaurio',
  };

  constructor() {}

  ngOnInit(): void {}
}
