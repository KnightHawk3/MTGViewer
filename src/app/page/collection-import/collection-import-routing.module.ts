import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CollectionImportComponent} from './collection-import.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionImportComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionImportRoutingModule {
}
