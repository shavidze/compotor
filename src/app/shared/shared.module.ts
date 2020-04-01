import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HeaderComponent, AboutComponent],
  imports: [CommonModule, BrowserModule, RouterModule],
  exports: [HeaderComponent]
})
export class SharedModule {}
