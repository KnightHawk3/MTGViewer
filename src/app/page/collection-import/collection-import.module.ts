import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CollectionImportComponent} from './collection-import.component';
import {CollectionImportRoutingModule} from './collection-import-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from '../../core/core.module';

@NgModule({
  declarations: [CollectionImportComponent],
  imports: [
    CommonModule,
    CoreModule,
    CollectionImportRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CollectionImportModule {
}
