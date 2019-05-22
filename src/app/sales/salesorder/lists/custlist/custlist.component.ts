import { Column, GridComponent, GridModule, GridService } from 'grid';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

import { Customer } from '../../../../models/customer';

@Component({
  selector: 'app-custlist',
  templateUrl: './custlist.component.html',
  styleUrls: ['./custlist.component.css']
})
export class CustlistComponent implements OnInit {
  listForm: FormGroup;

  private formBuilder: FormBuilder;
  dataSource: any[];
  columns: Column[];
  constructor(formBuilder: FormBuilder, private gridservice: GridService,
    public dialogRef: MatDialogRef<CustlistComponent>,
    @Inject(MAT_DIALOG_DATA) data: any[]) {
    this.dataSource = data;
    
    
  }
  save() {
    const data = this.gridservice.getActivedata(); 
    this.dialogRef.close(data['customerId']);
  }

  close() {
    this.dialogRef.close();
  }
  ngOnInit() {
    let col: Column = new Column();
    this.columns = new Array();

    col.code = 'customerId';
    col.color = 'color';
    col.display = 'CustomerId';
    col.type = 'text';
    col.editable = false;
    col.minuscolor = '';
    col.searchable = true;
    col.sortable = true;
    this.columns.push(col);

    col = new Column();
    col.code = 'name';
    col.color = '';
    col.display = 'Name';
    col.type = 'text';
    col.editable = false;
    col.minuscolor = '';
    col.searchable = true;
    col.sortable = true;
    this.columns.push(col);

    col = new Column();
    col.code = 'OtherName';
    col.color = '';
    col.display = 'Other Name';
    col.type = 'text';
    col.editable = false;
    col.minuscolor = '';
    col.searchable = true;
    col.sortable = true;
    this.columns.push(col);

    col = new Column();
    col.code = 'CardType';
    col.color = '';
    col.display = 'Type';
    col.type = 'text';
    col.editable = false;
    col.minuscolor = '';
    col.searchable = true;
    col.sortable = true;
    this.columns.push(col);

    this.gridservice.OnLoadData(this.dataSource
      , this.columns,false,false);

  }


}
