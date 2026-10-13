import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [
        RouterTestingModule
    ],
    declarations: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
}).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testube'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('testube');
  });

  it('should render the app shell', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-toolbar')).toBeTruthy();
    expect(compiled.querySelector('main.content router-outlet')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });
});
