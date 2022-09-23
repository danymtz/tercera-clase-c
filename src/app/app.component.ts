import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'terceraclaseD';

  public valor: number = 0;

  onClick(): void{
    console.log('incrementa!');
    this.valor = this.valor+1;
  }
}
