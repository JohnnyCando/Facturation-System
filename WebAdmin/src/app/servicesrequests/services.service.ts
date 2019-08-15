import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {AutenticateService} from "./autenticate.service";


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient, private authService: AutenticateService) {
  }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + this.authService.getToken()
  });

  getServices() {
    const url_api = 'http://localhost:3001/server/services/get_TypeProducts'
    return this.http.get(url_api, {headers: this.headers}).pipe(map(data => data))
  }

  registerServices(name: string, description: string) {
    const url_api = "http://localhost:3001/server/services/registerTypeProducts"
    return this.http.post(url_api, {
      params: {
        name: name,
        description: description,
      }
    }, {
      headers: this.headers
    }).pipe(map(data => data))

  }

  registerSubServices(name: string, price_sell: number, price_buy: number, type_products_id: number) {
    const url_api = 'http://localhost:3001/server/services/registerProducts';
    return this.http.post(url_api, {
      params: {
        name: name,
        price_sell: price_sell,
        price_buy: price_buy,
        type_products_id: type_products_id
      }
    }, {
      headers: this.headers
    }).pipe(map(data => data))
  }
  registerProductInWineries(products_id:number,quantityOfProducts:number){
    const url_api = 'http://localhost:3001/server/services/registerQProducts';
    return this.http.post(url_api,{
      params:{
        products_id:products_id,
        quantityOfProducts:quantityOfProducts
      }
    },{headers:this.headers}).pipe(map(data=>data))
  }
  getAllProductsInWineries(){
    const url_api = 'http://localhost:3001/server/services/getProductsInWineries';
    return this.http.get(url_api,{headers:this.headers}).pipe(map(data => data))
  }
  UpdateQuantity(id:number,quantityOfProducts:number){
    const url_api = 'http://localhost:3001/server/services/updateQProducts';
    return this.http.post(url_api,{
      params:{
        id:id,
        quantityOfProducts:quantityOfProducts
      }
    },{headers:this.headers}).pipe(map(data => data))
  }
  getSubServicesById(id: number) {
    const url_api = 'http://localhost:3001/server/services/get_productsbyID';
    return this.http.post(url_api, {
      id
    }, {headers: this.headers}).pipe(map(data => data))
  }
registerSaleNote(user_id:number,typeOfSell_id:number){
  const url_api = 'http://localhost:3001/server/processes/registerSaleNote';
  return this.http.post(url_api, {params:{
      user_id:user_id,
      typeOfSell_id:typeOfSell_id

    }

  }, {headers: this.headers}).pipe(map(data => data))
}
registerDetailSaleNote(sales_notes_id:number,products_id:number,quantityXProducts:number){
  const url_api = 'http://localhost:3001/server/processes/registerDetailSaleNote';
  return this.http.post(url_api, {params: {
      sales_notes_id: sales_notes_id,
      products_id: products_id,
      quantityXProducts: quantityXProducts,
      totalPay: (2.5 * quantityXProducts)

    }}, {headers: this.headers}).pipe(map(data => data))
}
  getAllSubServices() {
    const url_api = 'http://localhost:3001/server/services/get_all_products';
    return this.http.get(url_api,  {headers: this.headers}).pipe(map(data => data))
  }

}
