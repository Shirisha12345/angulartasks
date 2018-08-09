import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  private text = '';
  constructor() { }

  ngOnInit() {
  }
  gettext(text) {
    console.log(text);
  }

}
