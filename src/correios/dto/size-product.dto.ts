import { ProductEntity } from "src/product/entities/product.entity";

export class SizeProductDTO {
    weight: number;
    lenght: number;
    height: number;
    width: number;
    diameter: number;
    productValue: number;

    constructor(product: ProductEntity) {
        this.weight = 2;
        this.lenght = 30;
        this.height = 30;
        this.width = 30;
        this.diameter = 30;
        this.productValue = product.price;
    }
}