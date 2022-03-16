import { useEffect, useState } from 'react'
import { environment } from '../environments/environment';
import { IProductResponse } from '../interfaces/products/product.response.interface';
import { useApi } from './useApi';
import { getFromEnvFile, stringFormat } from '../services/UtilitiesService';
import { useDispatch } from 'react-redux';
import { getProductsAction } from '../actions/get.products.action';
import { errorRegisterAction } from '../actions/error.register.action';
import { useNavigate } from 'react-router-dom';
import { TypesRoutes } from '../types/types.routes';

export const useProduct = () => {
  const [product, setProduct] = useState<IProductResponse>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { get } = useApi();
  const { 
    getByAdvanceFiltersCodes,
		baseUrlKey,
		channelCodeKey,
		insuranceTypeCodeKey,
		insuranceCarrierCodeKey,
		contractTypeCodeKey,
		timeout
   } = environment.product;
	const baseUrl = getFromEnvFile(baseUrlKey);
  const channelCode = getFromEnvFile(channelCodeKey);
  const insuranceTypeCode = getFromEnvFile(insuranceTypeCodeKey);
  const insuranceCarrierCode = getFromEnvFile(insuranceCarrierCodeKey);
  const contractTypeCode = getFromEnvFile(contractTypeCodeKey);
  const url = stringFormat(`${baseUrl}${getByAdvanceFiltersCodes}`, [channelCode,insuranceTypeCode,insuranceCarrierCode,contractTypeCode]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    setLoading(true);
    getProducts();
  }, []);

  const getProducts = async () => {
    await getProductsAsync();
  }

  const getProductsAsync = async () => {
    try {
      setLoading(true);
      const products = await get<IProductResponse>(url, timeout);
      setLoading(false);
      resolveResponse(products);
    } catch (error) {
      navigate(TypesRoutes.ROUTE_ERROR, { replace: true, state: error })
      console.error(error);
    }
  }

  const resolveResponse = (response:IProductResponse) => {
    if (response?.result) {
      setProduct(response);
      dispatch(getProductsAction(response.result.$values));
    } 
    if (response?.error) {
      dispatch(errorRegisterAction(response.error));
      setLoading(false);
      navigate(TypesRoutes.ROUTE_ERROR);
    } 
  }

  return { 
    product,
    loading
  };
}

