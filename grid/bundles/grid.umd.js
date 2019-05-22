(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/forms'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('grid', ['exports', '@angular/common', '@angular/forms', '@angular/core'], factory) :
    (factory((global.grid = {}),global.ng.common,global.ng.forms,global.ng.core));
}(this, (function (exports,common,forms,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FilterPipe = /** @class */ (function () {
        function FilterPipe() {
        }
        /**
         * @param {?} datas
         * @param {?=} fldname
         * @param {?=} colIdx
         * @param {?=} search
         * @return {?}
         */
        FilterPipe.prototype.transform = /**
         * @param {?} datas
         * @param {?=} fldname
         * @param {?=} colIdx
         * @param {?=} search
         * @return {?}
         */
            function (datas, fldname, colIdx, search) {
                if (!datas)
                    return [];
                if (!fldname)
                    return datas;
                if (!search)
                    return datas;
                search = search.toLocaleLowerCase();
                datas = datas[colIdx] ? datas.filter(( /**
                 * @param {?} p
                 * @return {?}
                 */function (p) {
                    return p[fldname].toLocaleLowerCase().indexOf(search) !== -1;
                }))
                    : datas;
                return datas;
            };
        FilterPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'GridFilter'
                    },] }
        ];
        return FilterPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridService = /** @class */ (function () {
        function GridService() {
            this.datas = [];
        }
        /**
         * @param {?=} datas
         * @param {?=} col
         * @param {?=} addopt
         * @param {?=} delopt
         * @return {?}
         */
        GridService.prototype.OnLoadData = /**
         * @param {?=} datas
         * @param {?=} col
         * @param {?=} addopt
         * @param {?=} delopt
         * @return {?}
         */
            function (datas, col, addopt, delopt) {
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
            };
        /**
         * @param {?} lrow
         * @return {?}
         */
        GridService.prototype.addRows = /**
         * @param {?} lrow
         * @return {?}
         */
            function (lrow) {
                /** @type {?} */
                var vrbl = "";
                /** @type {?} */
                var vrg = "";
                /** @type {?} */
                var xdatas = [];
                for (var lx = 0; lx < lrow; lx++) {
                    for (var i = 0; i < this.columns.length; i++) {
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
            };
        /**
         * @return {?}
         */
        GridService.prototype.GetColumns = /**
         * @return {?}
         */
            function () {
                return this.columns;
            };
        /**
         * @return {?}
         */
        GridService.prototype.GetData = /**
         * @return {?}
         */
            function () {
                return this.datas;
            };
        /**
         * @return {?}
         */
        GridService.prototype.GetDelopt = /**
         * @return {?}
         */
            function () {
                return this.delopt;
            };
        /**
         * @return {?}
         */
        GridService.prototype.GetAddopt = /**
         * @return {?}
         */
            function () {
                return this.addopt;
            };
        /**
         * @return {?}
         */
        GridService.prototype.getActivedata = /**
         * @return {?}
         */
            function () {
                return this.data;
            };
        GridService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        GridService.ctorParameters = function () { return []; };
        /** @nocollapse */ GridService.ngInjectableDef = i0.defineInjectable({ factory: function GridService_Factory() { return new GridService(); }, token: GridService, providedIn: "root" });
        return GridService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                this.columns.forEach(( /**
                 * @param {?} element
                 * @return {?}
                 */function (element) {
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
                    var element = ( /** @type {?} */(document.getElementById(this.inpid)));
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
                colIdx = colIdx - 1 - this.columns.slice(0, colIdx).reverse().findIndex(( /**
                 * @param {?} c
                 * @return {?}
                 */function (c) { return c.editable; }));
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
                var colIx = colIdx + 1 + this.columns.slice(colIdx + 1).findIndex(( /**
                 * @param {?} c
                 * @return {?}
                 */function (c) { return c.editable; }));
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
            { type: i0.Component, args: [{
                        selector: 'app-grid',
                        template: "<table id=\"table\" class=\"table-hover\" bordercolor=\"black\" width=100%>\n\n  <thead>\n\n    <tr class=\"trhead table-success\">\n      <th *ngFor=\"let col of columns;let clIx=index\">\n        <ng-container *ngIf=\"col.searchable   ;then srchBlck;\n                else noBlckpr\">\n        </ng-container>\n        <ng-template #srchBlck>{{col.display}}\n          <input type=\"text\" class=\"inputcss\" placeholder=\"Search\" [(ngModel)]=\"search[clIx]\"\n            (click)=\"colix=clIx; filtercode=col.code;editcol=''\">\n        </ng-template>\n        <ng-template #noBlckpr>\n        </ng-template>\n\n      </th>\n      <th *ngIf=\"addopt || delopt\"> </th>\n    </tr>\n    <tr *ngIf=\"columns\">\n      <th *ngFor=\"let col of columns;let cix=index\" id=\"col.display\" class=\"pointer\">\n        <a (click)=\"sortmode=true;sortType = col.code; sortDirection[cix] = !sortDirection[cix];colix=cix\">\n          {{col.display}}\n          <span *ngIf=\"sortType == col.code && sortDirection[cix]\" class=\"fa fa-caret-down\"></span>\n          <span *ngIf=\"sortType == col.code && !sortDirection[cix]\" class=\"fa fa-caret-up\"></span>\n        </a>\n      </th>\n      <th *ngIf=\"addopt || delopt\">\n          <div *ngIf=\"addopt; else elseBlock\">\n              <button type=\"button\" style=\"color:Green\" (click)=\"add()\">\n                  <i class=\" buttonadd fa fa-plus-square-o\"></i>Add</button>\n          </div>\n            <ng-template #elseBlock>\n                   <a></a>\n            </ng-template>    \n        </th>\n    </tr>\n\n  </thead>\n\n  <tr *ngFor=\"let data of datas|GridFilter:filtercode:colix:search[colix]\n      |orderBy:sortType:sortDirection[colix]:sortmode ;\n                let ix = index;\n                \">\n    <td id=\"td\" *ngFor=\"let col of columns; let colIdx = index\" (click)=\"seteditmode(ix,colIdx,col.code,data)\"\n      [ngClass]=\"{'number': col.type==='numeric' || col.type==='currency','tdcss':col.type==='text'}\">\n\n      <ng-container *ngIf=\"seltemplate(col.editable,col.code,ix,colIdx) ;then editBlckpr;\n        else showBlckpr\">\n      </ng-container>\n      <ng-template #showBlckpr>\n        <ng-template [ngIf]=\"col.type==='currency'\">\n          <a\n            [ngStyle]=\"{'color': data[col.code] < 0? col.minuscolor:col.color}\">{{data[col.code] | currency:col.pipe}}</a>\n        </ng-template>\n        <ng-template [ngIf]=\"col.type==='numeric' \">\n          <a\n            [ngStyle]=\"{'color': data[col.code] < 0? col.minuscolor:col.color}\">{{data[col.code] | number:col.format }}</a>\n        </ng-template>\n        <ng-template [ngIf]=\"col.type==='text' || col.type===''  || col.type===undefined\">\n          <a>{{data[col.code] }}</a>\n        </ng-template>\n        <ng-template [ngIf]=\"col.type==='date'\">\n          <a>{{data[col.code] | date:col.format}}</a>\n        </ng-template>\n\n\n      </ng-template>\n\n      <ng-template #editBlckpr>\n        <input id={{inpid}} matInput autofocus [(ngModel)]=\"data[col.code]\" class=\"inputcss\"\n          (keypress)=\"validateOnlyNumbers($event,col.type)\" (keydown.Tab)=\"shiftFocusRight(ix, colIdx,col.code)\"\n          (keydown.enter)=\"shiftFocusRight(ix, colIdx,col.code)\"\n          (keydown.arrowdown)=\"shiftFocusDown(ix ,colIdx,col.code)\"\n          (keydown.arrowup)=\"shiftFocusUp(ix, colIdx,col.code)\"\n          (keydown.shift.Tab)=\"shiftFocusLeft(ix, colIdx,col.code)\" />\n\n      </ng-template>\n    </td>\n    <td *ngIf=\"addopt || delopt\" id=\"rm\"   class=\"tdcss\">\n        <div *ngIf=\"delopt; else empBlock\">\n            <button type=\"button\" style=\"color:red\"  (click)=\"remove(ix)\">\n                <i class=\"glyphicon glyphicon-trash\"></i>Del</button>\n        </div>\n          <ng-template #empBlock>\n                 <a></a>\n          </ng-template>  \n \n     \n\n    </td>\n  </tr>\n  </tbody>\n\n</table>",
                        providers: [FilterPipe],
                        styles: ["@import url(https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css);#table tr{display:flex;flex-direction:row;flex-wrap:wrap;flex-basis:100%;border:.5px solid rgba(3,3,3,.2)}#table td,#table th{flex:1 1 80px;border:1px solid #ddd;padding:1px;position:relative;line-height:auto!important}#table tr:nth-child(even){background-color:#f2f2f2}#table tr:hover{background-color:#ddd}#table th{padding-top:1px;padding-bottom:1px;text-align:left;background-color:rgba(89,151,151,.965);color:#070303}.pointer{cursor:pointer}.inputcss{position:absolute;top:0;background-color:#e8eeeef6;height:100%;width:100%;padding:1px;display:flex;flex:1 0 90%;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.tdcss{position:relative;line-height:auto!important}.number{text-align:right;padding:0 1px}.icon{background:url(../cross-min.png);height:10px;width:20px}.button{background-color:#b10707;border:none;color:#fff;padding:4px 8px;text-align:center;text-decoration:none;display:inline-block;font-size:8px;margin:4px 2px;cursor:pointer;left:20px;position:relative}.buttonadd{cursor:pointer}.positive{background-color:green}.negative{background-color:#ff0;color:red}"]
                    }] }
        ];
        /** @nocollapse */
        GridComponent.ctorParameters = function () {
            return [
                { type: GridService }
            ];
        };
        return GridComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var OrderPipe = /** @class */ (function () {
        function OrderPipe() {
        }
        /**
         * @param {?} value
         * @param {?=} prop
         * @param {?=} direcion
         * @param {?=} sortmode
         * @return {?}
         */
        OrderPipe.prototype.transform = /**
         * @param {?} value
         * @param {?=} prop
         * @param {?=} direcion
         * @param {?=} sortmode
         * @return {?}
         */
            function (value, prop, direcion, sortmode) {
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
                    var _direction_1 = direcion === false ? -1 : 1;
                    /** @type {?} */
                    var _isArr = Array.isArray(value);
                    /** @type {?} */
                    var _type = typeof value[0];
                    /** @type {?} */
                    var _flag_1 = _isArr && _type === 'object' ? true : _isArr && _type !== 'object' ? false : true;
                    value.sort(( /**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */function (a, b) {
                        a = _flag_1 ? a[prop] : a;
                        b = _flag_1 ? b[prop] : b;
                        if (typeof a === 'string') {
                            return a > b ? -1 * _direction_1 : 1 * _direction_1;
                        }
                        else if (typeof a === 'number') {
                            return a - b > 0 ? -1 * _direction_1 : 1 * _direction_1;
                        }
                    }));
                }
                return value;
            };
        OrderPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'orderBy',
                        pure: false
                    },] }
        ];
        return OrderPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridModule = /** @class */ (function () {
        function GridModule() {
        }
        GridModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [GridComponent, FilterPipe, OrderPipe],
                        imports: [common.CommonModule, forms.FormsModule
                        ],
                        exports: [GridComponent]
                    },] }
        ];
        return GridModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Column = /** @class */ (function () {
        function Column() {
        }
        return Column;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.GridModule = GridModule;
    exports.GridComponent = GridComponent;
    exports.Column = Column;
    exports.GridService = GridService;
    exports.ɵa = FilterPipe;
    exports.ɵb = OrderPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=grid.umd.js.map