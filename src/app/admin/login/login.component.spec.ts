import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuardGuard } from 'src/app/core/guard/auth-guard.guard';

class MockAuthService extends AuthGuardGuard {
  isAuthenticated() {
      return 'Mocked';
  }
}


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let testBedService: AuthGuardGuard;
  let componentService: AuthGuardGuard;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        ToastrModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    TestBed.overrideComponent(
      LoginComponent,
      { set: { providers: [{ provide: AuthGuardGuard, useClass: MockAuthService }] } }
  );
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    testBedService = TestBed.get(AuthGuardGuard);
    fixture.detectChanges();
    componentService = fixture.debugElement.injector.get(AuthGuardGuard);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
  inject([AuthGuardGuard], (injectService: AuthGuardGuard) => {
      expect(injectService).toBe(testBedService);
  })
);

it('Service injected via component should be and instance of MockAuthService', () => {
  expect(componentService instanceof MockAuthService).toBeTruthy();
});

it('form invalid when empty', () => {
  expect(component.loginForm.valid).toBeFalsy();
});

it('username field validity', () => {
  let name = component.loginForm.controls['username'];
  expect(name.valid).toBeFalsy();

  name.setValue("");
  expect(name.hasError('required')).toBeTruthy();
});

});
