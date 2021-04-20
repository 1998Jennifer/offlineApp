import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductsService } from '../products.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-update-product-form',
  templateUrl: './update-product-form.page.html',
  styleUrls: ['./update-product-form.page.scss'],
})
export class UpdateProductFormPage implements OnInit {
  updateForm: FormGroup;
  
  @Input() item: any;

  

  constructor(private modalController: ModalController, public productsService: ProductsService, private formBuilder: FormBuilder, ) { }

  ngOnInit() {
    // console.log(this.item)
  }
  cerrarModal(){
    this.modalController.dismiss({
      'dismissed': true
    })

  }

  async modificar(){
    try {
      await this.productsService.updateOne(this.item)
      this.cerrarModal()
    }catch(err){
      console.log(err)
    }
    
  }
}
