import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLatestNewsComponent } from './add-latest-news.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService, ToastrModule } from 'ngx-toastr';

describe('AddLatestNewsComponent', () => {
  let component: AddLatestNewsComponent;
  let fixture: ComponentFixture<AddLatestNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLatestNewsComponent ],   
      imports:[FormsModule,ReactiveFormsModule,RouterTestingModule,HttpClientTestingModule,ToastrModule.forRoot() ]  ,
      providers:[{provide: ToastrService, useClass: ToastrService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLatestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.newsForm.valid).toBeFalsy();
});

it('title field validity', () => {
    let name = component.newsForm.controls['title'];
    expect(name.valid).toBeFalsy();

    name.setValue("");
    expect(name.hasError('required')).toBeTruthy();
});
});
