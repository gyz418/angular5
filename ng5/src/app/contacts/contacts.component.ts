import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  // list={}
  public list:any
  constructor(
    private router:Router,
    private http:HttpClient
  ) { }

  ngOnInit() {
    /*
    * 添加请求头
    * */
    // this.http.get('http://localhost:1234/users',{headers:new HttpHeaders().set('xx-token','tokenval')})
    this.http.get('http://localhost:1234/users')
      .toPromise().then(res=>{
      console.log(res);
      this.list=res
    })
  }
  del(id){
    console.log(id);
  }

}
