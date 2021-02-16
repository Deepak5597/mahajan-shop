import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ms-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input("sidebarState") isSidebarClosed:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
