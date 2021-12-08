import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent implements OnInit {
  listProdcutpc=[
    {id: 1, title: "pc1 ", price: 18, quantity: 0, like: 0},
    {id: 2, title: "pc1 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "pc1 3", price: 16, quantity: 8, like: 0},
  ];
  constructor() { }

  ngOnInit(): void {
  }
  rcvdata(t:any){
    //console.log(t);
    this.listProdcutpc[t].like++;
  }
}
