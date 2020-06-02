import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleEmitter = new EventEmitter();
  toggled: boolean;
  constructor() { }

  ngOnInit(): void {
  }


  toggleSidebar() {
    this.toggled = !this.toggled;
    this.toggleEmitter.emit(this.toggled);
  }
}
