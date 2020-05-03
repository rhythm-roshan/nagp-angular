import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateWiseComponent } from './state-wise.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Covid19DataService } from 'src/app/core/services/covid19-data/covid19-data.service';
import { IStateDetails } from 'src/app/infrastructure/interfaces/istate-details';
import { of } from 'rxjs';

describe('StateWiseComponent', () => {
  let component: StateWiseComponent;
  let fixture: ComponentFixture<StateWiseComponent>;
  let service: Covid19DataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateWiseComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers:[Covid19DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(Covid19DataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should call getStateData and return list of state", async(() => {
    const response: IStateDetails[] = [];  
    spyOn(service, 'getStateData').and.returnValue(of(response))  
    component.getState();  
    fixture.detectChanges();  
    expect(component.stateData).toEqual(response);
  }));
});
