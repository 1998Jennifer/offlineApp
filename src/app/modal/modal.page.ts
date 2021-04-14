import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductsService } from '../products.service'



@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
 
  public webada: [] = []
  flat: boolean = false;
  
  productos = []

  constructor(private modalController: ModalController, public productsService: ProductsService) { }

  async ngOnInit() {
    // this.productos = await this.productsService.getAllProducts()

  }
 

  cerrarModal(){
    this.modalController.dismiss({
      'dismissed': true
    })

  }

  guardado(){
    // this.productos.push(this.description, this.price)
    console.log(this.productos)

  }
  async mostarLista(){
    this.productos = await this.productsService.getAllProducts()
    this.flat = true


  }
  ocultaLista(){
    this.flat = false
    this.productos = []
  }
  
  venderProducto(id: number){
    console.log("Le dieron we")
    console.log(id)

  }

}
