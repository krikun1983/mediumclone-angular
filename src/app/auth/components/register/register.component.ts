import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { AuthService } from '../../services/auth.service';

import { registerAction } from '../../store/register.action';
import { isSubmittingSelector } from '../../store/selectors';
import { RegisterRequestInterface } from '../../types/register-request.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isSubmitting$!: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm(): void {
    console.log('initializeForm');
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    console.log(this.isSubmitting$);
  }

  onSubmit(): void {
    const request: RegisterRequestInterface = { user: this.form.value };
    this.store.dispatch(registerAction({ request }));
  }
}
