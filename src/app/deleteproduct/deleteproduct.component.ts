import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  constructor(private service:ProductService,private active:ActivatedRoute,
    private route:Router) { }

  ngOnInit(): void {
    this.service.deleteProduct(this.active.snapshot.params['id']).subscribe(
()=>{
  //alert('deleted')
  this.route.navigateByUrl('tv');
}
    );
  }

}
