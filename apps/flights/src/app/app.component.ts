import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UtilAuthComponent } from '@my-project/util-auth';

@Component({
  imports: [NxWelcomeComponent, RouterModule, UtilAuthComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'flights';
}
