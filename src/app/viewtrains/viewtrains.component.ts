import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewtrains',
  templateUrl: './viewtrains.component.html',
  styleUrls: ['./viewtrains.component.css']
})
export class ViewtrainsComponent implements OnInit {

  constructor() { }

  trainsData:any={}

  ngOnInit(): void {
  }

}
