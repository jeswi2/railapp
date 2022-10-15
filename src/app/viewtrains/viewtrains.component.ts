import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewtrains',
  templateUrl: './viewtrains.component.html',
  styleUrls: ['./viewtrains.component.css']
})
export class ViewtrainsComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }


  fetchData=()=>{
    this.myapi.viewTrains().subscribe(
      (data)=>{
        this.trainsData=data
      }
    )
  }

  trainsData:any={}

  ngOnInit(): void {
  }

}
