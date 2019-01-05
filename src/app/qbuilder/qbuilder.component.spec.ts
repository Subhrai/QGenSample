import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QbuilderComponent } from './qbuilder.component';

describe('QbuilderComponent', () => {
  let component: QbuilderComponent;
  let fixture: ComponentFixture<QbuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QbuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
