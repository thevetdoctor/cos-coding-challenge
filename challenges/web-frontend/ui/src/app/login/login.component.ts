import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
          this.emailMissingInput = this.email ? '' : 'Email is required';
          this.passwordMissingInput = this.password ? '' : 'Password is required';
          console.log(`${this.email}: ${this.password}`);

          this.authService.login('authentication', {email: this.email, password: this.password}).subscribe(auth => {
            if(auth?.token) {
              this.router.navigate(['auctions'])
            } else {
              this.loginError = 'Login failed'
              return;
            }
          });
        return;
    }
}
