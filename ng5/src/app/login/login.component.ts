import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  obj = {   // 用等号
    email: '',
    pwd: ''
  }

  constructor(
    private http: HttpClient,
    private router: Router) {
  }

  ngOnInit() {
  }

  // 登陆
  login() {
    // console.log('email', this.email);
    // console.log('pwd', this.pwd);
  }

  // 提交
  submit() {
    const formData = this.obj
    // this.http.post('http://localhost:1234/users',formData)
    this.http.get('http://localhost:1234/users')   // 请求数据
      .toPromise()
      .then(res => {
        console.log(res);
        localStorage.setItem('ngToken', '1234567890')
        localStorage.setItem('users', this.obj.email)
        this.router.navigate(['/'])  // 页面跳转
      }).catch(err => {
      console.log(err);
    })
  }

}
