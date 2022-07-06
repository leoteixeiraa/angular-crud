import { AuthService } from 'src/app/shared/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    public authService: AuthService,
  ){ }

  ngOnInit() {
    console.log(this.authService.isLoggedIn);
  }
}
