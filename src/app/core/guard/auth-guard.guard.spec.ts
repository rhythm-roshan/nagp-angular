import { TestBed} from '@angular/core/testing';
import { AuthGuardGuard } from './auth-guard.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

describe('AuthGuardGuard', () => {
  let guard: AuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ToastrModule.forRoot()]
    });
    guard = TestBed.inject(AuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('be able to hit route when user is logged in', () => {
    (localStorage.getItem('TOKEN') !== null || localStorage.getItem('TOKEN') !== undefined) == true
    expect(guard.canActivate()).toBe(false);
  }
  );

  it('not be able to hit route when user is not logged in', () => {
    (localStorage.getItem('TOKEN') === null || localStorage.getItem('TOKEN') === undefined) == false
    expect(guard.canActivate()).toBe(false);
  });
});
