import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { Participant } from 'src/app/interfaces/participant.interface';
import { Score } from 'src/app/interfaces/score.interface';
import { ParticipantsService } from 'src/app/services/participants.service';
import { ScoresService } from 'src/app/services/scores.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent {

  error = '';
  loading = true;
  participants: Participant[] = [];
  scoreForm!: FormGroup;
  selectedParticipant: Participant | null = null;
  userRole!: string;
  userId!: string;

  constructor(
    private fb: FormBuilder,
    private participantsService: ParticipantsService,
    private scoresService: ScoresService
  ) {}
  
  ngOnInit(): void {
    this.userRole = sessionStorage.getItem('userRole') || '';
    this.userId = sessionStorage.getItem('userId') || '';
    this.loadParticipants();
    this.initForm();
  }

  loadParticipants(): void {
    this.participantsService.getAll().subscribe({
      next: (data) => {
      this.participants = data;
      this.loading = false;
      },
      error: (err) => {
      this.error = 'Error al cargar los participantes.';
      this.loading = false;
      console.error(err);
      }
    });
  }

  initForm(): void {
    this.scoreForm = this.fb.group({
      resume: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      communication: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      technical: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      bonus: [0, [Validators.min(0), Validators.max(10)]]
    });
  }

  openScoreModal(participant: Participant): void {
    this.selectedParticipant = participant;
    this.modal('open');
  }

  modal(action: string): void {
    console.log("Llega con action: ",action)
    const modalElement = document.getElementById('scoreModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      console.log('mosal: ', modal);
      if (action === 'open') {
        modal.show();
      } else {
        modal.hide();
        modal.hide();
      }
      
    }
  }

  submitScore(): void {
    if (this.scoreForm.valid && this.selectedParticipant && this.selectedParticipant.id && this.userId) {
      const { resume, communication, technical, bonus } = this.scoreForm.value;
  
      const score: Score = {
        participant_id: this.selectedParticipant.id,
        judge_id: this.userId,
        profile_score: resume,
        communication_score: communication,
        technical_score: technical,
        extra_points: bonus
      };
  
      this.scoresService.save(score).subscribe({
        next: () => {
          this.modal('close');
        }
        
      });
    }
  }
}
