import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-libraries',
  templateUrl: './my-libraries.component.html',
  styleUrls: ['./my-libraries.component.css']
})
export class MyLibrariesComponent implements OnInit {

  cardData = [{ cardTitle: "Kedwig", cardContent: "Clean way of networking in Android", cardDescription: "Kedwig is a network library which is built in top of OkHttp 3.0, and uses Kotlin DSL for clear and robust client interface. " },
  { cardTitle: "LibUI", cardContent: "Collection of reusable components", cardDescription: "An android library of custom views, this help to reuse the code and develop application at faster rate." },
  { cardTitle: "Utils", cardContent: "Collection of reusable utilities", cardDescription: "This library contains the utilities for animations, keyboards, form validations, date time, networking etc." }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
