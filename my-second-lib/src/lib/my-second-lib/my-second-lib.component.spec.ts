import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MySecondLibComponent } from './my-second-lib.component';

describe('MySecondLibComponent', () => {
  let component: MySecondLibComponent;
  let fixture: ComponentFixture<MySecondLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySecondLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MySecondLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
