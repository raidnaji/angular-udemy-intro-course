import { Component } from '@angular/core';
import { ApiService } from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  h3 {
    color: dodgerblue;
  }
  `]
})
export class AppComponent {
  data: any =[];

  constructor (private user:ApiService) {

    

    this.user.getData().subscribe(data => {
      console.warn(data)
      this.data = data;
    })
  }
}
