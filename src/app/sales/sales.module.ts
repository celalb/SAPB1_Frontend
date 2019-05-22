import { AngularMaterialModule } from "../angular-material.module";
import { CommonModule } from '@angular/common';
import { CustlistComponent } from './salesorder/lists/custlist/custlist.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridModule } from 'grid';
import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SalesService } from './salesorder/sales.service';
import { SalesorderComponent } from './salesorder/salesorder.component';
import {SalesorderRoutes} from './salesorder.routing';
@NgModule({
  declarations: [SalesorderComponent,CustlistComponent],
  imports: [
    AngularMaterialModule,
    CommonModule,
    GridModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    LayoutModule,
    DragDropModule,
    SalesorderRoutes
  ],
  providers: [SalesService],
  entryComponents: [CustlistComponent]
})
export class SalesModule { }
