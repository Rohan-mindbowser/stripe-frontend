import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomescreenComponent } from './homescreen.component';

describe('HomescreenComponent', () => {
  let component: HomescreenComponent;
  let fixture: ComponentFixture<HomescreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomescreenComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
