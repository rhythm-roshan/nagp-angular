import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DistrictWiseComponent } from './district-wise.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { IDistrictDetails } from 'src/app/infrastructure/interfaces/idistrict-details';
import { of } from 'rxjs';
import { Covid19DataService } from 'src/app/core/services/covid19-data/covid19-data.service';

describe('DistrictWiseComponent', () => {
  let component: DistrictWiseComponent;
  let fixture: ComponentFixture<DistrictWiseComponent>;
  let route: ActivatedRoute;
  let service: Covid19DataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictWiseComponent ],
      imports: [HttpClientTestingModule,RouterModule.forRoot([])],
      providers:[Covid19DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(Covid19DataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
