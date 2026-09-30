import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { Input_ } from '../../../shared/ui/input/input.component';
import { ButtonComponent } from '../../../shared/ui/button/button.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, ButtonComponent, Input_],
  templateUrl: './login.page.component.html'

})
export class LoginPageComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  submitted = false;

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  submit(): void {
    this.submitted = true;
    if (this.form.invalid) return;
    this.router.navigateByUrl('/app/dashboard');
  }
}
