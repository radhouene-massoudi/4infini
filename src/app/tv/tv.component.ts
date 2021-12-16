import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  listProdcuttv !:any;
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(
      (data)=>{
        console.log(data);
        this.listProdcuttv=data;

      }
    );

  }

}
