import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-products',
  styleUrls: ['./products.component.scss'],
  templateUrl: './products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  readonly listOfProducts$: Observable<ProductModel[]> = this._productsService.getAll();
  private _selectSubject: Subject<string> = new Subject<string>();
  public select$: Observable<string> = this._selectSubject.asObservable();
  readonly productDetails$: Observable<ProductModel> = this.select$.pipe(switchMap(data => this._productsService.getOne(data)));

  constructor(private _productsService: ProductsService) {
  }

  selectProduct(id: string): void {
    this._selectSubject.next(id);
    console.log("selected product: " + id)
  }
}
