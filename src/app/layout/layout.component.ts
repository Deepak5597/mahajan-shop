import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  isSidebarClosed:boolean = false;
  sidebarStateChanged(isSidebarClosed:boolean){
    this.isSidebarClosed = isSidebarClosed;
  }

}
