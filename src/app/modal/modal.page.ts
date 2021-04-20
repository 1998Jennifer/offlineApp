import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ProductsService } from '../products.service'
import {UpdateProductFormPage} from '../update-product-form/update-product-form.page'



@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  productosForm: FormGroup;
  descripcion
  precio
  id 

  flat: boolean = false;
  
  productos = []

  constructor( private formBuilder: FormBuilder, private modalController: ModalController, public productsService: ProductsService) { 

    this.productosForm = this.formBuilder.group({
      descripcion: new FormControl("", Validators.compose([Validators.required])), 
      precio: new FormControl("", Validators.compose([Validators.required]))
    })
  }

  async ngOnInit() {
    // this.productos = await this.productsService.getAllProducts()
    this.productsService.getInfo()

  }

  add(data){
    this.id = Math.floor(Math.random() * (100 - 1) + 1)
    this.descripcion = data.descripcion
    this.precio = data.precio
    data = {_id: this.id.toString(), descripcion: this.descripcion, precio: this.precio }
    this.productsService.saveOne(data)
    console.log(data)
    this.productosForm.reset()

  }

  async deleteOne(data, index){
    console.log("delete")
    console.log(data)
    await this.productsService.deleteOne(data)
    // this.productos.splice(index, 1)
  }

  updateOne(data){
    this.presentModal(data)
    console.log("update")
  }

  async presentModal(data){
    
    const modal = await this.modalController.create({
      component: UpdateProductFormPage,
      componentProps: {
        item: data
      }
    })
    return await modal.present()
  }
  
  cerrarModal(){
    this.modalController.dismiss({
      'dismissed': true
    })

  }

  // guardado(campos){
  //   // this.productsService.saveOne(this.one)
  //   console.log(campos)

  // }

  async mostarLista(){
    this.productos = await this.productsService.getAllProducts()
    this.flat = true


  }
  ocultaLista(){
    this.flat = false
    this.productos = []
  }
  
  venderProducto(id: number){
    // console.log("clic")
    // console.log(id)

  }

}
