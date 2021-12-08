import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-showoneproduct',
  templateUrl: './showoneproduct.component.html',
  styleUrls: ['./showoneproduct.component.css']
})
export class ShowoneproductComponent implements OnInit {
@Input()oneproduct!:any;
@Output() notif=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
sendNotifToparent(j:any){
  this.notif.emit(j);
}
}
