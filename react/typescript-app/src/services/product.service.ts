import api from '../api/axios';
import { ProductResponse } from '../product-response.interfaces';

export const getAllProducts = async ():Promise<ProductResponse[]> => {
    const response = await api.get<ProductResponse[]>('products');
    // console.log(response.data);
    return response.data;
}
