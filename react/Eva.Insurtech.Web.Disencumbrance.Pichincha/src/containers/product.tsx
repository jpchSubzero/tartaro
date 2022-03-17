import { ProductService } from '../services/productService';
import { IProductFeature } from '../interfaces/products/productFeature.interface';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IRootState from '../interfaces/store/store.root.state.interface';
import { ProductFeatures } from './product.features';
import { getProductsAction } from '../actions/get.products.action';
import { IProductResponse } from '../interfaces/products/product.response.interface';
import { sortArrayBy } from "../utils";

function Product() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    const products = useSelector((state:IRootState) => state.products ); 

    async function fetchProductData() {
        setLoading(true);
        const response:IProductResponse = await ProductService.getProductByConfiguredFiltersCodeAsync();
        if (response) {
            dispatch(getProductsAction(response.result?.$values));
        }
        setLoading(false);
    }

    useEffect(() => {
        if (!products[0].$id) {
            fetchProductData(); 
        } else {
            setLoading(false);
        }    
    }, [products]); // eslint-disable-line react-hooks/exhaustive-deps

    function generateDinamicItems(limitItemsToShow:number, listServiceItems:any[], listLocalItems:any[], variant:string
    ) {
        let arrayItems = [];
        const sortListServiceItems = listServiceItems.slice();
        if (limitItemsToShow > sortListServiceItems.length) {
            limitItemsToShow = sortListServiceItems.length;
            // console.log(`Se intentan mostrar mas elementos (${variant}) que los configurados en local`);
        }

        sortArrayBy(sortListServiceItems, "priority");

        for (let index = 0; index < sortListServiceItems.length; index++) {
            if (index >= limitItemsToShow) {
                break;
            }

            if (sortListServiceItems[index].isActive) {
                arrayItems.push(sortListServiceItems[index])
            }
        }
        return arrayItems;
    }    

    const renderComponent = () => { 
        const productData = products[0];
        const coverages = productData?.coverages.$values;
        const exclusions = productData?.exclusions.$values;
        const assistances = productData?.assistances.$values;

        return (
            <>
                <ProductFeatures features={generateDinamicItems(5, coverages, [], "") as IProductFeature[]} title="Coberturas" version="0" />
                <hr />
                <ProductFeatures features={generateDinamicItems(5, exclusions, [], "") as IProductFeature[]} title="Exclusiones" version="0" />
                <hr />
                <ProductFeatures features={generateDinamicItems(5, assistances, [], "") as IProductFeature[]} title="Asistencias" version="0" />
                <hr />
            </>
        );
    }
    
    const renderLoading = () => { 
        return (
            <>
                <h1>Cargando productos...</h1>
            </>
        );
    }    

    if (loading) {
        return renderLoading();    
    } else {
        return renderComponent();        
    }
}

export default Product;
