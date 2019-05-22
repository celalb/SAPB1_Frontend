/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class GridService {
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
/** @nocollapse */ GridService.ngInjectableDef = i0.defineInjectable({ factory: function GridService_Factory() { return new GridService(); }, token: GridService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9ncmlkL2dyaWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLFdBQVc7SUFNdEI7UUFETyxVQUFLLEdBQVUsRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Ozs7Ozs7SUFDakIsVUFBVSxDQUFDLEtBQWEsRUFBRSxHQUFjLEVBQUMsTUFBZ0IsRUFBRSxNQUFnQjtRQUN6RSxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFDO1lBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Ozs7SUFDRCxPQUFPLENBQUMsSUFBWTs7WUFDZCxJQUFJLEdBQUcsRUFBRTs7WUFDVCxHQUFHLEdBQUcsRUFBRTs7WUFDUixNQUFNLEdBQVUsRUFBRTtRQUN0QixLQUFLLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFO1lBRWhDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7YUFDekM7WUFDRCxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ1YsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNkLEdBQUcsR0FBRyxFQUFFLENBQUM7YUFDVjtZQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7WUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFBO1NBQzdCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFFaEIsQ0FBQzs7OztJQUNELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUNELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUNELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQUNELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQUNELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7O1lBdkRBLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7OztJQUVDLDhCQUFrQjs7SUFDbEIsMkJBQVU7O0lBQ1YsNkJBQWdCOztJQUNoQiw2QkFBZ0I7O0lBQ2hCLDRCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4vY29sdW1uJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRTZXJ2aWNlIHtcbiAgY29sdW1uczogQ29sdW1uW107XG4gIGRhdGE6IGFueTtcbiAgYWRkb3B0OiBib29sZWFuO1xuICBkZWxvcHQ6IGJvb2xlYW47XG4gIHB1YmxpYyBkYXRhczogYW55W10gPSBbXTtcbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgT25Mb2FkRGF0YShkYXRhcz86IGFueVtdLCBjb2w/OiBDb2x1bW5bXSxhZGRvcHQ/OiBib29sZWFuLCBkZWxvcHQ/OiBib29sZWFuKSB7XG4gICAgdGhpcy5jb2x1bW5zID0gY29sO1xuICAgIHRoaXMuYWRkb3B0ID0gYWRkb3B0O1xuICAgIHRoaXMuZGVsb3B0ID0gZGVsb3B0O1xuICAgIGlmICghZGF0YXMgfHwgZGF0YXMubGVuZ3RoID09PSAwKXtcbiAgICAgIHRoaXMuZGF0YXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgIHRoaXMuZGF0YXMgPSB0aGlzLmFkZFJvd3MoNSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF0YXMgPSBkYXRhcztcbiAgICB9XG4gIH1cbiAgYWRkUm93cyhscm93OiBOdW1iZXIpOiBhbnlbXSB7XG4gICAgbGV0IHZyYmwgPSBcIlwiO1xuICAgIGxldCB2cmcgPSBcIlwiO1xuICAgIGxldCB4ZGF0YXM6IGFueVtdID0gW107XG4gICAgZm9yIChsZXQgbHggPSAwOyBseCA8IGxyb3c7IGx4KyspIHtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdnJibCArPSB0aGlzLmNvbHVtbnNbaV0uY29kZSArIFwiOlwiICsgJyc7XG4gICAgICB9XG4gICAgICB2cmcgPSAnLCc7XG4gICAgICBpZiAobHggPT0gbHJvdykge1xuICAgICAgICB2cmcgPSAnJztcbiAgICAgIH1cblxuICAgICAgdGhpcy5kYXRhID0gXCJ7XCIgKyB2cmJsICsgXCJ9XCI7XG4gICAgICB4ZGF0YXMucHVzaCh0aGlzLmRhdGEgKyB2cmcpXG4gICAgfVxuICAgIHJldHVybiB4ZGF0YXM7XG5cbiAgfVxuICBHZXRDb2x1bW5zKCk6IENvbHVtbltdIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zO1xuICB9XG4gIEdldERhdGEoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLmRhdGFzO1xuICB9XG4gIEdldERlbG9wdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kZWxvcHQ7XG4gIH1cbiAgR2V0QWRkb3B0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFkZG9wdDtcbiAgfVxuICBnZXRBY3RpdmVkYXRhKCk6YW55e1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG59XG5cbn1cbiJdfQ==