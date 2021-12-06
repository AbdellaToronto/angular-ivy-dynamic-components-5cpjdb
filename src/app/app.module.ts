import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic.component';
import { TestWrapper } from './testwrapper.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DynamicComponent, TestWrapper],
  bootstrap: [AppComponent],
})
export class AppModule {}
