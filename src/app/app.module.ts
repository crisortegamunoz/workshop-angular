import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DialogModule } from '@angular/cdk/dialog';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from "./component/card/card.component";
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CardComponent,
        PageNotFoundComponent,
    ],
    bootstrap: [
        AppComponent
    ], 
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        DialogModule,
        HttpClientModule
    ], 
    providers: [
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
