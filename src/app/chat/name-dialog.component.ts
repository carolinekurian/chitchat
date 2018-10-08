import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'name-dialog',
  templateUrl: './name-dialog.component.html',
  styleUrls: ['./name-dialog.component.css']
})
export class NameDialog {

    public name: string;

    constructor(public dialogRef: MatDialogRef<NameDialog>) {}

    public onGo(): void {
        this.dialogRef.close(this.name);
    }

}
