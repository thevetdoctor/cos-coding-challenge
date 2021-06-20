import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = ''
  password = ''
  emailMissingInput = ''
  passwordMissingInput = ''
  loginError = ''

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
          this.emailMissingInput = this.email ? '' : 'Email is required';
          this.passwordMissingInput = this.password ? '' : 'Password is required';
          console.log(`${this.email}: ${this.password}`);

        return;
    }
}
