/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { GridService } from './grid.service';
var GridComponent = /** @class */ (function () {
    function GridComponent(gridservice) {
        this.gridservice = gridservice;
        this.sortType = 'Priorty';
        this.filter = false;
        this.sortmode = false;
        this.editcol = '';
    }
    /**
     * @return {?}
     */
    GridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.columns = this.gridservice.GetColumns();
        this.datas = this.gridservice.GetData();
        this.delopt = this.gridservice.GetDelopt();
        this.addopt = this.gridservice.GetAddopt();
        this.search = new Array();
        this.sortDirection = new Array();
        this.columns.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            _this.search.push();
            _this.sortDirection.push(false);
        }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    GridComponent.prototype.remove = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        console.log("remove Id=" + id);
        this.datas.splice(id, 1);
        return;
    };
    /**
     * @return {?}
     */
    GridComponent.prototype.add = /**
     * @return {?}
     */
    function () {
        this.datas.push(this.gridservice.addRows(1));
    };
    /**
     * @param {?=} editable
     * @param {?=} prop
     * @param {?=} ix
     * @param {?=} colIdx
     * @return {?}
     */
    GridComponent.prototype.seltemplate = /**
     * @param {?=} editable
     * @param {?=} prop
     * @param {?=} ix
     * @param {?=} colIdx
     * @return {?}
     */
    function (editable, prop, ix, colIdx) {
        if (this.editcol === prop + ix && editable) {
            this.rowix = ix;
            this.colIdx = colIdx;
            this.inpid = ix + '-' + colIdx;
            this.prop = prop;
            /** @type {?} */
            var element = (/** @type {?} */ (document.getElementById(this.inpid)));
            if (element) {
                this.sortmode = false;
                element.focus();
            }
            //this.datas.filter(x => x.code === prop).map(x => x[prop]);
            return true;
        }
        return false;
    };
    /**
     * @param {?} evt
     * @param {?} type
     * @return {?}
     */
    GridComponent.prototype.validateOnlyNumbers = /**
     * @param {?} evt
     * @param {?} type
     * @return {?}
     */
    function (evt, type) {
        /** @type {?} */
        var theEvent = evt || window.event;
        /** @type {?} */
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        /** @type {?} */
        var regex = /[0-9]|\./;
        if (!regex.test(key) && (type === 'numeric' || type === 'currency')) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault)
                theEvent.preventDefault();
        }
    };
    /*
    @HostListener('document:keydown', ['$event'])
        onKeyDown(ev: KeyboardEvent) {
      
     
      let elkey: HTMLElement = ev.srcElement as HTMLElement;
      
      if (ev.key === "Enter" || (ev.key === "Tab" && !ev.shiftKey)) {
        this.shiftFocusRight(this.rowix, this.colIdx, this.prop);
  
      } else
        if (ev.key === "Tab" && ev.shiftKey) {
          this.shiftFocusLeft(this.rowix, this.colIdx, this.prop);
  
        } else
          if (ev.key === "ArrowUp") {
            this.shiftFocusUp(this.rowix, this.colIdx, this.prop);
  
          } else
            if (ev.key === "ArrowDown") {
              this.shiftFocusDown(this.rowix, this.colIdx, this.prop);
  
            }
           
      let element: HTMLElement = document.getElementById(this.editcol) as HTMLElement;
      if (element) {
        element.focus();
      }
  
    }
  
    @HostListener('document:keyup', ['$event'])
    onKeyUp(ev:KeyboardEvent) {
      
      let element: HTMLElement = ev.srcElement as HTMLElement;
      console.log(element.id, element.nodeName,element.nodeType,element.id);
      if (element) {
        
        element.focus();
      }
    
     
  
    }
  */
    /*
      @HostListener('document:keydown', ['$event'])
          onKeyDown(ev: KeyboardEvent) {
        
       
        let elkey: HTMLElement = ev.srcElement as HTMLElement;
        
        if (ev.key === "Enter" || (ev.key === "Tab" && !ev.shiftKey)) {
          this.shiftFocusRight(this.rowix, this.colIdx, this.prop);
    
        } else
          if (ev.key === "Tab" && ev.shiftKey) {
            this.shiftFocusLeft(this.rowix, this.colIdx, this.prop);
    
          } else
            if (ev.key === "ArrowUp") {
              this.shiftFocusUp(this.rowix, this.colIdx, this.prop);
    
            } else
              if (ev.key === "ArrowDown") {
                this.shiftFocusDown(this.rowix, this.colIdx, this.prop);
    
              }
             
        let element: HTMLElement = document.getElementById(this.editcol) as HTMLElement;
        if (element) {
          element.focus();
        }
    
      }
    
      @HostListener('document:keyup', ['$event'])
      onKeyUp(ev:KeyboardEvent) {
        
        let element: HTMLElement = ev.srcElement as HTMLElement;
        console.log(element.id, element.nodeName,element.nodeType,element.id);
        if (element) {
          
          element.focus();
        }
      
       
    
      }
    */
    /**
     * @param {?} rowIdx
     * @param {?} colIdx
     * @param {?} property
     * @return {?}
     */
    GridComponent.prototype.shiftFocusDown = /*
      @HostListener('document:keydown', ['$event'])
          onKeyDown(ev: KeyboardEvent) {
        
       
        let elkey: HTMLElement = ev.srcElement as HTMLElement;
        
        if (ev.key === "Enter" || (ev.key === "Tab" && !ev.shiftKey)) {
          this.shiftFocusRight(this.rowix, this.colIdx, this.prop);
    
        } else
          if (ev.key === "Tab" && ev.shiftKey) {
            this.shiftFocusLeft(this.rowix, this.colIdx, this.prop);
    
          } else
            if (ev.key === "ArrowUp") {
              this.shiftFocusUp(this.rowix, this.colIdx, this.prop);
    
            } else
              if (ev.key === "ArrowDown") {
                this.shiftFocusDown(this.rowix, this.colIdx, this.prop);
    
              }
             
        let element: HTMLElement = document.getElementById(this.editcol) as HTMLElement;
        if (element) {
          element.focus();
        }
    
      }
    
      @HostListener('document:keyup', ['$event'])
      onKeyUp(ev:KeyboardEvent) {
        
        let element: HTMLElement = ev.srcElement as HTMLElement;
        console.log(element.id, element.nodeName,element.nodeType,element.id);
        if (element) {
          
          element.focus();
        }
      
       
    
      }
    */
    /**
     * @param {?} rowIdx
     * @param {?} colIdx
     * @param {?} property
     * @return {?}
     */
    function (rowIdx, colIdx, property) {
        rowIdx = Math.min(rowIdx + 1, this.datas.length - 1);
        /** @type {?} */
        var name = property + rowIdx;
        this.editcol = name;
        this.inpid = rowIdx + '-' + colIdx;
    };
    /**
     * @param {?} rowIdx
     * @param {?} colIdx
     * @param {?} property
     * @return {?}
     */
    GridComponent.prototype.shiftFocusUp = /**
     * @param {?} rowIdx
     * @param {?} colIdx
     * @param {?} property
     * @return {?}
     */
    function (rowIdx, colIdx, property) {
        rowIdx = Math.max(0, rowIdx - 1);
        /** @type {?} */
        var name = property + rowIdx;
        this.editcol = name;
        this.inpid = rowIdx + '-' + colIdx;
    };
    /**
     * @param {?} rowIdx
     * @param {?} colIdx
     * @param {?} property
     * @return {?}
     */
    GridComponent.prototype.shiftFocusLeft = /**
     * @param {?} rowIdx
     * @param {?} colIdx
     * @param {?} property
     * @return {?}
     */
    function (rowIdx, colIdx, property) {
        // left one column, and correct for non editable columns to left
        colIdx = colIdx - 1 - this.columns.slice(0, colIdx).reverse().findIndex((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.editable; }));
        // don't need edge check bc findIndex returns -1 if none found or no items, so that corrects us back to start col automatically
        /** @type {?} */
        var name = this.columns[colIdx].code + rowIdx;
        this.editcol = name;
        this.inpid = rowIdx + '-' + colIdx;
    };
    /**
     * @param {?} rowIdx
     * @param {?} colIdx
     * @param {?} property
     * @return {?}
     */
    GridComponent.prototype.shiftFocusRight = /**
     * @param {?} rowIdx
     * @param {?} colIdx
     * @param {?} property
     * @return {?}
     */
    function (rowIdx, colIdx, property) {
        // right one column, and correct for non editable columns to right
        /** @type {?} */
        var colIx = colIdx + 1 + this.columns.slice(colIdx + 1).findIndex((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return c.editable; }));
        console.log("****", colIx, colIdx);
        if (colIx == colIdx) {
            colIx = 0;
            rowIdx = Math.min(rowIdx + 1, this.datas.length - 1);
        }
        /** @type {?} */
        var name = this.columns[colIx].code + rowIdx;
        this.editcol = name;
        this.inpid = rowIdx + '-' + colIdx;
    };
    /**
     * @param {?} id
     * @param {?} colIdx
     * @param {?} property
     * @param {?} data
     * @return {?}
     */
    GridComponent.prototype.seteditmode = /**
     * @param {?} id
     * @param {?} colIdx
     * @param {?} property
     * @param {?} data
     * @return {?}
     */
    function (id, colIdx, property, data) {
        /** @type {?} */
        var name = property + id;
        this.editcol = name;
        this.inpid = id + '-' + colIdx;
        this.gridservice.data = data;
    };
    GridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-grid',
                    template: "<table id=\"table\" class=\"table-hover\" bordercolor=\"black\" width=100%>\n\n  <thead>\n\n    <tr class=\"trhead table-success\">\n      <th *ngFor=\"let col of columns;let clIx=index\">\n        <ng-container *ngIf=\"col.searchable   ;then srchBlck;\n                else noBlckpr\">\n        </ng-container>\n        <ng-template #srchBlck>{{col.display}}\n          <input type=\"text\" class=\"inputcss\" placeholder=\"Search\" [(ngModel)]=\"search[clIx]\"\n            (click)=\"colix=clIx; filtercode=col.code;editcol=''\">\n        </ng-template>\n        <ng-template #noBlckpr>\n        </ng-template>\n\n      </th>\n      <th *ngIf=\"addopt || delopt\"> </th>\n    </tr>\n    <tr *ngIf=\"columns\">\n      <th *ngFor=\"let col of columns;let cix=index\" id=\"col.display\" class=\"pointer\">\n        <a (click)=\"sortmode=true;sortType = col.code; sortDirection[cix] = !sortDirection[cix];colix=cix\">\n          {{col.display}}\n          <span *ngIf=\"sortType == col.code && sortDirection[cix]\" class=\"fa fa-caret-down\"></span>\n          <span *ngIf=\"sortType == col.code && !sortDirection[cix]\" class=\"fa fa-caret-up\"></span>\n        </a>\n      </th>\n      <th *ngIf=\"addopt || delopt\">\n          <div *ngIf=\"addopt; else elseBlock\">\n              <button type=\"button\" style=\"color:Green\" (click)=\"add()\">\n                  <i class=\" buttonadd fa fa-plus-square-o\"></i>Add</button>\n          </div>\n            <ng-template #elseBlock>\n                   <a></a>\n            </ng-template>    \n        </th>\n    </tr>\n\n  </thead>\n\n  <tr *ngFor=\"let data of datas|GridFilter:filtercode:colix:search[colix]\n      |orderBy:sortType:sortDirection[colix]:sortmode ;\n                let ix = index;\n                \">\n    <td id=\"td\" *ngFor=\"let col of columns; let colIdx = index\" (click)=\"seteditmode(ix,colIdx,col.code,data)\"\n      [ngClass]=\"{'number': col.type==='numeric' || col.type==='currency','tdcss':col.type==='text'}\">\n\n      <ng-container *ngIf=\"seltemplate(col.editable,col.code,ix,colIdx) ;then editBlckpr;\n        else showBlckpr\">\n      </ng-container>\n      <ng-template #showBlckpr>\n        <ng-template [ngIf]=\"col.type==='currency'\">\n          <a\n            [ngStyle]=\"{'color': data[col.code] < 0? col.minuscolor:col.color}\">{{data[col.code] | currency:col.pipe}}</a>\n        </ng-template>\n        <ng-template [ngIf]=\"col.type==='numeric' \">\n          <a\n            [ngStyle]=\"{'color': data[col.code] < 0? col.minuscolor:col.color}\">{{data[col.code] | number:col.format }}</a>\n        </ng-template>\n        <ng-template [ngIf]=\"col.type==='text' || col.type===''  || col.type===undefined\">\n          <a>{{data[col.code] }}</a>\n        </ng-template>\n        <ng-template [ngIf]=\"col.type==='date'\">\n          <a>{{data[col.code] | date:col.format}}</a>\n        </ng-template>\n\n\n      </ng-template>\n\n      <ng-template #editBlckpr>\n        <input id={{inpid}} matInput autofocus [(ngModel)]=\"data[col.code]\" class=\"inputcss\"\n          (keypress)=\"validateOnlyNumbers($event,col.type)\" (keydown.Tab)=\"shiftFocusRight(ix, colIdx,col.code)\"\n          (keydown.enter)=\"shiftFocusRight(ix, colIdx,col.code)\"\n          (keydown.arrowdown)=\"shiftFocusDown(ix ,colIdx,col.code)\"\n          (keydown.arrowup)=\"shiftFocusUp(ix, colIdx,col.code)\"\n          (keydown.shift.Tab)=\"shiftFocusLeft(ix, colIdx,col.code)\" />\n\n      </ng-template>\n    </td>\n    <td *ngIf=\"addopt || delopt\" id=\"rm\"   class=\"tdcss\">\n        <div *ngIf=\"delopt; else empBlock\">\n            <button type=\"button\" style=\"color:red\"  (click)=\"remove(ix)\">\n                <i class=\"glyphicon glyphicon-trash\"></i>Del</button>\n        </div>\n          <ng-template #empBlock>\n                 <a></a>\n          </ng-template>  \n \n     \n\n    </td>\n  </tr>\n  </tbody>\n\n</table>",
                    providers: [FilterPipe],
                    styles: ["@import url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css);#table tr{display:flex;flex-direction:row;flex-wrap:wrap;flex-basis:100%;border:.5px solid rgba(3,3,3,.2)}#table td,#table th{flex:1 1 80px;border:1px solid #ddd;padding:1px;position:relative;line-height:auto!important}#table tr:nth-child(even){background-color:#f2f2f2}#table tr:hover{background-color:#ddd}#table th{padding-top:1px;padding-bottom:1px;text-align:left;background-color:rgba(89,151,151,.965);color:#070303}.pointer{cursor:pointer}.inputcss{position:absolute;top:0;background-color:#e8eeeef6;height:100%;width:100%;padding:1px;display:flex;flex:1 0 90%;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.tdcss{position:relative;line-height:auto!important}.number{text-align:right;padding:0 1px}.icon{background:url(../cross-min.png);height:10px;width:20px}.button{background-color:#b10707;border:none;color:#fff;padding:4px 8px;text-align:center;text-decoration:none;display:inline-block;font-size:8px;margin:4px 2px;cursor:pointer;left:20px;position:relative}.buttonadd{cursor:pointer}.positive{background-color:green}.negative{background-color:#ff0;color:red}"]
                }] }
    ];
    /** @nocollapse */
    GridComponent.ctorParameters = function () { return [
        { type: GridService }
    ]; };
    return GridComponent;
}());
export { GridComponent };
if (false) {
    /** @type {?} */
    GridComponent.prototype.columns;
    /** @type {?} */
    GridComponent.prototype.search;
    /** @type {?} */
    GridComponent.prototype.gridid;
    /** @type {?} */
    GridComponent.prototype.data;
    /** @type {?} */
    GridComponent.prototype.datas;
    /** @type {?} */
    GridComponent.prototype.delopt;
    /** @type {?} */
    GridComponent.prototype.addopt;
    /** @type {?} */
    GridComponent.prototype.sortType;
    /** @type {?} */
    GridComponent.prototype.sortDirection;
    /** @type {?} */
    GridComponent.prototype.editmode;
    /** @type {?} */
    GridComponent.prototype.editcol;
    /** @type {?} */
    GridComponent.prototype.filtercode;
    /** @type {?} */
    GridComponent.prototype.filter;
    /** @type {?} */
    GridComponent.prototype.colix;
    /** @type {?} */
    GridComponent.prototype.colIdx;
    /** @type {?} */
    GridComponent.prototype.rowix;
    /** @type {?} */
    GridComponent.prototype.prop;
    /** @type {?} */
    GridComponent.prototype.inpid;
    /** @type {?} */
    GridComponent.prototype.sortmode;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.gridservice;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ncmlkLyIsInNvdXJjZXMiOlsibGliL2dyaWQvZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXdCLE1BQU0sZUFBZSxDQUFDO0FBR2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDO0lBMkJFLHVCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQWI1QyxhQUFRLEdBQUcsU0FBUyxDQUFDO1FBTXJCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFNZixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWYsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELGdDQUFROzs7SUFBUjtRQUFBLGlCQWdCQztRQWRDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBRWpDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsT0FBTztZQUMxQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25CLEtB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O0lBQ25CLCtCQUFlOztJQUNmLDhCQUFjOztJQUNkLCtCQUFlOztJQUNmLDhCQUFjOztJQUNkLDZCQUFhOztJQUNiLDhCQUFjOztJQUNkLGlDQUFpQjs7Ozs7SUFDTCxvQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4vY29sdW1uJztcbmltcG9ydCB7IEZpbHRlclBpcGUgfSBmcm9tICcuL2ZpbHRlci5waXBlJztcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSAnLi9ncmlkLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZ3JpZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9ncmlkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ3JpZC5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW0ZpbHRlclBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgY29sdW1uczogQ29sdW1uW107XG4gIHNlYXJjaDogc3RyaW5nW107XG4gIGdyaWRpZCA7XG4gIGRhdGE6IGFueTtcbiAgcHVibGljIGRhdGFzOiBhbnlbXTtcbiAgZGVsb3B0IDogYm9vbGVhbjtcbiAgYWRkb3B0IDogYm9vbGVhbjtcbiAgc29ydFR5cGUgPSAnUHJpb3J0eSc7XG4gIHNvcnREaXJlY3Rpb246IGJvb2xlYW5bXTtcbiAgZWRpdG1vZGU6IGJvb2xlYW47XG4gIGVkaXRjb2w6IHN0cmluZztcblxuICBmaWx0ZXJjb2RlOiBzdHJpbmc7XG4gIGZpbHRlciA9IGZhbHNlO1xuICBjb2xpeDogbnVtYmVyO1xuICBjb2xJZHg6IG51bWJlcjtcbiAgcm93aXg6IG51bWJlcjtcbiAgcHJvcDogc3RyaW5nO1xuICBpbnBpZDogc3RyaW5nO1xuICBzb3J0bW9kZSA9IGZhbHNlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyaWRzZXJ2aWNlOiBHcmlkU2VydmljZSkge1xuICAgIHRoaXMuZWRpdGNvbCA9ICcnO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICBcbiAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLmdyaWRzZXJ2aWNlLkdldENvbHVtbnMoKTtcbiAgICB0aGlzLmRhdGFzID0gdGhpcy5ncmlkc2VydmljZS5HZXREYXRhKCk7XG4gICAgdGhpcy5kZWxvcHQgPSB0aGlzLmdyaWRzZXJ2aWNlLkdldERlbG9wdCgpO1xuICAgIHRoaXMuYWRkb3B0ID0gdGhpcy5ncmlkc2VydmljZS5HZXRBZGRvcHQoKTtcbiAgICB0aGlzLnNlYXJjaCA9IG5ldyBBcnJheSgpO1xuICAgIHRoaXMuc29ydERpcmVjdGlvbiA9IG5ldyBBcnJheSgpO1xuXG4gICAgdGhpcy5jb2x1bW5zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICB0aGlzLnNlYXJjaC5wdXNoKCk7XG4gICAgICB0aGlzLnNvcnREaXJlY3Rpb24ucHVzaChcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgfSk7XG5cbiAgfVxuICBcbiAgcmVtb3ZlKGlkOiBudW1iZXIpIHtcbiAgICBjb25zb2xlLmxvZyhcInJlbW92ZSBJZD1cIitpZCk7XG4gICAgdGhpcy5kYXRhcy5zcGxpY2UoaWQsIDEpO1xuXG4gICAgcmV0dXJuO1xuICB9XG4gIGFkZCgpIHtcbiAgICBcbiAgICB0aGlzLmRhdGFzLnB1c2godGhpcy5ncmlkc2VydmljZS5hZGRSb3dzKDEpKTtcblxuICB9XG4gIHNlbHRlbXBsYXRlKGVkaXRhYmxlPzogYm9vbGVhbiwgcHJvcD8sIGl4PywgY29sSWR4Pykge1xuICAgXG4gICAgaWYgKHRoaXMuZWRpdGNvbCA9PT0gcHJvcCArIGl4ICYmIGVkaXRhYmxlKSB7XG4gICAgICB0aGlzLnJvd2l4ID0gaXg7XG4gICAgICB0aGlzLmNvbElkeCA9IGNvbElkeDtcbiAgICAgIHRoaXMuaW5waWQgPSBpeCArICctJyArIGNvbElkeDtcbiAgICAgIHRoaXMucHJvcCA9IHByb3A7XG4gICAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlucGlkKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuc29ydG1vZGU9ZmFsc2U7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIC8vdGhpcy5kYXRhcy5maWx0ZXIoeCA9PiB4LmNvZGUgPT09IHByb3ApLm1hcCh4ID0+IHhbcHJvcF0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcblxuICB9XG4gIFxuICB2YWxpZGF0ZU9ubHlOdW1iZXJzKGV2dCx0eXBlKSB7XG4gICAgdmFyIHRoZUV2ZW50ID0gZXZ0IHx8IHdpbmRvdy5ldmVudDtcbiAgICB2YXIga2V5ID0gdGhlRXZlbnQua2V5Q29kZSB8fCB0aGVFdmVudC53aGljaDtcbiAgICBrZXkgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCBrZXkgKTtcbiAgICB2YXIgcmVnZXggPSAvWzAtOV18XFwuLztcbiAgICBpZiggIXJlZ2V4LnRlc3Qoa2V5KSAmJiAodHlwZSA9PT0gJ251bWVyaWMnIHx8IHR5cGUgPT09ICdjdXJyZW5jeScgICkpIHtcbiAgICAgIHRoZUV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICBpZih0aGVFdmVudC5wcmV2ZW50RGVmYXVsdCkgdGhlRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cbiAgLypcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bicsIFsnJGV2ZW50J10pXG4gICAgICBvbktleURvd24oZXY6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBcbiAgIFxuICAgIGxldCBlbGtleTogSFRNTEVsZW1lbnQgPSBldi5zcmNFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIFxuICAgIGlmIChldi5rZXkgPT09IFwiRW50ZXJcIiB8fCAoZXYua2V5ID09PSBcIlRhYlwiICYmICFldi5zaGlmdEtleSkpIHtcbiAgICAgIHRoaXMuc2hpZnRGb2N1c1JpZ2h0KHRoaXMucm93aXgsIHRoaXMuY29sSWR4LCB0aGlzLnByb3ApO1xuXG4gICAgfSBlbHNlXG4gICAgICBpZiAoZXYua2V5ID09PSBcIlRhYlwiICYmIGV2LnNoaWZ0S2V5KSB7XG4gICAgICAgIHRoaXMuc2hpZnRGb2N1c0xlZnQodGhpcy5yb3dpeCwgdGhpcy5jb2xJZHgsIHRoaXMucHJvcCk7XG5cbiAgICAgIH0gZWxzZVxuICAgICAgICBpZiAoZXYua2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgICAgIHRoaXMuc2hpZnRGb2N1c1VwKHRoaXMucm93aXgsIHRoaXMuY29sSWR4LCB0aGlzLnByb3ApO1xuXG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgIGlmIChldi5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2hpZnRGb2N1c0Rvd24odGhpcy5yb3dpeCwgdGhpcy5jb2xJZHgsIHRoaXMucHJvcCk7XG5cbiAgICAgICAgICB9IFxuICAgICAgICAgXG4gICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5lZGl0Y29sKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAnLCBbJyRldmVudCddKVxuICBvbktleVVwKGV2OktleWJvYXJkRXZlbnQpIHtcbiAgICBcbiAgICBsZXQgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBldi5zcmNFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuaWQsIGVsZW1lbnQubm9kZU5hbWUsZWxlbWVudC5ub2RlVHlwZSxlbGVtZW50LmlkKTtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgXG4gICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICBcbiAgIFxuXG4gIH1cbiovXG4gIFxuICBzaGlmdEZvY3VzRG93bihyb3dJZHg6IG51bWJlciwgY29sSWR4OiBudW1iZXIsIHByb3BlcnR5OiBzdHJpbmcpIHtcbiAgICByb3dJZHggPSBNYXRoLm1pbihyb3dJZHggKyAxLCB0aGlzLmRhdGFzLmxlbmd0aCAtIDEpO1xuICAgIGNvbnN0IG5hbWUgPSBwcm9wZXJ0eSArIHJvd0lkeDtcbiAgICB0aGlzLmVkaXRjb2wgPSBuYW1lO1xuICAgIHRoaXMuaW5waWQgPSByb3dJZHggKyAnLScgKyBjb2xJZHg7XG4gIH1cbiAgc2hpZnRGb2N1c1VwKHJvd0lkeDogbnVtYmVyLCBjb2xJZHg6IG51bWJlciwgcHJvcGVydHk6IHN0cmluZykge1xuICAgIHJvd0lkeCA9IE1hdGgubWF4KDAsIHJvd0lkeCAtIDEpO1xuICAgIGNvbnN0IG5hbWUgPSBwcm9wZXJ0eSArIHJvd0lkeDtcbiAgICB0aGlzLmVkaXRjb2wgPSBuYW1lO1xuICAgIHRoaXMuaW5waWQgPSByb3dJZHggKyAnLScgKyBjb2xJZHg7XG4gIH1cblxuICBzaGlmdEZvY3VzTGVmdChyb3dJZHg6IG51bWJlciwgY29sSWR4OiBudW1iZXIsIHByb3BlcnR5OiBzdHJpbmcpIHtcblxuXG5cbiAgICAvLyBsZWZ0IG9uZSBjb2x1bW4sIGFuZCBjb3JyZWN0IGZvciBub24gZWRpdGFibGUgY29sdW1ucyB0byBsZWZ0XG4gICAgY29sSWR4ID0gY29sSWR4IC0gMSAtIHRoaXMuY29sdW1ucy5zbGljZSgwLCBjb2xJZHgpLnJldmVyc2UoKS5maW5kSW5kZXgoYyA9PiBjLmVkaXRhYmxlKTtcbiAgICAvLyBkb24ndCBuZWVkIGVkZ2UgY2hlY2sgYmMgZmluZEluZGV4IHJldHVybnMgLTEgaWYgbm9uZSBmb3VuZCBvciBubyBpdGVtcywgc28gdGhhdCBjb3JyZWN0cyB1cyBiYWNrIHRvIHN0YXJ0IGNvbCBhdXRvbWF0aWNhbGx5XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuY29sdW1uc1tjb2xJZHhdLmNvZGUgKyByb3dJZHg7XG4gICAgdGhpcy5lZGl0Y29sID0gbmFtZTtcbiAgICB0aGlzLmlucGlkID0gcm93SWR4ICsgJy0nICsgY29sSWR4O1xuICB9XG5cbiAgc2hpZnRGb2N1c1JpZ2h0KHJvd0lkeDogbnVtYmVyLCBjb2xJZHg6IG51bWJlciwgcHJvcGVydHk6IHN0cmluZykge1xuXG4gICAgLy8gcmlnaHQgb25lIGNvbHVtbiwgYW5kIGNvcnJlY3QgZm9yIG5vbiBlZGl0YWJsZSBjb2x1bW5zIHRvIHJpZ2h0XG4gICAgbGV0IGNvbEl4ID0gY29sSWR4ICsgMSArIHRoaXMuY29sdW1ucy5zbGljZShjb2xJZHggKyAxKS5maW5kSW5kZXgoYyA9PiBjLmVkaXRhYmxlKTtcbiAgICBjb25zb2xlLmxvZyhcIioqKipcIixjb2xJeCxjb2xJZHgpO1xuICAgIGlmIChjb2xJeCA9PSBjb2xJZHgpIHtcbiAgICAgIGNvbEl4ID0gMDtcbiAgICAgIHJvd0lkeCA9IE1hdGgubWluKHJvd0lkeCArIDEsIHRoaXMuZGF0YXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmNvbHVtbnNbY29sSXhdLmNvZGUgKyByb3dJZHg7XG4gICAgdGhpcy5lZGl0Y29sID0gbmFtZTtcbiAgICB0aGlzLmlucGlkID0gcm93SWR4ICsgJy0nICsgY29sSWR4O1xuICAgXG4gIH1cblxuICBzZXRlZGl0bW9kZSggaWQ6IG51bWJlciwgY29sSWR4OiBudW1iZXIsIHByb3BlcnR5OiBzdHJpbmcsIGRhdGEpIHtcblxuICAgICAgY29uc3QgbmFtZSA9IHByb3BlcnR5ICsgaWQ7XG4gICAgICB0aGlzLmVkaXRjb2wgPSBuYW1lO1xuICAgICAgdGhpcy5pbnBpZCA9IGlkICsgJy0nICsgY29sSWR4O1xuICAgICAgXG4gICAgICB0aGlzLmdyaWRzZXJ2aWNlLmRhdGEgPSBkYXRhO1xuICB9XG4gXG59Il19