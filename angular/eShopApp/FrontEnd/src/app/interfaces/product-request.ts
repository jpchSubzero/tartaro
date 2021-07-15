export interface ProductRequest {
    id: number;
    name:              string;
    description:       string;
    modelName:         string;
    isFeatured:        boolean;
    modelNumber:       string;
    productImage:      string;
    unitCost:          number;
    currentPrice:      number;
    unitInStock:       number;
    categoryId:          number;
}

