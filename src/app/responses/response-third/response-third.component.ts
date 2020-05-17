import { Component, OnInit } from '@angular/core';
import { GetFruitListService } from 'src/app/get-fruit-list.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-response-third',
  templateUrl: './response-third.component.html',
  styleUrls: ['./response-third.component.css']
})
export class ResponseThirdComponent implements OnInit {
  fruitData;
  keyArray;
  constructor(private getFruit:GetFruitListService) { }

  ngOnInit(): void {
    this.getFruit.getList().pipe(
      tap(data=>console.log('Data is'+data)),
    ).subscribe(data=>{
      console.log(data);
      this.fruitData=data;
      this.keyArray=Object.keys(this.fruitData).filter(key=>+key&2);
      console.error("List"+this.keyArray);
    });
  }
}
