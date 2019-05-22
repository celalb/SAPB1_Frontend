import { Salesitem } from './salesitem';
export class Salesorder {
    CustomerId :string;
    CustomerName:string;
    ContctId: string;
    Refno: string;
    Ordno: string;
    statu: string;
    postdate: Date;
    dlvdate: Date;
    docdate: Date;
    currid: string;
    lines : Salesitem[]
}
