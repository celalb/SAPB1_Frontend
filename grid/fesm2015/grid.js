import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pipe, Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FilterPipe {
    /**
     * @param {?} datas
     * @param {?=} fldname
     * @param {?=} colIdx
     * @param {?=} search
     * @return {?}
     */
    transform(datas, fldname, colIdx, search) {
        if (!datas)
            return [];
        if (!fldname)
            return datas;
        if (!search)
            return datas;
        search = search.toLocaleLowerCase();
        datas = datas[colIdx] ? datas.filter((/**
         * @param {?} p
         * @return {?}
         */
        (p) => p[fldname].toLocaleLowerCase().indexOf(search) !== -1))
            : datas;
        return datas;
    }
}
FilterPipe.decorators = [
    { type: Pipe, args: [{
                name: 'GridFilter'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridService {
    constructor() {
        this.datas = [];
    }
    /**
     * @param {?=} datas
     * @param {?=} col
     * @param {?=} addopt
     * @param {?=} delopt
     * @return {?}
     */
    OnLoadData(datas, col, addopt, delopt) {
        this.columns = col;
        this.addopt = addopt;
        this.delopt = delopt;
        if (!datas || datas.length === 0) {
            this.datas = new Array();
            this.datas = this.addRows(5);
        }
        else {
            this.datas = datas;
        }
    }
    /**
     * @param {?} lrow
     * @return {?}
     */
    addRows(lrow) {
        /** @type {?} */
        let vrbl = "";
        /** @type {?} */
        let vrg = "";
        /** @type {?} */
        let xdatas = [];
        for (let lx = 0; lx < lrow; lx++) {
            for (let i = 0; i < this.columns.length; i++) {
                vrbl += this.columns[i].code + ":" + '';
            }
            vrg = ',';
            if (lx == lrow) {
                vrg = '';
            }
            this.data = "{" + vrbl + "}";
            xdatas.push(this.data + vrg);
        }
        return xdatas;
    }
    /**
     * @return {?}
     */
    GetColumns() {
        return this.columns;
    }
    /**
     * @return {?}
     */
    GetData() {
        return this.datas;
    }
    /**
     * @return {?}
     */
    GetDelopt() {
        return this.delopt;
    }
    /**
     * @return {?}
     */
    GetAddopt() {
        return this.addopt;
    }
    /**
     * @return {?}
     */
    getActivedata() {
        return this.data;
    }
}
GridService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GridService.ctorParameters = () => [];
/** @nocollapse */ GridService.ngInjectableDef = defineInjectable({ factory: function GridService_Factory() { return new GridService(); }, token: GridService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridComponent {
    /**
     * @param {?} gridservice
     */
    constructor(gridservice) {
        this.gridservice = gridservice;
        this.sortType = 'Priorty';
        this.filter = false;
        this.sortmode = false;
        this.editcol = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
        element => {
            this.search.push();
            this.sortDirection.push(false);
        }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    remove(id) {
        console.log("remove Id=" + id);
        this.datas.splice(id, 1);
        return;
    }
    /**
     * @return {?}
     */
    add() {
        this.datas.push(this.gridservice.addRows(1));
    }
    /**
     * @param {?=} editable
     * @param {?=} prop
     * @param {?=} ix
     * @param {?=} colIdx
     * @return {?}
     */
    seltemplate(editable, prop, ix, colIdx) {
        if (this.editcol === prop + ix && editable) {
            this.rowix = ix;
            this.colIdx = colIdx;
            this.inpid = ix + '-' + colIdx;
            this.prop = prop;
            /** @type {?} */
            let element = (/** @type {?} */ (document.getElementById(this.inpid)));
            if (element) {
                this.sortmode = false;
                element.focus();
            }
            //this.datas.filter(x => x.code === prop).map(x => x[prop]);
            return true;
        }
        return false;
    }
    /**
     * @param {?} evt
     * @param {?} type
     * @return {?}
     */
    validateOnlyNumbers(evt, type) {
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
    }
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
    shiftFocusDown(rowIdx, colIdx, property) {
        rowIdx = Math.min(rowIdx + 1, this.datas.length - 1);
        /** @type {?} */
        const name = property + rowIdx;
        this.editcol = name;
        this.inpid = rowIdx + '-' + colIdx;
    }
    /**
     * @param {?} rowIdx
     * @param {?} colIdx
     * @param {?} property
     * @return {?}
     */
    shiftFocusUp(rowIdx, colIdx, property) {
        rowIdx = Math.max(0, rowIdx - 1);
        /** @type {?} */
        const name = property + rowIdx;
        this.editcol = name;
        this.inpid = rowIdx + '-' + colIdx;
    }
    /**
     * @param {?} rowIdx
     * @param {?} colIdx
     * @param {?} property
     * @return {?}
     */
    shiftFocusLeft(rowIdx, colIdx, property) {
        // left one column, and correct for non editable columns to left
        colIdx = colIdx - 1 - this.columns.slice(0, colIdx).reverse().findIndex((/**
         * @param {?} c
         * @return {?}
         */
        c => c.editable));
        // don't need edge check bc findIndex returns -1 if none found or no items, so that corrects us back to start col automatically
        /** @type {?} */
        const name = this.columns[colIdx].code + rowIdx;
        this.editcol = name;
        this.inpid = rowIdx + '-' + colIdx;
    }
    /**
     * @param {?} rowIdx
     * @param {?} colIdx
     * @param {?} property
     * @return {?}
     */
    shiftFocusRight(rowIdx, colIdx, property) {
        // right one column, and correct for non editable columns to right
        /** @type {?} */
        let colIx = colIdx + 1 + this.columns.slice(colIdx + 1).findIndex((/**
         * @param {?} c
         * @return {?}
         */
        c => c.editable));
        console.log("****", colIx, colIdx);
        if (colIx == colIdx) {
            colIx = 0;
            rowIdx = Math.min(rowIdx + 1, this.datas.length - 1);
        }
        /** @type {?} */
        const name = this.columns[colIx].code + rowIdx;
        this.editcol = name;
        this.inpid = rowIdx + '-' + colIdx;
    }
    /**
     * @param {?} id
     * @param {?} colIdx
     * @param {?} property
     * @param {?} data
     * @return {?}
     */
    seteditmode(id, colIdx, property, data) {
        /** @type {?} */
        const name = property + id;
        this.editcol = name;
        this.inpid = id + '-' + colIdx;
        this.gridservice.data = data;
    }
}
GridComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-grid',
                template: "<table id=\"table\" class=\"table-hover\" bordercolor=\"black\" width=100%>\n\n  <thead>\n\n    <tr class=\"trhead table-success\">\n      <th *ngFor=\"let col of columns;let clIx=index\">\n        <ng-container *ngIf=\"col.searchable   ;then srchBlck;\n                else noBlckpr\">\n        </ng-container>\n        <ng-template #srchBlck>{{col.display}}\n          <input type=\"text\" class=\"inputcss\" placeholder=\"Search\" [(ngModel)]=\"search[clIx]\"\n            (click)=\"colix=clIx; filtercode=col.code;editcol=''\">\n        </ng-template>\n        <ng-template #noBlckpr>\n        </ng-template>\n\n      </th>\n      <th *ngIf=\"addopt || delopt\"> </th>\n    </tr>\n    <tr *ngIf=\"columns\">\n      <th *ngFor=\"let col of columns;let cix=index\" id=\"col.display\" class=\"pointer\">\n        <a (click)=\"sortmode=true;sortType = col.code; sortDirection[cix] = !sortDirection[cix];colix=cix\">\n          {{col.display}}\n          <span *ngIf=\"sortType == col.code && sortDirection[cix]\" class=\"fa fa-caret-down\"></span>\n          <span *ngIf=\"sortType == col.code && !sortDirection[cix]\" class=\"fa fa-caret-up\"></span>\n        </a>\n      </th>\n      <th *ngIf=\"addopt || delopt\">\n          <div *ngIf=\"addopt; else elseBlock\">\n              <button type=\"button\" style=\"color:Green\" (click)=\"add()\">\n                  <i class=\" buttonadd fa fa-plus-square-o\"></i>Add</button>\n          </div>\n            <ng-template #elseBlock>\n                   <a></a>\n            </ng-template>    \n        </th>\n    </tr>\n\n  </thead>\n\n  <tr *ngFor=\"let data of datas|GridFilter:filtercode:colix:search[colix]\n      |orderBy:sortType:sortDirection[colix]:sortmode ;\n                let ix = index;\n                \">\n    <td id=\"td\" *ngFor=\"let col of columns; let colIdx = index\" (click)=\"seteditmode(ix,colIdx,col.code,data)\"\n      [ngClass]=\"{'number': col.type==='numeric' || col.type==='currency','tdcss':col.type==='text'}\">\n\n      <ng-container *ngIf=\"seltemplate(col.editable,col.code,ix,colIdx) ;then editBlckpr;\n        else showBlckpr\">\n      </ng-container>\n      <ng-template #showBlckpr>\n        <ng-template [ngIf]=\"col.type==='currency'\">\n          <a\n            [ngStyle]=\"{'color': data[col.code] < 0? col.minuscolor:col.color}\">{{data[col.code] | currency:col.pipe}}</a>\n        </ng-template>\n        <ng-template [ngIf]=\"col.type==='numeric' \">\n          <a\n            [ngStyle]=\"{'color': data[col.code] < 0? col.minuscolor:col.color}\">{{data[col.code] | number:col.format }}</a>\n        </ng-template>\n        <ng-template [ngIf]=\"col.type==='text' || col.type===''  || col.type===undefined\">\n          <a>{{data[col.code] }}</a>\n        </ng-template>\n        <ng-template [ngIf]=\"col.type==='date'\">\n          <a>{{data[col.code] | date:col.format}}</a>\n        </ng-template>\n\n\n      </ng-template>\n\n      <ng-template #editBlckpr>\n        <input id={{inpid}} matInput autofocus [(ngModel)]=\"data[col.code]\" class=\"inputcss\"\n          (keypress)=\"validateOnlyNumbers($event,col.type)\" (keydown.Tab)=\"shiftFocusRight(ix, colIdx,col.code)\"\n          (keydown.enter)=\"shiftFocusRight(ix, colIdx,col.code)\"\n          (keydown.arrowdown)=\"shiftFocusDown(ix ,colIdx,col.code)\"\n          (keydown.arrowup)=\"shiftFocusUp(ix, colIdx,col.code)\"\n          (keydown.shift.Tab)=\"shiftFocusLeft(ix, colIdx,col.code)\" />\n\n      </ng-template>\n    </td>\n    <td *ngIf=\"addopt || delopt\" id=\"rm\"   class=\"tdcss\">\n        <div *ngIf=\"delopt; else empBlock\">\n            <button type=\"button\" style=\"color:red\"  (click)=\"remove(ix)\">\n                <i class=\"glyphicon glyphicon-trash\"></i>Del</button>\n        </div>\n          <ng-template #empBlock>\n                 <a></a>\n          </ng-template>  \n \n     \n\n    </td>\n  </tr>\n  </tbody>\n\n</table>",
                providers: [FilterPipe],
                styles: ["@import url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css);#table tr{display:flex;flex-direction:row;flex-wrap:wrap;flex-basis:100%;border:.5px solid rgba(3,3,3,.2)}#table td,#table th{flex:1 1 80px;border:1px solid #ddd;padding:1px;position:relative;line-height:auto!important}#table tr:nth-child(even){background-color:#f2f2f2}#table tr:hover{background-color:#ddd}#table th{padding-top:1px;padding-bottom:1px;text-align:left;background-color:rgba(89,151,151,.965);color:#070303}.pointer{cursor:pointer}.inputcss{position:absolute;top:0;background-color:#e8eeeef6;height:100%;width:100%;padding:1px;display:flex;flex:1 0 90%;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.tdcss{position:relative;line-height:auto!important}.number{text-align:right;padding:0 1px}.icon{background:url(../cross-min.png);height:10px;width:20px}.button{background-color:#b10707;border:none;color:#fff;padding:4px 8px;text-align:center;text-decoration:none;display:inline-block;font-size:8px;margin:4px 2px;cursor:pointer;left:20px;position:relative}.buttonadd{cursor:pointer}.positive{background-color:green}.negative{background-color:#ff0;color:red}"]
            }] }
];
/** @nocollapse */
GridComponent.ctorParameters = () => [
    { type: GridService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OrderPipe {
    /**
     * @param {?} value
     * @param {?=} prop
     * @param {?=} direcion
     * @param {?=} sortmode
     * @return {?}
     */
    transform(value, prop, direcion, sortmode) {
        if (!sortmode) {
            return value;
        }
        if (!value) {
            return [];
        }
        if (!prop) {
            return value;
        }
        sortmode = false;
        if (value.length > 0) {
            /** @type {?} */
            const _direction = direcion === false ? -1 : 1;
            /** @type {?} */
            const _isArr = Array.isArray(value);
            /** @type {?} */
            const _type = typeof value[0];
            /** @type {?} */
            const _flag = _isArr && _type === 'object' ? true : _isArr && _type !== 'object' ? false : true;
            value.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                a = _flag ? a[prop] : a;
                b = _flag ? b[prop] : b;
                if (typeof a === 'string') {
                    return a > b ? -1 * _direction : 1 * _direction;
                }
                else if (typeof a === 'number') {
                    return a - b > 0 ? -1 * _direction : 1 * _direction;
                }
            }));
        }
        return value;
    }
}
OrderPipe.decorators = [
    { type: Pipe, args: [{
                name: 'orderBy',
                pure: false
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridModule {
}
GridModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GridComponent, FilterPipe, OrderPipe],
                imports: [CommonModule, FormsModule
                ],
                exports: [GridComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Column {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GridModule, GridComponent, Column, GridService, FilterPipe as ɵa, OrderPipe as ɵb };

//# sourceMappingURL=grid.js.map