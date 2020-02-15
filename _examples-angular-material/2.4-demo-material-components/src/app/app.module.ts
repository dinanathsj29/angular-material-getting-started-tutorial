import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations'

/* import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button' */
import { AngMaterialsModule } from './ang-materials/ang-materials.module';
import { TypographyComponent } from './typography/typography.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    /* MatCheckboxModule, MatButtonModule */
    AngMaterialsModule

  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }