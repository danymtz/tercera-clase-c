import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  public initial: number = 1;
  @Input () receive: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
