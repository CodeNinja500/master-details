import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { CryptoComponent } from './crypto.component';

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule],
  declarations: [CryptoComponent],
  providers: [],
  exports: [CryptoComponent]
})
export class CryptoComponentModule {
}
