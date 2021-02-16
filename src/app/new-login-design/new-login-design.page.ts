import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-login-design',
  templateUrl: './new-login-design.page.html',
  styleUrls: ['./new-login-design.page.scss'],
})
export class NewLoginDesignPage implements OnInit {

  staySignedIn: boolean = true;

  constructor() {}

  ngOnInit() {}

  changeStatus(value) {
    this.staySignedIn = value;
  }

}