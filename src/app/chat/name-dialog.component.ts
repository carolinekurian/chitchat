import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-name-dialog',
  templateUrl: './name-dialog.component.html',
  styleUrls: ['./name-dialog.component.css']
})
export class NameDialogComponent {

    public name: string;

    constructor(public dialogRef: MatDialogRef<NameDialogComponent>) {}

    public onGo(): void {
        this.dialogRef.close(this.name);
    }

}
