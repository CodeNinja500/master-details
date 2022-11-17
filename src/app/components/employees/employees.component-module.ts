import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { EmployeesComponent } from './employees.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule, MatButtonToggleModule],
  declarations: [EmployeesComponent],
  providers: [],
  exports: [EmployeesComponent]
})
export class EmployeesComponentModule {
}
