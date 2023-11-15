import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-bad',
  templateUrl: './snackbar-bad.component.html',
  styleUrls: ['./snackbar-bad.component.scss']
})
export class SnackbarBadComponent {
  snackBarRef = inject(MatSnackBarRef);
}
