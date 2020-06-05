import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _router : Router,
              private _route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  public showSamsung(){
    this._router.navigate(['samsung'],{relativeTo: this._route});
  }

  public showApple(){
    this._router.navigate(['apple'],{relativeTo: this._route});
  }

  public showGoole(){
    this._router.navigate(['google'],{relativeTo: this._route});
  }
}
