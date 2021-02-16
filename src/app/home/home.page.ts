import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  staySignedIn: boolean = true;

  constructor() {}

  changeStatus(value) {
    this.staySignedIn = value;
  }

}
