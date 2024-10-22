
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { browserTracingIntegration, init } from '@sentry/angular';
import { VERSION } from './environments/version';

init({
  dsn: "https://aa6ecbe83cae4b7789f5b9477dbad980@o476457.ingest.sentry.io/5516119",
  integrations: [
    browserTracingIntegration(),
  ],
  tracePropagationTargets: ["localhost", "https://testube.app"],
  environment: environment.production ? 'prod' : 'dev',
  release: 'testube@' + VERSION.hash,

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
