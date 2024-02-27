import { Component, Input, inject } from '@angular/core';
import { User } from '../../../model/user';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../../../services/http.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { SysLoadingService } from '../../../components/sys-loading.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.scss'
})
export class UserUpdateComponent {
  private offcanvasService = inject(NgbOffcanvas);
  @Input()
  user: User| null = null;

  constructor(private httpService: HttpService, private toastr: ToastrService, private translate: TranslateService,
    private sysLoadingService: SysLoadingService) {
  }

  onUpdate() {    
    this.sysLoadingService.show();
    if(this.user?.Id){
    this.httpService.fnPut(this.user).then((data: any) => {
      this.sysLoadingService.hide();
      let message = this.translate.instant('user') + ' ' + this.translate.instant('updated');
      this.toastr.success(message, this.translate.instant('success'));
      this.offcanvasService.dismiss("reload");
    }).catch((error: any) => {
      console.log(error);
      let message = this.translate.instant('user') + ' ' + this.translate.instant('was-not') + ' ' + this.translate.instant('updated');
      this.toastr.error(message, this.translate.instant('badly'));
    })
  } else{
    this.user!.Id = "0";
    this.httpService.fnPost(this.user).then((data: any) => {
      this.sysLoadingService.hide();
      let message = this.translate.instant('user') + ' ' + this.translate.instant('created');
      this.toastr.success(message, this.translate.instant('success'));
      this.offcanvasService.dismiss("reload");
    }).catch((error: any) => {
      console.log(error);
      let message = this.translate.instant('user') + ' ' + this.translate.instant('was-not') + ' ' + this.translate.instant('created');
      this.toastr.error(message, this.translate.instant('badly'));
    })
  }
  }


  onCancel() {
    if(this.user?.Id){
    let message = this.translate.instant('user') + ' ' + this.translate.instant('update') + ' ' + this.translate.instant('canceled');
    this.toastr.info(message);
    }
    this.offcanvasService.dismiss();
  }
  
}
