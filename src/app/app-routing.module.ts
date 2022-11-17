import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductsComponent} from './components/products/products.component';
import {EmployeesComponent} from './components/employees/employees.component';
import {CryptoComponent} from './components/crypto/crypto.component';
import {ProductsComponentModule} from './components/products/products.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {EmployeesComponentModule} from './components/employees/employees.component-module';
import {EmployeesServiceModule} from './services/employees.service-module';
import {CryptoComponentModule} from './components/crypto/crypto.component-module';
import {CryptoServiceModule} from './services/crypto.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'products-master-details',
    component: ProductsComponent
  }, {path: 'employees-master-details', component: EmployeesComponent}, {
    path: 'crypto-master-details',
    component: CryptoComponent
  }]), ProductsComponentModule, ProductsServiceModule, EmployeesComponentModule, EmployeesServiceModule, CryptoComponentModule, CryptoServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
