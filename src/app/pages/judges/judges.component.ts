import { Component } from '@angular/core';
import { Judge } from 'src/app/interfaces/judge.interface';
import { JudgesService } from 'src/app/services/judges.service';

@Component({
  selector: 'app-judges',
  templateUrl: './judges.component.html',
  styleUrls: ['./judges.component.scss']
})
export class JudgesComponent {
  judges: Judge[] = [];
  loading = true;
  error = '';

  constructor(private judgesService: JudgesService) {}
  
  ngOnInit(): void {
    this.judgesService.getAll().subscribe({
      next: (data) => {
      this.judges = data;
      this.loading = false;
      },
      error: (err) => {
      this.error = 'Error al cargar los jueces.';
      this.loading = false;
      console.error(err);
      }
    });
  }
}
