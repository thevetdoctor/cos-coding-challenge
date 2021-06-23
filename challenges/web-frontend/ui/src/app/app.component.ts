import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';
  userID:string = window.localStorage.getItem('userId') || '';
  private appSubscription: Subscription;

  constructor(private state: StateService) { 
    this.appSubscription = this.state.getUpdate().subscribe(message => {
      console.log('message: ', message);
      this.userID = message.text;
    })
  }
  

    ngOnInit(): void {
      this.userID = window.localStorage.getItem('userId') || '';
      console.log(this.userID);
    }
  
    ngOnDestroy(): void {
      console.log('unsubscribe from Subscription');
      this.appSubscription.unsubscribe();
    }

    clearCache() {
      window.localStorage.clear();
      this.userID = '';
    }
}
