import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VdlDialogModule, VdlFormFieldModule, VdlInputModule, VdlButtonModule } from 'vdl-angular';

import { AppComponent } from './app.component';
import { ChatLandingComponent } from './chat/chat-landing.component';
import { NameDialogComponent } from './chat/name-dialog.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChatWindowComponent } from './chat/chat-window.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', component: ChatLandingComponent},
  {path: 'chat', component: ChatWindowComponent},
  {path: '**', redirectTo: ''}

];

@NgModule({
  declarations: [
    AppComponent,
    ChatLandingComponent,
    NameDialogComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    VdlDialogModule,
    VdlFormFieldModule,
    VdlInputModule,
    VdlButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NameDialogComponent]
})
export class AppModule { }

