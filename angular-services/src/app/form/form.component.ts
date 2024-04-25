import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() submitted = new EventEmitter();
  query: string = '';

  constructor() {}

  ngOnInit(): void {
  }

  // getValue(event: Event): string {
  //   return (event.target as HTMLInputElement).value;
  // }

  // onSubmit(event: Event) {
  //   event.preventDefault();
  //   this.submitted.emit(this.query);
  // }

  onSubmit() {
    // console.log(this.query)
   //console.log(data);
   this.submitted.emit(this.query);
  }
}
