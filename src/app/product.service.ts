import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
url="http://localhost:3000/product/"
  constructor( private http: HttpClient) { }


  getProducts(){
return this.http.get(this.url)
  }
  addProduct(data:any){
return this.http.post(this.url,data);
  }
  getProductById(id:any){
    return this.http.get<any>(this.url+id);
      }
      updateProduct(data:any,id:any){
        return this.http.put(this.url+id,data);
          }

          deleteProduct(id:any){
            return this.http.delete(this.url+id);
          }
}
