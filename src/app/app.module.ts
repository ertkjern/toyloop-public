import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { IntroComponent } from './home/intro/intro.component';
import { AboutComponent } from './home/about/about.component';
import { WhyComponent } from './home/why/why.component';
import { FaqComponent } from './home/faq/faq.component';
import { FooterComponent } from './home/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ValidatorService} from './services/validation.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    WhyComponent,
    FaqComponent,
    FooterComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    ValidatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
