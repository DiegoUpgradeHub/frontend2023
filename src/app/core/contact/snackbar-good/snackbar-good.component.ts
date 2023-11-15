import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-good',
  templateUrl: './snackbar-good.component.html',
  styleUrls: ['./snackbar-good.component.scss'],
})
export class SnackbarGoodComponent {
  snackBarRef = inject(MatSnackBarRef);
}
