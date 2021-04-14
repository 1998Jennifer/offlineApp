import { Component, OnInit, EventEmitter, Output, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  
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

  constructor(private modalController: ModalController, private animationCtrl: AnimationController) {
    // const animation: Animation = this.animationCtrl.create()
    // .addElement(myElement)
    // .duration(1000)
    // .fromTo('opacity', '1', '0.5');
   }

  ngOnInit() {
  }
 

  cerrarModal(){
    this.modalController.dismiss({
      'dismissed': true
    })

  }

  guardado(){
    // const animation = this.animationCtrl
    // .create()
    // .addElement(document.querySelector('.square'))
    // .duration(1000)
    // .iterations(Infinity)
    // .fromTo('transform', 'translatey(0px)', 'translatey(200px)')
    // .fromTo('opacity', '6', '0.2');
    // // this.productos.push(this.description, this.price)
    // animation.play()
    // setTimeout(()=>{
    //   animation.stop()
    // }, 1000)
    
    
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
    const animation = this.animationCtrl
    .create()
    .addElement(document.querySelector(`#item-${id}`))
    .keyframes([
      { offset: 0, transform: 'scale(1))', opacity: '1' },
      { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
      { offset: 1, transform: 'scale(1)', opacity: '1' }
    ])
    .duration(1000)
    .iterations(Infinity)
    // .fromTo('transform', 'translatey(0px)', 'translatey(200px)')
    .fromTo('opacity', '6', '0.2');
    console.log(this.productos)
    animation.play()
    setTimeout(()=>{
      animation.stop()
    }, 1000)
    
    // this.productos.push(this.description, this.price)

  }

}
