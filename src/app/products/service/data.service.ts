import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  search = new BehaviorSubject("")

  dbServer = "https://my-json-server.typicode.com/SreelakshmiR123/json-server"

  constructor(private http: HttpClient) { }

  //api to access all products from products collection-get

  getAllProducts() {
    return this.http.get(this.dbServer + '/products')
  }

  //get single product data
  getProduct(id: any) {
    return this.http.get(this.dbServer + '/products/' + id)
  }

  //delete
  removeProduct(id: any) {
    return this.http.delete(this.dbServer + '/products/' + id)

  }

  //add product
  addProduct(bodyData: any) {
    return this.http.post(this.dbServer + '/products', bodyData)
  }

  //edit api
  updateProduct(id: any, bodyData: any) {
    return this.http.put(this.dbServer + '/products/' + id, bodyData)
  }

}

