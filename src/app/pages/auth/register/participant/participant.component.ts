import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParticipantsService } from 'src/app/services/participants.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantRegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  error = '';

  constructor(
    private fb: FormBuilder,
    private participantsService: ParticipantsService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      profile: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) return;

    this.participantsService.save(this.registerForm.value).subscribe({
      next: () => {
        sessionStorage.setItem('userRole', 'judge');
        this.router.navigate(['/participants']);
      },
      error: () => this.error = 'Error al registrar el participante'
    });
  }
}
