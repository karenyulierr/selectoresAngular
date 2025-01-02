import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectotPageComponente } from './pages/selectot-page/selectot-page.component';


const routes: Routes = [
  {
    path: '',
    children: [

      { path: 'selector', component: SelectotPageComponente },
      { path: '**', redirectTo: 'selector' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
