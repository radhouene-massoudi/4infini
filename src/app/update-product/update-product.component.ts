import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
title!:any;
price!:any;
quantity!:any;
like!:any;
  constructor(private service :ProductService, private acroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getProductById(this.acroute.snapshot.params.id).subscribe(
      (d)=>{
        this.title=d.title;
        this.price=d.price;
        this.quantity=d.quantity;
        this.like=d.like;
      }
    );
  }
modifer(f:any){
this.service.updateProduct(f,this.acroute.snapshot.params.id).subscribe(
  ()=>{alert('updated')}
);
}
}
