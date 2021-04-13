import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';
// import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  data: any;
  db: any;
  remote: any

  constructor() {
    

    this.db = new PouchDB('productos')
    this.remote = 'http://127.0.0.1:5984/productos'

    let options = {
      live: true,
      retry: true,
      continuous: true,
      auto_compaction:true
    }
    this.db.sync(this.remote, options)

    
  }

  getAll(){

  }

  //  getInfo(){
  //    this.db.info().then(function (info){
  //      console.log(info)
  //    })
  //  }

   

  

  //  saveActivity(data){
  //   data.activityDateTime = moment().format()
  //   data.activity ='Dashboard';
  //   data._id = (moment().unix()).toString();
  //   this.db.put(data).then((resp)=> {
  //     console.log(resp)
  //     return resp
  //   })
  //     .catch((e)=>{
  //       console.log(e)
  //       return e
  //     })
  // }
 
}
