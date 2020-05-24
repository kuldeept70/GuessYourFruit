import { Component, OnInit } from '@angular/core';
import { GetFruitListService } from 'src/app/get-fruit-list.service';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-response-fourth',
  templateUrl: './response-fourth.component.html',
  styleUrls: ['./response-fourth.component.css']
})
export class ResponseFourthComponent implements OnInit {
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
      this.keyArray=Object.keys(this.fruitData).filter(key=>+key&1);
      const random=Math.floor(Math.random()*7);
      this.keyArray=[...this.keyArray.slice(random),...this.keyArray.slice(0,random)];
      console.error("List"+this.keyArray);
    });
  }
  yes() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.router.navigate(['/result', id * 2 + 1]);
  }
  no() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.router.navigate(['/result', id * 2]);
  }
}
