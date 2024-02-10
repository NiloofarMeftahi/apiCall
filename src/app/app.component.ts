import { HttpClient } from '@angular/common/http';
import { Component, inject, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { FundListComponent } from './fund-list/fund-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonsComponent, FundListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apiCall';
  private http = inject(HttpClient);
  data: any[] = [];
  displayedData: any[] = [];
 selectedButton: string | null = null;
  constructor(){
    this.fetchData();
  }
  fetchData(){
    this.http
    .get<any[]>('https://ivarpivar.netlify.app/api')
    .subscribe((data)=> {
      this.data = data[0].data;
      this.displayedData = this.data
    },
    );
  }

  filterData(filter: string | null) {
    this.selectedButton = filter;
    if (filter === "Include Performance Data") {
      
      // console.log(this.selectedButton)
      this.displayedData = this.data.filter(item => item.change1m || item.change3m || item.change3y);
      return null;
    }
  this.displayedData = this.data
    return this.data;
  }
  
}

