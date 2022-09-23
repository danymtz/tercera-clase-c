import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  @Output() exiting: EventEmitter <any> = new EventEmitter <any>();

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void{
    console.log('incrementa!');
  }
}
