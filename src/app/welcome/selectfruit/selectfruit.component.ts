import { Component, OnInit } from '@angular/core';
import { GetFruitListService } from 'src/app/get-fruit-list.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-selectfruit',
  templateUrl: './selectfruit.component.html',
  styleUrls: ['./selectfruit.component.css']
})
export class SelectfruitComponent implements OnInit {
  fruitData;
  keyArray;
  constructor(private getFruit:GetFruitListService) { }

  ngOnInit(): void {
    this.getFruit.getList().pipe(
      tap(data=>console.log('Data is'+data)),
    ).subscribe(data=>{
      console.log(data);
      this.fruitData=data;
      this.keyArray=Object.keys(this.fruitData);
      console.error("List hi"+Object.keys(this.fruitData).filter(key=>+key&8));
    });
  }

}
