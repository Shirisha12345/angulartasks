import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  childvalue:string;
 
  constructor() { }

  ngOnInit() {
  }
  getOutputVal($event){
    this.childvalue=$event;
    
    
  }

}
