import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Aula de Services</h1>
  <app-card/>
  <router-outlet />`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-services';
}
