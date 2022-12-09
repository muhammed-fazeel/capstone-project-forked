import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { UpskillService } from 'src/app/services/upskill.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {

  categoriesLst:Category[]=[]

  constructor(private upskillService:UpskillService) { }

  ngOnInit(): void {
        this.upskillService.getAllCategories()
    .subscribe(data=>{
        this.categoriesLst=data;
        console.log(data);
        console.log(this.categoriesLst);
    })  
  }

}
