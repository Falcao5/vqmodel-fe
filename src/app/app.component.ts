import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vqmodel';

  public aircrafts =
    {
      name: 'Aircrafts',
      icon: 'airplanemode_active',
      route: environment.aircraftRoute,
    };

  public factory =
    {
      name: 'Factory',
      icon: 'construction'
    };

  public reviews =
    {
      name: 'Reviews',
      icon: 'book_online',
      route: environment.reviewsRoute,
    };

  public distributors =
    {
      name: 'Distributors',
      icon: 'send'
    };

  public contactUs =
    {
      name: 'Contact us',
      icon: 'email'
    };
}
