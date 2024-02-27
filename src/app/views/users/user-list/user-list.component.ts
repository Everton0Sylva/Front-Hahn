import { Component, TemplateRef, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { TranslateService } from '@ngx-translate/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../../model/user';
import { SysLoadingService } from '../../../components/sys-loading.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class UserListComponent {
  constructor(private httpService: HttpService, private translate: TranslateService,
    private sysLoadingService: SysLoadingService, private toastr: ToastrService) { }
  private offcanvasService = inject(NgbOffcanvas);
  @ViewChild('offcanvasupdate') offcanvasupdate!: TemplateRef<any>;

  public listRow: any = [];
  public listRowFilter: any = [];
  public listCol: any = [];

  public selectedUser: User | null = null;

  @ViewChild(DatatableComponent)
  table!: DatatableComponent;


  ngAfterViewInit() {
    this.onLoadDataTable();
  }

  onLoadDataTable() {
    this.listRowFilter = [];
    this.sysLoadingService.show();
    setTimeout(() => {
      this.listCol = [
        { name: this.translate.instant("ID"), prop: "id" },
        { name: this.translate.instant("company"), prop: "company" },
        { name: this.translate.instant("fullname"), prop: "fullName" },
        { name: this.translate.instant("email"), prop: "email" },
      ];
    }, 200)
    this.httpService.fnGets()
      .then((data: any) => {
        this.listRow = [...data];
        if (this.listRow.length > 0) {
          this.listRowFilter = [...this.listRow];
        }
        this.sysLoadingService.hide();
      }).catch((error: any) => {
        console.log(error);
        this.sysLoadingService.hide();
      })
  }
  updateFilter(event: any) {
    this.listRowFilter = [];
    const val = event.target.value.toLowerCase();
    const temp = this.listRow.filter((r: any) => {
      return r.fullName.toLowerCase().indexOf(val) !== -1 ||
        r.company.toLowerCase().indexOf(val) !== -1 || r.email.toLowerCase().indexOf(val) !== -1 || !val;
    });

    this.listRowFilter = temp;
    this.table.offset = 0;
  }
  onEdit(row: any) {
    if (row) {
      this.sysLoadingService.show();
      this.httpService.fnGet(row.id).then((data: any) => {
        this.offcanvasService.open(this.offcanvasupdate, {
          position: 'bottom',
          backdropClass: 'bg-secondary.bg-gradient',
          keyboard: false,
          backdrop: 'static'
        }).dismissed.subscribe((reason: any) => {
          if (reason) {
            this.onLoadDataTable();
          }
        });
        this.selectedUser = new User();
        this.selectedUser.fromObj(data)
        this.sysLoadingService.hide();
      }).catch((error: any) => {
        console.log(error);
        this.sysLoadingService.hide();
      })
    }
  }
  onDelete(row: any) {
    if (row) {
      this.sysLoadingService.show();
      this.httpService.fnDelete(row.id).then((data: any) => {
        let message = this.translate.instant('user') + ' ' + this.translate.instant('deleted');
        this.toastr.success(message, this.translate.instant('success'));
        this.sysLoadingService.hide();
      }).catch((error: any) => {
        console.log(error);
        let message = this.translate.instant('user') + ' ' + this.translate.instant('was-not') + ' ' + this.translate.instant('deleted');
        this.toastr.error(message, this.translate.instant('badly'));
        this.sysLoadingService.hide();
      })
    }
  }

  onNew() {
    this.selectedUser = new User();
    this.offcanvasService.open(this.offcanvasupdate, {
      position: 'bottom',
      backdropClass: 'bg-secondary.bg-gradient',
      keyboard: false,
      backdrop: 'static'
    }).dismissed.subscribe((reason: any) => {
      if (reason) {
        this.onLoadDataTable();
      }
    });
  }
}
