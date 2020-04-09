import { Component } from '@angular/core';

@Component({

  selector: 'pm-root',
  template:
  `<nav class='navbar navbar-dark bg-dark navbar-expand-lg'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='navbar-nav'>
      <li class='nav-item'><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
      <li class='nav-item'><a class='nav-link'[routerLink]="['/product']">Product List</a></li>
    </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent
{
  pageTitle : string = "John Odindo's Products";
}