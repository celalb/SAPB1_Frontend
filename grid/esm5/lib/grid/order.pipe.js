/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
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
            value.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
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
        { type: Pipe, args: [{
                    name: 'orderBy',
                    pure: false
                },] }
    ];
    return OrderPipe;
}());
export { OrderPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dyaWQvIiwic291cmNlcyI6WyJsaWIvZ3JpZC9vcmRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUlwRDtJQUFBO0lBMkNBLENBQUM7Ozs7Ozs7O0lBcENDLDZCQUFTOzs7Ozs7O0lBQVQsVUFBVSxLQUFnQixFQUFFLElBQWEsRUFBRSxRQUFTLEVBQUMsUUFBaUI7UUFDcEUsSUFBSSxDQUFDLFFBQVEsRUFBQztZQUNaLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELElBQUssQ0FBQyxJQUFJLEVBQUU7WUFDVixPQUFPLEtBQUssQ0FBQTtTQUNiO1FBQ0QsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztnQkFFZCxZQUFVLEdBQUcsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUM1QyxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7O2dCQUM3QixLQUFLLEdBQUcsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDOztnQkFDdkIsT0FBSyxHQUFHLE1BQU0sSUFBSSxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFFM0YsS0FBSyxDQUFDLElBQUk7Ozs7O1lBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztnQkFDZCxDQUFDLEdBQUcsT0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxHQUFHLE9BQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXhCLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFO29CQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVUsQ0FBQztpQkFDakQ7cUJBQU0sSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUU7b0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVUsQ0FBQztpQkFDckQ7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUVKO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFHZixDQUFDOztnQkF6Q0YsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxTQUFTO29CQUNmLElBQUksRUFBRSxLQUFLO2lCQUNaOztJQXdDRCxnQkFBQztDQUFBLEFBM0NELElBMkNDO1NBdkNZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4vY29sdW1uJztcblxuQFBpcGUoe1xuICBuYW1lOiAnb3JkZXJCeScsXG4gIHB1cmU6IGZhbHNlXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG5cbiAgdHJhbnNmb3JtKHZhbHVlOkFycmF5PGFueT4sIHByb3A/OiBzdHJpbmcsIGRpcmVjaW9uPyxzb3J0bW9kZT86Ym9vbGVhbik6IGFueSB7IFxuICAgIGlmICghc29ydG1vZGUpe1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAoIXZhbHVlKSB7IFxuICAgICAgcmV0dXJuIFtdOyAgXG4gICAgfSAgXG4gICAgaWYgKCAhcHJvcCkgeyAgXG4gICAgICByZXR1cm4gdmFsdWUgIFxuICAgIH0gIFxuICAgIHNvcnRtb2RlID0gZmFsc2U7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHsgIFxuICAgICBcbiAgICAgIGNvbnN0IF9kaXJlY3Rpb24gPSBkaXJlY2lvbiA9PT0gZmFsc2UgPyAtMSA6IDEsICAgICAgXG4gICAgICAgIF9pc0FyciA9IEFycmF5LmlzQXJyYXkodmFsdWUpLCAgXG4gICAgICAgIF90eXBlID0gdHlwZW9mIHZhbHVlWzBdLCAgXG4gICAgICAgIF9mbGFnID0gX2lzQXJyICYmIF90eXBlID09PSAnb2JqZWN0JyA/IHRydWUgOiBfaXNBcnIgJiYgX3R5cGUgIT09ICdvYmplY3QnID8gZmFsc2UgOiB0cnVlOyAgXG4gICAgIFxuICAgICAgdmFsdWUuc29ydCgoYSwgYikgPT4geyAgXG4gICAgICAgIGEgPSBfZmxhZyA/IGFbcHJvcF0gOiBhOyAgXG4gICAgICAgIGIgPSBfZmxhZyA/IGJbcHJvcF0gOiBiOyAgXG4gICAgIFxuICAgICAgICBpZiAodHlwZW9mIGEgPT09ICdzdHJpbmcnKSB7ICBcbiAgICAgICAgICByZXR1cm4gYSA+IGIgPyAtMSAqIF9kaXJlY3Rpb24gOiAxICogX2RpcmVjdGlvbjsgIFxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhID09PSAnbnVtYmVyJykgeyAgXG4gICAgICAgICAgcmV0dXJuIGEgLSBiID4gMCA/IC0xICogX2RpcmVjdGlvbiA6IDEgKiBfZGlyZWN0aW9uOyAgXG4gICAgICAgIH0gIFxuICAgICAgfSk7ICBcbiAgICAgIFxuICAgIH0gIFxuICAgIFxuICAgIHJldHVybiB2YWx1ZTsgXG4gICAgXG5cbiAgfVxuXG59XG4iXX0=