import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyqueriesComponent } from './myqueries.component';

describe('MyqueriesComponent', () => {
  let component: MyqueriesComponent;
  let fixture: ComponentFixture<MyqueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyqueriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
