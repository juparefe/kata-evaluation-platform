import { Component } from '@angular/core';
import { Result } from 'src/app/interfaces/result.interface';
import { ScoresService } from 'src/app/services/scores.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  
  error = '';
  loading = true;
  results: Result[] = [];
  summary: any;

  constructor(private scoresService: ScoresService) {}

  ngOnInit(): void {
    this.loadResults();
    this.loadSummary();
  }

  loadResults(): void {
    this.scoresService.getAll().subscribe({
      next: (data) => {
      this.results = data;
      this.loading = false;
      },
      error: (err) => {
      this.error = 'Error al cargar los resultados.';
      this.loading = false;
      console.error(err);
      }
    });
  }

  loadSummary(): void {
    this.scoresService.getSummary().subscribe({
      next: (data) => {
      this.summary = data;
      this.loading = false;
      },
      error: (err) => {
      this.error = 'Error al cargar el resumen.';
      this.loading = false;
      console.error(err);
      }
    });
  }
}
