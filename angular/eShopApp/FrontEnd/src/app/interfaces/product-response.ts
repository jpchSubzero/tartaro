import { CategoryResponse } from './category-response';
export interface ProductResponse {
    id:                number;
    name:              string;
    description:       string;
    modelName:         string;
    isFeatured:        boolean;
    modelNumber:       string;
    productImage:      string;
    productImageLarge: string;
    productImageThumb: string;
    unitCost:          number;
    currentPrice:      number;
    unitInStock:       number;
    category:          CategoryResponse;
}
