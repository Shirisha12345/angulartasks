import { Task4Module } from './task4/task4.module';
import { Task3Module } from './task3/task3.module';
import { Task1Module } from './task1/task1.module';
import { Task2Module } from './task2/task2.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Task2Module,
    Task1Module,
    Task3Module,
    Task4Module

  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
