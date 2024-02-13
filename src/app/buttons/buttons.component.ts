import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
 
  @Input() selectedButton: string | null = null;
  
  @Output() filterSelected = new EventEmitter<string | null>();

// Handle button selection
onFilterSelected(filter: string | null) {
    this.filterSelected.emit(filter);
}
}
