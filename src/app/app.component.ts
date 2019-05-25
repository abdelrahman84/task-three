import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskthree';

  loginWithInsta(){
    window.location.href = 'https://api.instagram.com/oauth/authorize/?client_id=963a89c1b7384592abd2a17bfa19913b&redirect_uri=http://localhost:4200&response_type=token';
  }
}
