/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
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
        datas = datas[colIdx] ? datas.filter((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            return p[fldname].toLocaleLowerCase().indexOf(search) !== -1;
        }))
            : datas;
        return datas;
    };
    FilterPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'GridFilter'
                },] }
    ];
    return FilterPipe;
}());
export { FilterPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ncmlkLyIsInNvdXJjZXMiOlsibGliL2dyaWQvZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBSXBEO0lBQUE7SUFtQkUsQ0FBQzs7Ozs7Ozs7SUFkQyw4QkFBUzs7Ozs7OztJQUFULFVBQVUsS0FBWSxFQUFFLE9BQWdCLEVBQUUsTUFBZSxFQUFFLE1BQWU7UUFFeEUsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFFMUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFFO1FBRXJDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1FBQ2xDLFVBQUMsQ0FBTTtZQUNMLE9BQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUFyRCxDQUFxRCxFQUFDO1lBQ3hELENBQUMsQ0FBQyxLQUFLLENBQUE7UUFDVCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQWxCSixJQUFJLFNBQUM7b0JBQ0YsSUFBSSxFQUFFLFlBQVk7aUJBQ25COztJQWlCRCxpQkFBQztDQUFBLEFBbkJILElBbUJHO1NBaEJZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi9jb2x1bW4nO1xuXG5AUGlwZSh7XG4gICAgbmFtZTogJ0dyaWRGaWx0ZXInXG4gIH0pXG4gIGV4cG9ydCBjbGFzcyBGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIFxuICAgIHRyYW5zZm9ybShkYXRhczogYW55W10sIGZsZG5hbWU/OiBzdHJpbmcsIGNvbElkeD86IG51bWJlciwgc2VhcmNoPzogc3RyaW5nKTogYW55W10ge1xuICBcbiAgICAgIGlmICghZGF0YXMpIHJldHVybiBbXTtcbiAgICAgIGlmICghZmxkbmFtZSkgcmV0dXJuIGRhdGFzO1xuICAgICAgaWYgKCFzZWFyY2gpIHJldHVybiBkYXRhcztcbiAgICAgIFxuICAgICAgc2VhcmNoID0gc2VhcmNoLnRvTG9jYWxlTG93ZXJDYXNlKCkgO1xuICAgICBcbiAgICAgIGRhdGFzID0gZGF0YXNbY29sSWR4XSA/IGRhdGFzLmZpbHRlcihcbiAgICAgICAgKHA6IGFueSkgPT5cbiAgICAgICAgICBwW2ZsZG5hbWVdLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gpICE9PSAtMSlcbiAgICAgICAgOiBkYXRhc1xuICAgICAgcmV0dXJuIGRhdGFzO1xuICAgIH1cbiAgfSJdfQ==