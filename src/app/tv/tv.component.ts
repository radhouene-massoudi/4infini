import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  listProdcuttv=[
    {id: 1, title: "tv 1 ", price: 18, quantity: 0, like: 0},
    {id: 2, title: "tv  2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "tv 3", price: 16, quantity: 8, like: 0},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
