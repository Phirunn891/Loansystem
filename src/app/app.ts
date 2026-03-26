import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
// import { Loginbank } from "./loginbank/loginbank";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule] ,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'SchoolProject';
}
