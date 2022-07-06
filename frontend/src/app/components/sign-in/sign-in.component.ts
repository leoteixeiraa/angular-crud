import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public email = '';
  public senha = '';


  constructor( public authService: AuthService,
    public router: Router,
    ) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn == true) {
      this.router.navigate(['/home']);
    }
  }

}
