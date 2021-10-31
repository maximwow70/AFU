import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AufGeneratorComponent } from './auf-generator.component';

describe('AufGeneratorComponent', () => {
  let component: AufGeneratorComponent;
  let fixture: ComponentFixture<AufGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AufGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AufGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
