import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishqueryComponent } from './publishquery.component';

describe('PublishqueryComponent', () => {
  let component: PublishqueryComponent;
  let fixture: ComponentFixture<PublishqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishqueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
