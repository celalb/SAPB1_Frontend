/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class OrderPipe {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dyaWQvIiwic291cmNlcyI6WyJsaWIvZ3JpZC9vcmRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQVFwRCxNQUFNLE9BQU8sU0FBUzs7Ozs7Ozs7SUFHcEIsU0FBUyxDQUFDLEtBQWdCLEVBQUUsSUFBYSxFQUFFLFFBQVMsRUFBQyxRQUFpQjtRQUNwRSxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ1osT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsSUFBSyxDQUFDLElBQUksRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFBO1NBQ2I7UUFDRCxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2tCQUVkLFVBQVUsR0FBRyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7a0JBQzVDLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQzs7a0JBQzdCLEtBQUssR0FBRyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUM7O2tCQUN2QixLQUFLLEdBQUcsTUFBTSxJQUFJLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUUzRixLQUFLLENBQUMsSUFBSTs7Ozs7WUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbEIsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV4QixJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtvQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7aUJBQ2pEO3FCQUFNLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFO29CQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7aUJBQ3JEO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FFSjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBR2YsQ0FBQzs7O1lBekNGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsS0FBSzthQUNaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuL2NvbHVtbic7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ29yZGVyQnknLFxuICBwdXJlOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBPcmRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXG4gIHRyYW5zZm9ybSh2YWx1ZTpBcnJheTxhbnk+LCBwcm9wPzogc3RyaW5nLCBkaXJlY2lvbj8sc29ydG1vZGU/OmJvb2xlYW4pOiBhbnkgeyBcbiAgICBpZiAoIXNvcnRtb2RlKXtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKCF2YWx1ZSkgeyBcbiAgICAgIHJldHVybiBbXTsgIFxuICAgIH0gIFxuICAgIGlmICggIXByb3ApIHsgIFxuICAgICAgcmV0dXJuIHZhbHVlICBcbiAgICB9ICBcbiAgICBzb3J0bW9kZSA9IGZhbHNlO1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7ICBcbiAgICAgXG4gICAgICBjb25zdCBfZGlyZWN0aW9uID0gZGlyZWNpb24gPT09IGZhbHNlID8gLTEgOiAxLCAgICAgIFxuICAgICAgICBfaXNBcnIgPSBBcnJheS5pc0FycmF5KHZhbHVlKSwgIFxuICAgICAgICBfdHlwZSA9IHR5cGVvZiB2YWx1ZVswXSwgIFxuICAgICAgICBfZmxhZyA9IF9pc0FyciAmJiBfdHlwZSA9PT0gJ29iamVjdCcgPyB0cnVlIDogX2lzQXJyICYmIF90eXBlICE9PSAnb2JqZWN0JyA/IGZhbHNlIDogdHJ1ZTsgIFxuICAgICBcbiAgICAgIHZhbHVlLnNvcnQoKGEsIGIpID0+IHsgIFxuICAgICAgICBhID0gX2ZsYWcgPyBhW3Byb3BdIDogYTsgIFxuICAgICAgICBiID0gX2ZsYWcgPyBiW3Byb3BdIDogYjsgIFxuICAgICBcbiAgICAgICAgaWYgKHR5cGVvZiBhID09PSAnc3RyaW5nJykgeyAgXG4gICAgICAgICAgcmV0dXJuIGEgPiBiID8gLTEgKiBfZGlyZWN0aW9uIDogMSAqIF9kaXJlY3Rpb247ICBcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYSA9PT0gJ251bWJlcicpIHsgIFxuICAgICAgICAgIHJldHVybiBhIC0gYiA+IDAgPyAtMSAqIF9kaXJlY3Rpb24gOiAxICogX2RpcmVjdGlvbjsgIFxuICAgICAgICB9ICBcbiAgICAgIH0pOyAgXG4gICAgICBcbiAgICB9ICBcbiAgICBcbiAgICByZXR1cm4gdmFsdWU7IFxuICAgIFxuXG4gIH1cblxufVxuIl19