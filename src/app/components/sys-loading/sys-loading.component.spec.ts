import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysLoadingComponent } from './sys-loading.component';

describe('SysLoadingComponent', () => {
  let component: SysLoadingComponent;
  let fixture: ComponentFixture<SysLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SysLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SysLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
