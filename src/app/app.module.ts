import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
