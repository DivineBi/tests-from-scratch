import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { test, expect } from '@playwright/test';

// Tests Angular (Unit Tests) 
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'ng-app' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, ng-app');
  });
});

//Tests E2E Playwright 
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test.describe('AppComponent E2E', () => {
  test('should render correctly', async ({ page }) => {
    await expect(page.locator('#app')).toBeVisible();
  });
});

