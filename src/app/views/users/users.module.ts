import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../users/users.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    UsersComponent
  ],
})
export class UsersModule { }
