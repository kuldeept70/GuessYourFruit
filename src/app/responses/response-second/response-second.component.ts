import { Component, OnInit } from '@angular/core';
import { GetFruitListService } from 'src/app/get-fruit-list.service';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-response-second',
  templateUrl: './response-second.component.html',
  styleUrls: ['./response-second.component.css']
})
export class ResponseSecondComponent implements OnInit {
  fruitData;
  keyArray;
  constructor(private getFruit:GetFruitListService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getFruit.getList().pipe(
      tap(data=>console.log('Data is'+data)),
    ).subscribe(data=>{
      console.log(data);
      this.fruitData=data;
      this.keyArray=Object.keys(this.fruitData).filter(key=>+key&4);
      const random=Math.floor(Math.random()*7);
      this.keyArray=[...this.keyArray.slice(random),...this.keyArray.slice(0,random)];
      console.error("List"+this.keyArray);
    });
  }
  yes() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.router.navigate(['/page3', id * 2 + 1]);
  }
  no() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.router.navigate(['/page3', id * 2]);
  }
}
