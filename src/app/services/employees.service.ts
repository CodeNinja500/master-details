import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponseModel} from '../models/api-response.model';
import {EmployeeModel} from '../models/employee.model';

@Injectable()
export class EmployeesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ApiResponseModel<EmployeeModel[]>> {
    return this._httpClient.get<ApiResponseModel<EmployeeModel[]>>('https://dummy.restapiexample.com/api/v1/employees');
  }

  getOne(id: string): Observable<ApiResponseModel<EmployeeModel>> {
    return this._httpClient.get<ApiResponseModel<EmployeeModel>>('https://dummy.restapiexample.com/api/v1/employee/' + id);
  }
}
