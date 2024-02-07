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
  data: any[] = [];
  displayedData: any[] = [];
  constructor(){
    this.fetchData();
  }
  fetchData(){
    this.http
    .get<any[]>('https://ivarpivar.netlify.app/api')
    .subscribe((data)=> {
      this.data = data[0].data;
      this.displayedData = this.data
    });
  }

  filterData(filter: string | null) {
    if (filter === "Include Performance Data") {
      this.displayedData = this.data.filter(item => item.change1m || item.change3m || item.change3y);
      return null;
    }
  this.displayedData = this.data
    return this.data;
  }
  
}
