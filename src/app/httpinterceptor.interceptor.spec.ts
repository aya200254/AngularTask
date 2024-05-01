import { TestBed } from '@angular/core/testing';

import { HTTPinterceptorInterceptor } from './httpinterceptor.interceptor';

describe('HTTPinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HTTPinterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HTTPinterceptorInterceptor = TestBed.inject(HTTPinterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
