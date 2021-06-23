import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';
  userID:string = window.localStorage.getItem('userId') || '';
  userEmail:string = '';

  constructor() { }
  
  ngOnInit(): void {
    this.userID = window.localStorage.getItem('userId') || '';
    console.log(this.userID);
  }

    clearCache() {
      window.localStorage.clear();
      this.userID = '';
    }

    onUpdateUserId(userID:any): void {
      this.userEmail = userID;
      this.ngOnInit();
      console.log(this.userEmail)
    }
}
