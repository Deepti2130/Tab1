import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.scss']
})
export class Tab3Component implements OnInit {
  selectedFramework:string = 'angular'
  constructor() { }

  ngOnInit(): void {
  }

}
