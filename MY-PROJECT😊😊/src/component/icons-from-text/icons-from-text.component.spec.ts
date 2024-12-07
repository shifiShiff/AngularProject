import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsFromTextComponent } from './icons-from-text.component';

describe('IconsFromTextComponent', () => {
  let component: IconsFromTextComponent;
  let fixture: ComponentFixture<IconsFromTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsFromTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconsFromTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
