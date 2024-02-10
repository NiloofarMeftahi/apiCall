import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fund-list',
  standalone: true,
  imports: [],
  templateUrl: './fund-list.component.html',
  styleUrl: './fund-list.component.css'
})
export class FundListComponent {
  @Input() displayedData: any[] = [];

}
