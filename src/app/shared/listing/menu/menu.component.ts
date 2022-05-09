import { Component, Input, OnInit } from '@angular/core';
import { MenuData } from 'src/app/models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Input() menuData: MenuData;
}
