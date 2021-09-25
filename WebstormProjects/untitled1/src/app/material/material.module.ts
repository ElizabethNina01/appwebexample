import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import { MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatToolbarModule,MatIconModule,MatButtonModule,MatTableModule,


  ]
})
export class MaterialModule implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
