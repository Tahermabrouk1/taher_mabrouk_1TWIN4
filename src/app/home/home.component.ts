import { Component , OnInit} from '@angular/core';
import { category } from '../model/category';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
listCategory :Array <category>;

 constructor() {}

  ngOnInit(): void {
    this.listCategory=[
      {id:1,name:"Electronics",availabe:true,picture:"hello" , nbrLike:5},
    ]
  }
}
