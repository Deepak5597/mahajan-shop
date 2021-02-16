import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isSidebarClosed:boolean=false;
  @Output() sidebarState: EventEmitter<boolean> = new EventEmitter();

  constructor() { }


  ngOnInit(): void {
  }

  changeSidebarState(){
    this.isSidebarClosed = !this.isSidebarClosed;
    this.sidebarState.emit(this.isSidebarClosed);
  }

}
