import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DistrictWiseComponent } from './district-wise.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DistrictWiseComponent', () => {
  let component: DistrictWiseComponent;
  let fixture: ComponentFixture<DistrictWiseComponent>;
  let route: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictWiseComponent ],
      imports: [HttpClientTestingModule,RouterModule.forRoot([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
