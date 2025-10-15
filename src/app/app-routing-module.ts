import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Wines} from './wine/wines/wines';
import {AddWine} from './wine/add-wine/add-wine';
import {Home} from './layout/home/home';

const routes: Routes = [
  {component: Wines, path: 'wines'},
  {component: AddWine, path: 'add'},
  {component: Home, path: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
