import { PipeTransform } from "@angular/core";
export declare class FilterPipe implements PipeTransform {
    transform(datas: any[], fldname?: string, colIdx?: number, search?: string): any[];
}
