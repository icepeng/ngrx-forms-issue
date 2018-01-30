import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { NgrxFormsModule } from 'ngrx-forms';

import { AppComponent } from './app.component';
import { reducers } from './reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule.forRoot(reducers), NgrxFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
