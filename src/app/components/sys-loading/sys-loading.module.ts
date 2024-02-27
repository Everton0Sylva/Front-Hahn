import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SysLoadingComponent } from './sys-loading.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { SysLoadingService } from '../sys-loading.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    SysLoadingComponent
  ],
  imports: [
    CommonModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.circleSwish,
      backdropBackgroundColour: 'rgba(0,0,0,0.5)',
      backdropBorderRadius: '6px',
      primaryColour: '#d0f1a0',
      fullScreenBackdrop: true,
    }),
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    SysLoadingComponent
  ],
  providers:[
    SysLoadingService
  ]
})
export class SysLoadingModule { }
