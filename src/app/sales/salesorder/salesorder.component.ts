import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Column, GridComponent, GridModule, GridService } from 'grid';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';

import { AuthService } from "../../auth/auth.service";
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { ComponentCanDeactivate } from "../../guards/pending-changes.guard";
import { CustlistComponent } from './lists/custlist/custlist.component';
import { Customer } from '../../models/customer';
import { SalesService } from './sales.service';
import { Salesitem } from '../../models/salesitem';
import { Salesorder } from '../../models/salesorder';
import { Subscription } from "rxjs";

export interface DialogData {
  
}
@Component({
  selector: 'app-salesorder',
  templateUrl: './salesorder.component.html',
  styleUrls: ['./salesorder.component.css']
})
export class SalesorderComponent implements OnInit,ComponentCanDeactivate, OnDestroy {

  custid: string;
  salesForm: FormGroup;
  columns: Column[];
  customers: Customer[];
  customer: Customer;
  data: Salesorder;
  private authListenerSubs: Subscription;
  userIsAuthenticated = false;
  constructor (private formBuilder: FormBuilder, private authService: AuthService, private salesSrv: SalesService,
    public dialog: MatDialog,
      private gridservice:GridService) { }
  canDeactivate(): boolean {
        return !this.userIsAuthenticated;
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
  ngAfterViewInit() {
        
    }
  ngOnInit() {
    this.authService.autoAuthUser();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
    this.data = new Salesorder();
    this.data.lines = new Array();
    this.data.CustomerId = "";
    this.data.ContctId = "";
    this.data.CustomerName = "";
    this.data.Ordno = "1";
    this.data.Refno = "";
    this.data.currid = "USD";
    const date = new Date();
    this.data.postdate = date;
    this.data.dlvdate = date;
    this.data.docdate = date;
    //let latest_date =this.datepipe.transform(date, 'yyyy-MM-dd');
    let lineitem : Salesitem = new Salesitem() ;
    lineitem.ProductId = "";
    lineitem.ProductName = "";
    lineitem.Qty  =0;
    lineitem.Price = 0;
    lineitem.total = 0;
    lineitem.LineDisc = 0;
    lineitem.TaxCode = "";
    
    this.data.lines.push(lineitem);
    lineitem = new Salesitem() ;
    lineitem.ProductId = "bbbbbbb";
    lineitem.ProductName = "xxxx";
    lineitem.Qty  =0;
    lineitem.Price = 0;
    lineitem.total = 0;
    lineitem.LineDisc = 0;
    lineitem.TaxCode = "xxxxxxx";
    this.data.lines.push(lineitem);

    this.salesForm = this.formBuilder.group({
      custid: ['', Validators.required],
      custname: ['', Validators.required],
      contact: ['', Validators.nullValidator], 
      refno: ['',  Validators.nullValidator],
      ordno: ['',  Validators.required], 
      statu: ['',  Validators.nullValidator],
      Pstdate: ['',  Validators.nullValidator],
      Dvdate: ['',  Validators.nullValidator],
      Dcdate: ['',  Validators.nullValidator],
      currid: ['', Validators.required],
      
    },
      { updateOn: 'submit' });
    console.log(this.data.postdate);
    this.salesForm.controls.Pstdate.setValue(this.data.postdate);
    this.salesForm.controls.Dvdate.setValue(this.data.dlvdate);
    this.salesForm.controls.Dcdate.setValue(this.data.docdate);
    this.salesForm.controls.ordno.setValue(this.data.Ordno);
    let col: Column = new Column();
    this.columns = new Array();
    
    col.code = 'ProductId';
    col.color = 'color';
    col.display = 'Item Id';
    col.type = 'text';
    col.editable = true;
    col.minuscolor = '';
    col.searchable = true;
    col.sortable = true;
    this.columns.push(col);
    col = new Column();
    col.code = 'ProductName';
    col.color = 'color';
    col.display = 'Item Name';
    col.type = 'text';
    col.editable = false;
    col.minuscolor = '';
    col.searchable = true;
    col.sortable = true;
    this.columns.push(col);

    col = new Column();
    col.code = 'Qty';
    col.color = '';
    col.display = 'Quantity';
    col.type = 'numeric';
    col.editable = true;
    col.minuscolor = '';
    col.searchable = true;
    col.sortable = true;
    this.columns.push(col);

    col = new Column();
    col.code = 'Price';
    col.color = '';
    col.display = 'Unit Price';
    col.type = 'numeric';
    col.editable = true;
    col.minuscolor = '';
    col.searchable = true;
    col.sortable = true;
    this.columns.push(col);

    col = new Column();
    col.code = 'LineDisc';
    col.color = '';
    col.display = 'Discount %';
    col.type = 'numeric';
    col.editable = true;
    col.minuscolor = '';
    col.searchable = true;
    col.sortable = true;
    this.columns.push(col);
 
    col = new Column();
    col.code = 'TaxCode';
    col.color = 'green';
    col.display = 'TaxCode';
    col.type = 'text';
    col.editable = true;
    col.minuscolor = '';
    col.searchable = true;
    col.sortable = true;
    this.columns.push(col);
 
    col = new Column();
    col.code = 'total';
    col.color = 'color';
    col.display = 'Total';
    col.type = 'numeric';
    col.editable = true;
    col.minuscolor = 'red';
    col.searchable = true;
    col.sortable = true;
    this.columns.push(col);

   // Object.assign({},this.salesForm.value);
    this.gridservice.OnLoadData(this.data.lines
     ,this.columns,true,true);
     this.onLoadCustomer();
     
  }
  
  get f() { return this.salesForm.controls; }
  onLoadCustomer() {
       this.salesSrv.getCustomers().subscribe(
        (res : Customer[])=>{
       
        this.customers = res;
        }
       
      );
  }
  onChangeCustomer(filterVal: any) {
    let cust:Customer[] =  this.customers.filter((customer) => customer.customerId == filterVal);
    
    this.salesForm.controls.custname.setValue(cust[0].name);
    this.customer = cust[0];
   
  }
  openCustList(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.customers;
    dialogConfig.maxHeight = "100%";
 

    const dialogRef = this.dialog.open(CustlistComponent, dialogConfig);
   
    dialogRef.afterClosed().subscribe(result => {
      this.salesForm.controls.custid.setValue(result);
      console.log("Dialog output:", result)
      
    });
  }


}
