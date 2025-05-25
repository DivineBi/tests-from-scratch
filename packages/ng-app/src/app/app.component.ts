import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,       // ✅ Important
  imports: [],            // Tu peux y mettre CommonModule ou d'autres composants standalone si besoin
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ✅ Corrigé ici (pluriel)
})
export class AppComponent {
  title = 'ng-app';
}

