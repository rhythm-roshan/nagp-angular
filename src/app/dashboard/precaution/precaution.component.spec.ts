import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecautionComponent } from './precaution.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IPrecautionMeasures } from 'src/app/infrastructure/interfaces/iprecaution-measures';
import { of } from 'rxjs';
import { PrecautionDataService } from 'src/app/core/services/precaution/precaution-data.service';

describe('PrecautionComponent', () => {
  let component: PrecautionComponent;
  let fixture: ComponentFixture<PrecautionComponent>;
  let service: PrecautionDataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecautionComponent ],
      imports: [HttpClientTestingModule],
      providers:[PrecautionDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecautionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(PrecautionDataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should call getPrecautions and return list of Precautions", async(() => {
    const response: IPrecautionMeasures[] = [];  
    spyOn(service, 'getPrecautions').and.returnValue(of(response))  
    component.getPrecaution();  
    fixture.detectChanges();  
    expect(component.precaution).toEqual(response);
  }));

});
