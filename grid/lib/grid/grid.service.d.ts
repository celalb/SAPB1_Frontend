import { Column } from './column';
export declare class GridService {
    columns: Column[];
    data: any;
    addopt: boolean;
    delopt: boolean;
    datas: any[];
    constructor();
    OnLoadData(datas?: any[], col?: Column[], addopt?: boolean, delopt?: boolean): void;
    addRows(lrow: Number): any[];
    GetColumns(): Column[];
    GetData(): any[];
    GetDelopt(): boolean;
    GetAddopt(): boolean;
    getActivedata(): any;
}
