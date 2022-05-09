import { MenuData } from 'src/app/models/menu.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: MenuData[];
  constructor() {
    this.data = [
      {
        image: '../../../../assets/images/1.jpg',
        title: 'Fried Rice',
        description: 'good',
        price: '$4.00',
      },
      {
        image: '../../../../assets/images/2.jpg',
        title: 'Jollof Rice',
        description: 'good',
        price: '$5.00',
      },
      {
        image: '../../../../assets/images/3.jpg',
        title: 'Semovita',
        description: 'good',
        price: '$6.00',
      },
      {
        image: '../../../../assets/images/1.jpg',
        title: 'Fried Rice',
        description: 'good',
        price: '$4.00',
      },
      {
        image: '../../../../assets/images/2.jpg',
        title: 'Jollof Rice',
        description: 'good',
        price: '$5.00',
      },
      {
        image: '../../../../assets/images/3.jpg',
        title: 'Semovita',
        description: 'good',
        price: '$6.00',
      },
    ];
  }

  ngOnInit(): void {}
}
