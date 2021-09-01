import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  aboutList = [
    'This is a framework to develop the banking wallet application. This is similar to PhonePe application. ',
    'This application targets banking customers and makes them eligible to load money, deposit, widthdrawal, all kinds of payments etc. ',
    'An end-to-end solution for FDH bank including client and server side.',
    'We are developing the both native Android and iOS application, the team size was 18, 15 developers, 2 tester, 1 designer. So I got the experience of large size team. '
  ]
  projects = [
    {
      id: 1,
      imageUrl: "assets/images/image1.svg",
      header: "Wallet Framework",
      aboutList: [
        'This is a framework to develop the banking wallet application. This is similar to PhonePe application. ',
        'This application targets banking customers and makes them eligible to load money, deposit, widthdrawal, all kinds of payments etc. ',
        'An end-to-end solution for FDH bank including client and server side.',
        'We are developing the both native Android and iOS application, the team size was 18, 15 developers, 2 tester, 1 designer. So I got the experience of large size team. '
      ],
      technicalDetails: "We used the latest android technology stack such as android view model, live data, kedwig networking library, android ui, ktor, code generator, logging library, RPC framework etc.",
      challenges: "The security of transactions, the code generator and server-based UI was was the major challenges faced by team."
    },
    {
      id: 2,
      imageUrl: "assets/images/image-4.svg",
      header: "Hyundai GDMS 2.0",
      aboutList: [
        'This was the first enourmous size project with more than 200+ screens that i developed with e-mobility team at Wipro Ltd.',
        'This application was developed as enterprise application for Dealers, and can be used by team leader, managers, sales consultents.',
        'An end-to-end solution for managing the customers at Hyundai Autoever',
        'We developed the both native Android and iOS application, the team size was 12, 8 developers, 3 tester, 1 designer. So I got the experience of large size team. '
      ],
      technicalDetails: "We used the latest android technology stack such as android view model, live data, retorfit, butterknife[pretty much deprecated now], XML, java, android studio, maps, graphs, android product flavours etc. There was lot to learn.",
      challenges: "The major challege was to deal with login system because the internals of the application was dependent on login.The server was with the hyundai and we had to deal directly to them for api integrations or any minor change."
    },
    {
      id: 3,
      imageUrl: "assets/images/image-2.svg",
      header: "Android Interview Questions",
      aboutList: [
        'This is a framework to develop the banking wallet application. This is similar to PhonePe application. ',
        'This application targets banking customers and makes them eligible to load money, deposit, widthdrawal, all kinds of payments etc. ',
        'An end-to-end solution for FDH bank including client and server side.',
        'We are developing the both native Android and iOS application, the team size was 18, 15 developers, 2 tester, 1 designer. So I got the experience of large size team. '
      ],
      technicalDetails: "We used the latest android technology stack such as android view model, live data, kedwig networking library, android ui, ktor, code generator, logging library, RPC framework etc.",
      challenges: "The security of transactions, the code generator and server-based UI was was the major challenges faced by team."
    },
    {
      id: 3,
      imageUrl: "assets/images/image-3.svg",
      header: "Wallet Framework",
      aboutList: [
        'This is a framework to develop the banking wallet application. This is similar to PhonePe application. ',
        'This application targets banking customers and makes them eligible to load money, deposit, widthdrawal, all kinds of payments etc. ',
        'An end-to-end solution for FDH bank including client and server side.',
        'We are developing the both native Android and iOS application, the team size was 18, 15 developers, 2 tester, 1 designer. So I got the experience of large size team. '
      ],
      technicalDetails: "We used the latest android technology stack such as android view model, live data, kedwig networking library, android ui, ktor, code generator, logging library, RPC framework etc.",
      challenges: "The security of transactions, the code generator and server-based UI was was the major challenges faced by team."
    },
  ]
}
