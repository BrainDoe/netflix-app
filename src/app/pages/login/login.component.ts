import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Check if user is already logged in
    if(this.authService.loggedIn()) {
      this.router.navigate(['/series'])
    }

    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  onSubmit() {
    this.isSubmitted = true;
    if(this.form.invalid) {
      return;
    }

    const loginData = {
      email: this.loginForm.email.value,
      password: this.loginForm.password.value
    }

    console.log(loginData);

    // this.authService.login(loginData).subscribe(data => {
    //   this.authError = false
    //   this.localStorageService.setToken(data.token)
    //   this.router.navigate(['/checkout'])
    //   console.log(data)
    // }, (error: HttpErrorResponse) => {
    //   this.authError = true
    //   if(error.status !== 400) {
    //     this.errorMessage = 'Error in the server. Please try again later'
    //   }
    // })
  }

  get loginForm() {
    return this.form.controls
  }

}
