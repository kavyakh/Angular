import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<h5>@Copyright</h5>
             <h6>All rights reserved</h6>`,
 styles: ['h5{font-weight:normal;}','h6{color:red;}']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
