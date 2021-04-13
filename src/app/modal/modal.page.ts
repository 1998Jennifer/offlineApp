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
  productos = [

    {
      id: 1,
      descripcion: 'jabon',
      precio: 5
    },
    {
      id: 2,
      descripcion: 'Shampoo',
      precio: 10
    },
    {
      id: 3,
      descripcion: 'Pasta',
      precio: 3
    },
    {
      id: 4,
      descripcion: 'Toalla',
      precio: 15
    },
    {
      id: 5,
      descripcion: 'cepillo',
      precio: 2
    },
    {
      id: 6,
      descripcion: 'cloro',
      precio: 3
    },
    {
      id: 7,
      descripcion: 'detergente',
      precio: 2
    }
  ]

  constructor(private modalController: ModalController, public productsService: ProductsService) { }

  ngOnInit() {
    // this.productsService.createPouchDb()
    // this.productsService.db.info().then(function(info){
    //   console.log(info)
    // })
    
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
  mostarLista(){
    this.flat = true

  }
  ocultaLista(){
    this.flat = false
  }
  
  venderProducto(id: number){
    console.log("Le dieron we")
    console.log(id)

  }

}
