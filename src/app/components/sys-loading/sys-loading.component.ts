import { Component } from '@angular/core';
import { SysLoadingService } from '../sys-loading.service';

@Component({
  selector: 'sys-loading',
  templateUrl: './sys-loading.component.html',
  styleUrl: './sys-loading.component.scss'
})
export class SysLoadingComponent {

  public loading: boolean = false;

  constructor(private sysLoadingService: SysLoadingService) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.sysLoadingService.getLoading().subscribe((bool: boolean) => {
        this.loading = bool;
      })
    }, 200);
  }
}
