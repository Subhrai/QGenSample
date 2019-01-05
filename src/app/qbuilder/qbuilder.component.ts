import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Qobject } from './qobject';
import { QbuilderService } from './qbuilder.service';

@Component({
  selector: 'app-qbuilder',
  templateUrl: './qbuilder.component.html',
  styleUrls: ['./qbuilder.component.css']
})
export class QbuilderComponent implements OnInit {

  constructor(private QService: QbuilderService) { }
  public objValue = new Qobject('AND', 'Name', 'eq', 'test');
  public objArray: Array<any> = new Array(this.objValue);
  public conditionOptions = ['AND', 'OR'];
  public fieldOptions = ['Name', 'Age', 'DOB'];
  public operationOptions = ['eq', 'gt', 'lt'];

  ngOnInit() {
  }

  AddControl() {
    this.objArray.push(new Qobject('AND', 'Name', 'eq', 'test'));
  }
  show(value: any) {
    console.log(JSON.stringify(value));
    this.QService.postQuery(JSON.stringify(value));
  }

}
