/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GridService.ctorParameters = function () { return []; };
    /** @nocollapse */ GridService.ngInjectableDef = i0.defineInjectable({ factory: function GridService_Factory() { return new GridService(); }, token: GridService, providedIn: "root" });
    return GridService;
}());
export { GridService };
if (false) {
    /** @type {?} */
    GridService.prototype.columns;
    /** @type {?} */
    GridService.prototype.data;
    /** @type {?} */
    GridService.prototype.addopt;
    /** @type {?} */
    GridService.prototype.delopt;
    /** @type {?} */
    GridService.prototype.datas;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9ncmlkL2dyaWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0M7SUFTRTtRQURPLFVBQUssR0FBVSxFQUFFLENBQUM7SUFDVCxDQUFDOzs7Ozs7OztJQUNqQixnQ0FBVTs7Ozs7OztJQUFWLFVBQVcsS0FBYSxFQUFFLEdBQWMsRUFBQyxNQUFnQixFQUFFLE1BQWdCO1FBQ3pFLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUM7WUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7OztJQUNELDZCQUFPOzs7O0lBQVAsVUFBUSxJQUFZOztZQUNkLElBQUksR0FBRyxFQUFFOztZQUNULEdBQUcsR0FBRyxFQUFFOztZQUNSLE1BQU0sR0FBVSxFQUFFO1FBQ3RCLEtBQUssSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFFaEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQzthQUN6QztZQUNELEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDVixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7Z0JBQ2QsR0FBRyxHQUFHLEVBQUUsQ0FBQzthQUNWO1lBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUE7U0FDN0I7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUVoQixDQUFDOzs7O0lBQ0QsZ0NBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFDRCw2QkFBTzs7O0lBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUNELCtCQUFTOzs7SUFBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7O0lBQ0QsK0JBQVM7OztJQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFDRCxtQ0FBYTs7O0lBQWI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7Z0JBdkRBLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3NCQUxEO0NBNERDLEFBekRELElBeURDO1NBdERZLFdBQVc7OztJQUN0Qiw4QkFBa0I7O0lBQ2xCLDJCQUFVOztJQUNWLDZCQUFnQjs7SUFDaEIsNkJBQWdCOztJQUNoQiw0QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuL2NvbHVtbic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHcmlkU2VydmljZSB7XG4gIGNvbHVtbnM6IENvbHVtbltdO1xuICBkYXRhOiBhbnk7XG4gIGFkZG9wdDogYm9vbGVhbjtcbiAgZGVsb3B0OiBib29sZWFuO1xuICBwdWJsaWMgZGF0YXM6IGFueVtdID0gW107XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIE9uTG9hZERhdGEoZGF0YXM/OiBhbnlbXSwgY29sPzogQ29sdW1uW10sYWRkb3B0PzogYm9vbGVhbiwgZGVsb3B0PzogYm9vbGVhbikge1xuICAgIHRoaXMuY29sdW1ucyA9IGNvbDtcbiAgICB0aGlzLmFkZG9wdCA9IGFkZG9wdDtcbiAgICB0aGlzLmRlbG9wdCA9IGRlbG9wdDtcbiAgICBpZiAoIWRhdGFzIHx8IGRhdGFzLmxlbmd0aCA9PT0gMCl7XG4gICAgICB0aGlzLmRhdGFzID0gbmV3IEFycmF5KCk7XG4gICAgICB0aGlzLmRhdGFzID0gdGhpcy5hZGRSb3dzKDUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGFzID0gZGF0YXM7XG4gICAgfVxuICB9XG4gIGFkZFJvd3MobHJvdzogTnVtYmVyKTogYW55W10ge1xuICAgIGxldCB2cmJsID0gXCJcIjtcbiAgICBsZXQgdnJnID0gXCJcIjtcbiAgICBsZXQgeGRhdGFzOiBhbnlbXSA9IFtdO1xuICAgIGZvciAobGV0IGx4ID0gMDsgbHggPCBscm93OyBseCsrKSB7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZyYmwgKz0gdGhpcy5jb2x1bW5zW2ldLmNvZGUgKyBcIjpcIiArICcnO1xuICAgICAgfVxuICAgICAgdnJnID0gJywnO1xuICAgICAgaWYgKGx4ID09IGxyb3cpIHtcbiAgICAgICAgdnJnID0gJyc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGF0YSA9IFwie1wiICsgdnJibCArIFwifVwiO1xuICAgICAgeGRhdGFzLnB1c2godGhpcy5kYXRhICsgdnJnKVxuICAgIH1cbiAgICByZXR1cm4geGRhdGFzO1xuXG4gIH1cbiAgR2V0Q29sdW1ucygpOiBDb2x1bW5bXSB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucztcbiAgfVxuICBHZXREYXRhKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhcztcbiAgfVxuICBHZXREZWxvcHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGVsb3B0O1xuICB9XG4gIEdldEFkZG9wdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hZGRvcHQ7XG4gIH1cbiAgZ2V0QWN0aXZlZGF0YSgpOmFueXtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xufVxuXG59XG4iXX0=