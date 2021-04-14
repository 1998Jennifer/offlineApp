import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  data: any;
  db: any;
  remote: any

  constructor() {
    
    
    this.db = new PouchDB('productos')
    this.remote = new PouchDB('http://admin:1234@localhost:5984/productos')

    let options = {
      live: true,
      retry: true,
      continuous: true,
      auto_compaction:true
    }
    
    this.db.sync(this.remote, options).on('error', function(error){
      console.error(error)

    }) 
  }

    getInfo(){
     this.db.info().then(function (info){
       console.log(info)
     })
    }

    save(productos: unknown[]){
      this.db.bulkDocs(productos)
      console.log('ok')
    }

    async getAllProducts(): Promise<[]>{
      const products = await this.db.allDocs({include_docs: true})
      // console.log(products)
      return products.rows
    }


 
}
