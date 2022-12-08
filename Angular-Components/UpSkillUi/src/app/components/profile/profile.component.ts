import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { UpskillService } from 'src/app/services/upskill.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

x:Category[]=[
  new Category(1,"sdsd","img1"),
  new Category(2,"sdsd","img1"),
  new Category(3,"sdsd","img1")
  
];

  categoriesLst?:Category[];
  constructor(private upskillService:UpskillService) { }

  ngOnInit(): void {

    console.log(this.x);

    this.upskillService.getAllCategories()
    .subscribe(data=>{
        this.categoriesLst=data;
        console.log(data);
        console.log(this.categoriesLst);
    })  
  }

  // mappingToCategory(data:any[]):Category[]{
  //   const output = data.reduce(
  //     (acc:Category[], entry) => acc.concat(new Category(entry.categoryId,entry.categoryName,entry.imageUrl)),
  //     []
  //   );
  //   return output;
  // }

}
