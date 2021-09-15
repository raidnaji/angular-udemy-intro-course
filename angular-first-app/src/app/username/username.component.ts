import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  username = '';
  userStatus = 'No username entered';
  isStringEmpty = true;

  constructor() { }

  ngOnInit(): void {
  }

  onUserCreate(event) {
    this.isStringEmpty = false;
  }

  onResetUser() {
    this.username = '';
    this.isStringEmpty = true;
  }

}
