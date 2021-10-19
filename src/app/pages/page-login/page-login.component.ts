import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import {
  AuthenticationRequest,
} from '../../../gs-api/src/models/authentication-request';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  
  username: string = '';
  password: string = '';
  return: string = '';

  authenticationRequest: AuthenticationRequest = {};
  errorMessage = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Get the query params
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/login');
  }

   validatorPassword(fc: FormControl) {
    const value = fc.value as string;
    const isInvalid = 'password' === value.trim().toLowerCase();
    return isInvalid ? { passwordError: 'Password is not a strong password'} : null;
  }

  login() {
    //console.log()
    this.userService.login(this.authenticationRequest).subscribe((data) => {
      this.userService.setAccessToken(data);
      this.getUserByEmail();
     // this.router.navigate(['']);
      this.router.navigateByUrl(this.return);
    }, error => {
      this.errorMessage = 'Login et / ou mot de passe incorrecte';
    });
  }
  onSubmit() {
    this.submitted = true;

    alert("dddddd")

    
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.login();
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  
  onReset() {
    this.submitted = false;
    this.loginForm.reset();
}

  getUserByEmail(): void {
    this.userService.getUserByEmail(this.authenticationRequest.login)
    .subscribe(user => {
      this.userService.setConnectedUser(user);
    });
  }

}
function MustMatch(arg0: string, arg1: string): any {
  throw new Error('Function not implemented.');
}

