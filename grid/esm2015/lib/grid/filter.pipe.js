/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
export class FilterPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ncmlkLyIsInNvdXJjZXMiOlsibGliL2dyaWQvZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBT2xELE1BQU0sT0FBTyxVQUFVOzs7Ozs7OztJQUVyQixTQUFTLENBQUMsS0FBWSxFQUFFLE9BQWdCLEVBQUUsTUFBZSxFQUFFLE1BQWU7UUFFeEUsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFFMUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFFO1FBRXJDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1FBQ2xDLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FDVCxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUM7WUFDeEQsQ0FBQyxDQUFDLEtBQUssQ0FBQTtRQUNULE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBbEJKLElBQUksU0FBQztnQkFDRixJQUFJLEVBQUUsWUFBWTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuL2NvbHVtbic7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnR3JpZEZpbHRlcidcbiAgfSlcbiAgZXhwb3J0IGNsYXNzIEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgXG4gICAgdHJhbnNmb3JtKGRhdGFzOiBhbnlbXSwgZmxkbmFtZT86IHN0cmluZywgY29sSWR4PzogbnVtYmVyLCBzZWFyY2g/OiBzdHJpbmcpOiBhbnlbXSB7XG4gIFxuICAgICAgaWYgKCFkYXRhcykgcmV0dXJuIFtdO1xuICAgICAgaWYgKCFmbGRuYW1lKSByZXR1cm4gZGF0YXM7XG4gICAgICBpZiAoIXNlYXJjaCkgcmV0dXJuIGRhdGFzO1xuICAgICAgXG4gICAgICBzZWFyY2ggPSBzZWFyY2gudG9Mb2NhbGVMb3dlckNhc2UoKSA7XG4gICAgIFxuICAgICAgZGF0YXMgPSBkYXRhc1tjb2xJZHhdID8gZGF0YXMuZmlsdGVyKFxuICAgICAgICAocDogYW55KSA9PlxuICAgICAgICAgIHBbZmxkbmFtZV0udG9Mb2NhbGVMb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaCkgIT09IC0xKVxuICAgICAgICA6IGRhdGFzXG4gICAgICByZXR1cm4gZGF0YXM7XG4gICAgfVxuICB9Il19