import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {


  constructor(private menuController: MenuController, private modalController: ModalController) { }

  ngOnInit() {
  }
  toggleMenu(){
    this.menuController.toggle()
  }
  
  async presentModal(){
    const modal = await this.modalController.create({
      component: ModalPage
    })
    return await modal.present()
  }
}
