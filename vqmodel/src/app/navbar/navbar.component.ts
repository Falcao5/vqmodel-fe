import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  homepagePath: string;

  constructor()
  {
    this.homepagePath = environment.homepagePath;
  }

  ngOnInit() 
  {

  }

}