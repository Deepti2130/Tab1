import { Component, OnInit } from '@angular/core';
import { Itab2 } from '../../model/tab2';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.scss']
})
export class Tab2Component implements OnInit {
  selectedframework: string = "Node"
  tabArr: Array<Itab2> = [
    {
      tabtitle: 'Angular18',
      framework: "angular",
      tabcontent: `<p class="alert alert-info">Angular 18 offers improved integration with TypeScript, providing better type-checking and autocompletion. This enhances code quality and reduces the likelihood of runtime errors. The framework also supports the latest TypeScript features, making it easier for developers to write modern, maintainable code.</p>`
    },
    {
      tabtitle: 'Node js',
      framework: "node",
      tabcontent: '<p class="alert alert-info"> Node js as an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.</p>'
    },
    {
      tabtitle: 'MongoDB',
      framework: "mongodb",
      tabcontent: '<p class="alert alert-info">MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas. As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents </p>'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  ontabclick(val: string) {

    this.selectedframework = val
  }

}
