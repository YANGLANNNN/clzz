import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClzzTableComponent } from './clzz-table.component';

describe('ClzzTableComponent', () => {
  let component: ClzzTableComponent;
  let fixture: ComponentFixture<ClzzTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClzzTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClzzTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
