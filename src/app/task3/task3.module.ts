import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [ParentComponent, ChildComponent],
  exports : [ParentComponent, ChildComponent]
})
export class Task3Module { }
