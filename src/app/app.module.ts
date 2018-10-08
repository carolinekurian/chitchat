import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ChatLandingComponent } from './chat/chat-landing.component';
import { NameDialog } from './chat/name-dialog.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChatWindowComponent } from './chat/chat-window.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', component: ChatLandingComponent},
  {path: 'chat', component: ChatWindowComponent},
  {path: '**', redirectTo: ''}

]

@NgModule({
  declarations: [
    AppComponent,
    ChatLandingComponent,
    NameDialog,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NameDialog]
})
export class AppModule { }

