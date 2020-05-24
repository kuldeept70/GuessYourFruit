import { Component, OnInit } from '@angular/core';
import { GetFruitListService } from 'src/app/get-fruit-list.service';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  finalFruit;
  constructor( private getFruit:GetFruitListService,
    private activatedRout:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.activatedRout.snapshot.paramMap.get('id');
    this.getFruit.getList().pipe(
      tap(data=>console.log('Data is'+data)),
    ).subscribe(data=>{
      console.log(data);
      this.finalFruit=data[id];
    });
  }
}
