import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {
  product:any[]=[
    {
      productName:"Hp",
      available:true,
      Quantity:5,
    },
    {
      productName:"Lenovo",
      available: true,
      Quantity:6,

    },
    {
      productName:"Dell",
      available: true,
      Quantity:6,
    },
    {
      productName:"Apple",
      available: false,
      Quantity:3,
    }
  ]
}
