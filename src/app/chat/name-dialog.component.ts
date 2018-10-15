import { Component } from '@angular/core';
import { VdlDialogRef } from 'vdl-angular';

@Component({
  selector: 'app-name-dialog',
  templateUrl: './name-dialog.component.html',
  styleUrls: ['./name-dialog.component.css']
})
export class NameDialogComponent {

    public name: string;

    constructor(public dialogRef: VdlDialogRef<NameDialogComponent>) {}

    public onGo(): void {
        this.dialogRef.close(this.name);
    }

}
