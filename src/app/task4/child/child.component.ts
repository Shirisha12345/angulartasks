import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  childvalue:string="im a child"
@Output() outputtoparent=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  NotificationToParent(){
    this.outputtoparent.emit(this.childvalue);
  }

}
