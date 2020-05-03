import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call goBack()', async(() => {
    spyOn(component, 'goBack');
  
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.goBack).toHaveBeenCalled();
    });
  }));

  it('should contain Go back in the go back button', () => {
    const text = "Go to Home page";
    const component = fixture.debugElement.componentInstance;
    expect(component.goHomePage).toContain(text);
  });

});
