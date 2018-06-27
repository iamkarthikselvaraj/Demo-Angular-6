import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './view/shipping/dashboard/dashboard.component';
import {StockEntryComponent} from './view/shipping/stock-entry/stock-entry.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home',
      header: 'Dashboard'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          breadcrumb: 'Dashboard',
          header: 'Dashboard'
        }
      },
      {
        path: 'stock',
        data: {
          breadcrumb: 'Stock Management',
          header: 'Stock Management'
        },
        children: [
          {
            path: '',
            redirectTo: 'stock-entry',
            pathMatch: 'full',
            data: {
              breadcrumb: 'Stock Entry',
              header: 'Stock Entry'
            }
          },
          {
            path: 'stock-entry',
            component: StockEntryComponent,
            data: {
              breadcrumb: 'Stock Entry',
              header: 'Stock Entry'

            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
