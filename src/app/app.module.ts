import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClzzNavComponent } from './clzz-nav/clzz-nav.component';
import { ClzzTableComponent } from './clzz-table/clzz-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ClzzNavComponent,
    ClzzTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
