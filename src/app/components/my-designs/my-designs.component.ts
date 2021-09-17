import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-designs',
  templateUrl: './my-designs.component.html',
  styleUrls: ['./my-designs.component.css']
})
export class MyDesignsComponent implements OnInit {
sileCount:number=5
  slides = [{'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},{'image': 'https://therichpost.com/wp-content/uploads/2021/02/Vuejs-Fashion-Ecommerce-Template-Free.png'}, {'image': 'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png'}];

  constructor() { }

  ngOnInit(): void {
  }

}
