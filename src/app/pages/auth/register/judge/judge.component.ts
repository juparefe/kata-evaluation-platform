import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JudgesService } from 'src/app/services/judges.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-judge',
  templateUrl: './judge.component.html',
  styleUrls: ['./judge.component.scss']
})
export class JudgeRegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  error = '';

  constructor(
      private fb: FormBuilder,
      private judgesService: JudgesService,
      private router: Router
  ) {
    this.registerForm = this.fb.group({
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.invalid) return;

    this.judgesService.save(this.registerForm.value).subscribe({
      next: () => {
        sessionStorage.setItem('userRole', 'judge');
        this.router.navigate(['/participants'])
      },
      error: () => this.error = 'Error al registrar el jurado'
    });
  }
}
