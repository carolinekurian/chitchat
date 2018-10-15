import { Component, OnInit } from '@angular/core';
import { NameDialogComponent } from './name-dialog.component';
import { Router } from '@angular/router';
import { VdlDialog } from 'vdl-angular';

@Component({
    selector: 'app-chat-landing',
    templateUrl: './chat-landing.component.html'
})

export class ChatLandingComponent implements OnInit {

    public name: string;
    constructor(public dialog: VdlDialog, public router: Router) {}

    ngOnInit() {

        setTimeout(() => {

            const dialogRef = this.dialog.open(NameDialogComponent, { width: '350px'});
            dialogRef.afterClosed().subscribe((result) => {
                this.name = result;
                this.router.navigate(['/chat'], { queryParams: { name: this.name}});
            });

        });

    }

}
