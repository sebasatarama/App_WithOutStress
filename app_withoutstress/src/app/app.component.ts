import { TokenStorageService } from './Services/token-storage.service';
import { User } from './Models/user.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app_withoutstress';
  isLoggedIn = false;
  username ?: string;

  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    this.isLoggedIn = false; // Para probar estados Conectado / Desconectado

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      // this.username = user.username;
      this.username = "Usuario123";
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
