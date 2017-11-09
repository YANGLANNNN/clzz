import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClzzNavComponent } from './clzz-nav.component';

describe('ClzzNavComponent', () => {
  let component: ClzzNavComponent;
  let fixture: ComponentFixture<ClzzNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClzzNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClzzNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
