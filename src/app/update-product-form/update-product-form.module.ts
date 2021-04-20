import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateProductFormPageRoutingModule } from './update-product-form-routing.module';

import { UpdateProductFormPage } from './update-product-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateProductFormPageRoutingModule
  ],
  declarations: [UpdateProductFormPage]
})
export class UpdateProductFormPageModule {}
