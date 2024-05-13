import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalesPersonListComponent } from "./sales-person-list/sales-person-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SalesPersonListComponent]
})
export class AppComponent {
  title = 'Este é meu primeiro projeto em Angular';
  firstName = "Jan";
  lastName = 'Dinirso';
}
