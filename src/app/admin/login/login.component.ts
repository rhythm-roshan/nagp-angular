import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/infrastructure/interfaces/iuser';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // variable of login form.
  loginForm: FormGroup;
  /** Array of login user data. */
  private loginData: IUser[];
  /**
   *
   * @param fb : FormBuilder
   * @param route : Router
   * @param loginService : LoginService
   */
  constructor(private fb: FormBuilder, private route: Router, private loginService: LoginService,
    private toastrService: ToastrService) {

    /**
     * Login form initialized with default values.
     */
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * This method returns the error messages.
   */
  getErrorMessage() {
    return this.loginForm.get('username').hasError('required') ? 'You must enter a value' :
      this.loginForm.get('password').hasError('required') ? 'You must enter a value' :
        '';
  }

  /** Clears the local storage initially */
  ngOnInit() {
    if (localStorage.getItem('TOKEN')) {
      localStorage.clear();
    }
    this.loginService.getLatestUser().subscribe(data => {
      this.loginData = data;
    })
  }

  /**
   * Login the user and redirect to dashboard when valid.
   * @param myform : IUser
   */
  login(myform: IUser) {
    if (this.validateUser(myform)) {
      localStorage.setItem('TOKEN', 'token');
      localStorage.setItem('username', myform.username);
      this.route.navigate(['/dashboard/state']);
      this.toastrService.success('Logged in successfully!', 'Admin Login');
    } else {
      this.toastrService.warning('Please enter valid credentials!', 'Admin Login');
    }

  }

  /**
   * resets the login form.
   */
  resetForm() {
    this.loginForm.reset();
  }

  validateUser(user: IUser): boolean {
    let validUser = false;
    if (this.loginData.findIndex(usr => user.username.toLowerCase() === usr.username.toLowerCase() &&
      user.password.toLowerCase() === usr.password.toLowerCase()) > -1) {
      validUser = true;
    }
    return validUser;
  }
}
