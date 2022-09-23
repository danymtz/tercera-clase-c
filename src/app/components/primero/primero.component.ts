import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.scss']
})
export class PrimeroComponent implements OnInit {
  public flag: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.flag = !this.flag;
  }

  onEnter(): void {
    console.log('Enter');
  }

  validation (event: any){
    console.log(event);
    console.log(event.target);
    console.log((event.target as HTMLInputElement).value); //cast
    let onlyLetters = (event.target as HTMLInputElement).value.replace(/[^A-Za-zá-úÁ-Ú]|[*÷×]/g,'');
    let onlyNumbers = (event.target as HTMLInputElement).value.replace(/[^0-9]|[*÷×]/g,'');
    console.log(onlyLetters);
    (event.target as HTMLInputElement).value = onlyLetters;
  }

}
