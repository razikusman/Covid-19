import { Component } from '@angular/core';
import { from } from 'rxjs';
import { CovidService } from './covid.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  datas : any = {};

  constructor(private service : CovidService){
    this.service.getdata().subscribe(data =>{
      console.log(data);
      this.datas = data})
  }

  title = 'Covid-dashboard';
}
