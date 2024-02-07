import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apiCall';
  private http = inject(HttpClient);
  items: any[] = [];
  constructor(){
    this.fetchData();
  }
  fetchData(){
    this.http
    .get<any[]>('https://ivarpivar.netlify.app/api')
    .subscribe((data)=> {
      console.log(data);
      this.items = data[0].data;
      // console.log(this.items);
    });
  }
}
