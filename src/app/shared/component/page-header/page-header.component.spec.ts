import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderComponent } from './page-header.component';

describe('PageHeaderComponent', () => {
  let component: PageHeaderComponent;
  let fixture: ComponentFixture<PageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain Covid-19 Tracker in the header toolbar', () => {
    const text = "Covid-19 Tracker";
    const component = fixture.debugElement.componentInstance;
    expect(component.pageTitle).toContain(text);
  });

  it('should not contain abc in the header toolbar', () => {
    const text = "abc";
    const component = fixture.debugElement.componentInstance;
    expect(component.pageTitle).not.toContain(text);
  });
});
