import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deetail',
  templateUrl: './deetail.component.html',
  styleUrls: ['./deetail.component.css']
})
export class DeetailComponent implements OnInit {
idtttt!:any;
  constructor(private test:ActivatedRoute) { }

  ngOnInit(): void {
    this.idtttt=this.test.snapshot.params['name'];
    //alert(this.idtttt);
    //je vais envoyer une requette vers la db
  }

}
