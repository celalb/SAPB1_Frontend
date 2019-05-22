import { Photo } from './photo';
export class Product {
  ProductId: string;
  ProductName: string;
  Category: string;
  UnitPrice: number;
  photos: Photo[];
}
