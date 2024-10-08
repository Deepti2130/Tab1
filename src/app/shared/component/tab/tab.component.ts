import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
selectedFramework : string = 'React';

  constructor() { }

  ngOnInit(): void {
    // console.log(this.selectedFramework);
  }

  onTabclick = (val:string) =>{
   this.selectedFramework = val;
  }

}
