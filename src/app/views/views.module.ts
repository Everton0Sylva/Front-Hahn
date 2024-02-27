import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SysLoadingModule } from '../components/sys-loading/sys-loading.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
