import { NgModule } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

const AngMaterialsCompModule = [
  MatButtonModule,
  MatCheckboxModule
]

@NgModule({
  declarations: [],
  imports: [
    AngMaterialsCompModule
  ],
  exports: [ AngMaterialsCompModule ]

})

export class AngMaterialsModule { }
