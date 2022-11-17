import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {EmployeeModel} from '../../models/employee.model';
import {ApiResponseModel} from '../../models/api-response.model';
import {EmployeesService} from '../../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeesComponent {
  readonly employeeList$: Observable<EmployeeModel[]> = this._employeesService.getAll().pipe(map((ApiResponse: ApiResponseModel<EmployeeModel[]>) => {
    return ApiResponse.data.map((data) => {
      return {
        employee_age: data.employee_age,
        employee_name: data.employee_name,
        employee_salary: data.employee_salary,
        id: data.id,
        profile_image: data.profile_image
      }
    })
  }));
  private _selectedEmployeeSubject: Subject<string> = new Subject<string>();
  public selectedEmployee$: Observable<string> = this._selectedEmployeeSubject.asObservable();
  readonly details$: Observable<EmployeeModel> = this.selectedEmployee$.pipe(switchMap(data => this._employeesService.getOne(data).pipe(map(response => {
      return {
        employee_age: response.data.employee_age,
        employee_name: response.data.employee_name,
        employee_salary: response.data.employee_salary,
        id: response.data.id,
        profile_image: response.data.profile_image
      }
    }))
  ));

  constructor(private _employeesService: EmployeesService) {
  }

  selectEmployee(id: string): void {
    this._selectedEmployeeSubject.next(id);
    console.log("Selected employee id: " + id);
  }
}
