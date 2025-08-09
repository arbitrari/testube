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
import { DebugComponent } from './pages/debug/debug.component';
import { SettingsDialogComponent } from './dialogs/settings-dialog/settings-dialog.component';

import { SourceManagerService } from './services/source-manager/source-manager.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';


import { TraceService, createErrorHandler } from "@sentry/angular";
import { Router } from '@angular/router';

@NgModule({
    declarations: [AppComponent],
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
        FormsModule,
        MatTooltipModule,
        MatIconModule,
        MatDialogModule,
        MatListModule,
        MatCheckboxModule,
        MatSelectModule,
        DashComponent,
        AboutComponent,
        ToolbarComponent,
        FooterComponent,
        LogoComponent,
        CardComponent,
        DebugComponent,
        SettingsDialogComponent
    ],
    providers: [
        SourceManagerService,
        {
            provide: ErrorHandler,
            useValue: createErrorHandler({
                showDialog: false,
                logErrors: true,
            }),
        },
        {
            provide: TraceService,
            deps: [Router],
        },
        {
            provide: APP_INITIALIZER,
            useFactory: () => () => { },
            deps: [TraceService],
            multi: true,
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
