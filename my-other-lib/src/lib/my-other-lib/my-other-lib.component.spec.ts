import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyOtherLibComponent } from './my-other-lib.component';

describe('MyOtherLibComponent', () => {
  let component: MyOtherLibComponent;
  let fixture: ComponentFixture<MyOtherLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyOtherLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyOtherLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
