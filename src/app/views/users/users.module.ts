import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../users/users.component';
import { TranslateModule } from '@ngx-translate/core';
import { UserListComponent } from './user-list/user-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpService } from '../../services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule } from 'ngx-loading';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UserUpdateComponent } from './user-update/user-update.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SysLoadingModule } from '../../components/sys-loading/sys-loading.module';


@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserUpdateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    NgxDatatableModule,
    NgxLoadingModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    SysLoadingModule
  ],
  exports: [
    UsersComponent,
    UserListComponent,
    UserUpdateComponent
  ],
  providers:[
    HttpService
  ]
})
export class UsersModule { }
