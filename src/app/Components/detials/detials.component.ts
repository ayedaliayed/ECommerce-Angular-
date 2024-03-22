import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticProductsService } from '../../Service/static-products.service';
import { Iproduct } from '../../Models/iproduct';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detials',
  standalone: true,
  imports: [],
  templateUrl: './detials.component.html',
  styleUrl: './detials.component.css'
})
export class DetialsComponent implements OnInit{
  constructor(private _ActivatedRoute:ActivatedRoute,private _StaticProductsService:StaticProductsService, private location:Location ){}

  product:Iproduct|null=null;
  id:number=0;
  ngOnInit(): void {
    this.id=Number(this._ActivatedRoute.snapshot.paramMap.get('id'));
    this.product=this._StaticProductsService.getproducByID(this.id);
    
  }

  Back()
  {
    this.location.back();
  }


}
