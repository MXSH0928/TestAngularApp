import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './dialog-data';

@Component({
    selector: 'app-dialog',
    templateUrl: 'dialog.component.html',
  })
  export class DialogComponent {

    constructor(
      public dialogRef: MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onCancelClick(): void {
      this.dialogRef.close();
    }
  }
