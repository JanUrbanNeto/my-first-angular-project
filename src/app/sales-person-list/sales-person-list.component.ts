import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-sales-person-list',
  standalone: true,
  imports: [NgFor, NgIf, CurrencyPipe],
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "anup@vendas.com", 50000),
    new SalesPerson("Jan", "Dinirso", "jan@vendas.com", 70000),
    new SalesPerson("Carla", "Lemes", "carla@vendas.com", 120000),
    new SalesPerson("Liz", "Marrie", "liz@vendas.com", 130000)
  ];

}
