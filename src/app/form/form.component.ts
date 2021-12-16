import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private service:ProductService) { }

  ngOnInit(): void {
  }
  addP(f:any){
this.service.addProduct(f).subscribe(
  ()=>{alert('gooooodddd')}
);
  }
  showF(f:any){
    console.log(f);
  }
}
