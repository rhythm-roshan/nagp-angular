import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFooterComponent } from './page-footer.component';

describe('PageFooterComponent', () => {
  let component: PageFooterComponent;
  let fixture: ComponentFixture<PageFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain rhythm raj in the footer toolbar', () => {
    const footerText = "Rhythm Raj";
    const component = fixture.debugElement.componentInstance;
    expect(component.name).toContain(footerText);
  });

  it('should not contain abc in the footer toolbar', () => {
    const footerText = "abc";
    const component = fixture.debugElement.componentInstance;
    expect(component.name).not.toContain(footerText);
  });
});
