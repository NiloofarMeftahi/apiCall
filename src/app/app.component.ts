import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { FundListComponent } from './fund-list/fund-list.component';
import { environment } from './environments/environment';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonsComponent, FundListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  error :  string | null = null;
  title = 'apiCall';
  private http = inject(HttpClient);
  data: any[] = [];
  displayedData: any[] = [];
  selectedButton: string | null = null;

 constructor() {}

  ngOnInit() {
    this.fetchData();
    
  }
  fetchData(){
    this.http
    .get<any[]>(environment.apiUrl)
    .subscribe({
      // Handle successful response.
      next: (data) => {
        /* 
        Extract the data property of the first object in the array.
        Assign the fetched data to component properties.
        */
        this.data = data[0].data;
        this.displayedData = this.data;
  
      },
      error: (err) => {
        console.error('Error fetching data:', err);
        this.handleError(err);
      }
    });
  }
  // Handle API errors.
  handleError(err: any) {
    // Reset previous errors
    this.error = null;
    // Checking for specific error types.
    if (err.status === 404) {
      this.error = 'API not found';
    } else if (err.status === 500) {
      this.error = 'Internal server error';
    } else {
      // Handle other error types or use a default message.
      this.error = err.message || 'An unknown error occurred';
    }

    console.log(this.error);
}
  // Filter data based on the selected button.
  filterData(filter: string | null) {
    this.selectedButton = filter;
    /*
    If the include performance data button was selected,
    only include funds that contain performance data 
    for the first month, third month, or third year.
    */
    if (filter === "Include Performance Data") {
      this.displayedData = this.data.filter(item => item.change1m || item.change3m || item.change3y);
      return;
    }
  /* 
  If all button was seleted, include all funding data.
  */
  this.displayedData = this.data
    return;
  }
  
}

