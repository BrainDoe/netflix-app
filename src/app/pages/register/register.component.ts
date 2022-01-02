import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('emailRef') emailRef!: ElementRef
  @ViewChild('passwordRef') passwordRef!: ElementRef

  email: string | any
  password: string | any

  constructor() { }

  ngOnInit(): void {
  }

  handleStart() {
    this.email = this.emailRef.nativeElement.value;
  }

  handleFinish() {
    this.password = this.passwordRef.nativeElement.value;
  }

}
