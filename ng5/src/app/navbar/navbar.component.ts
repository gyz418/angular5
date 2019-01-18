import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  email = ''   //  用等号

  constructor(
    private router:Router
  ) {
  }

  ngOnInit() {
    this.email = localStorage.getItem('users')
  }
  exit(){
    localStorage.removeItem('ngToken')
    this.router.navigate(['/login'])
    console.log('退出');
  }
}
