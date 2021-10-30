import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpseertUserComponentComponent } from './upseert-user-component.component';

describe('UpseertUserComponentComponent', () => {
  let component: UpseertUserComponentComponent;
  let fixture: ComponentFixture<UpseertUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpseertUserComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpseertUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
