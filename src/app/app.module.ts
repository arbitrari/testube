import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './pages/dash/dash.component';
import { AboutComponent } from './pages/about/about.component';
import { ToolbarComponent } from './elements/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './elements/footer/footer.component';
import { LogoComponent } from './elements/logo/logo.component';
import { CardComponent } from './elements/card/card.component';
import { DonateComponent } from './pages/donate/donate.component';
import { DebugComponent } from './pages/debug/debug.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import {MatLegacySnackBarModule as MatSnackBarModule} from '@angular/material/legacy-snack-bar';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacySliderModule as MatSliderModule} from '@angular/material/legacy-slider';
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import * as Sentry from "@sentry/angular";
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    AboutComponent,
    ToolbarComponent,
    FooterComponent,
    LogoComponent,
    CardComponent,
    DonateComponent,
    DebugComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    FormsModule,
    MatTooltipModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: false,
        logErrors: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
