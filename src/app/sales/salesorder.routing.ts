import { RouterModule, Routes } from '@angular/router';

import { SalesorderComponent } from './salesorder/salesorder.component';
const routes: Routes = [
  {
    path: 'sales',
  component: SalesorderComponent

   },
];


export const SalesorderRoutes = RouterModule.forChild(routes);
