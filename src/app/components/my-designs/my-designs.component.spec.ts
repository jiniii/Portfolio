import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDesignsComponent } from './my-designs.component';

describe('MyDesignsComponent', () => {
  let component: MyDesignsComponent;
  let fixture: ComponentFixture<MyDesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDesignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
