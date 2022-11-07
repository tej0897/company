import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8081/api/stocks';

  stockList: Stock[] | any;

  public addStock(cid: number, stock: Stock) {
    return this.http.post(this.API + '/add/' + cid , stock);
  }

  getAllStocks(cid: number):Observable<Array<Stock>>{
    return this.http.get<Array<Stock>>(this.API + '/getAllStocks' + cid);
  }
}
