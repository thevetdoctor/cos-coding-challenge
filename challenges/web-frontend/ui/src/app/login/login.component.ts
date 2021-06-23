import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  // @Output() updatedUserId: EventEmitter<string> = new EventEmitter<string>();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
          this.emailMissingInput = this.email ? '' : 'Email is required';
          this.passwordMissingInput = this.password ? '' : 'Password is required';

          this.authService.login('authentication', {email: this.email, password: this.password}).subscribe(auth => {
            if(auth?.token) {
              localStorage.setItem('userId', this.email);
              localStorage.setItem('authtoken', auth.token);

              // this.updatedUserId.emit(this.email);
              console.log(this.email)

              this.router.navigate(['auctions'])
            } else {
              this.loginError = 'Login failed'
              return;
            }
          });
        return;
    }
}
