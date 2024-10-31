import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectotPageComponent } from './pages/selectot-page/selectot-page.component';

const routes: Routes = [
  {
    path: '',
    children: [

      { path: 'selector', component: SelectotPageComponent },
      { path: '**', redirectTo: 'selector' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
