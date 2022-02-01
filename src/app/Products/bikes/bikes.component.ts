import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/shared/app.productService';

@Component({
  selector: 'pm-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit, OnDestroy {

  constructor(private productService : ProductService) { }
  bikes: Bike [] = [];
  cardImageHeight = 200;
  cardImageWidth = 50;
  sub!: Subscription
  ngOnInit(): void {
     this.sub = this.productService.GetBikes().subscribe(
      {
        next : bikes => {this.bikes = bikes}
      }
    );

  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }
}

export interface Bike 
{
  name : string,
  price : number,
  imageUrl : string,
  availableColors : string []
  cardColor : string

}
