import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-contacts-new',
  templateUrl: './contacts-new.component.html',
  styleUrls: ['./contacts-new.component.css']
})
export class ContactsNewComponent implements OnInit {
  formData={
    name:'',
    age:''
  }
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  submit(){
    console.log(this.formData.name);
    console.log(this.formData.age);
    this.router.navigate(['/contacts'])
  }
}
