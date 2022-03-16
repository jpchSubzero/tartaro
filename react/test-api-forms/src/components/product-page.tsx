import { useProduct } from '../hooks/useProduct';
import { IProductFeature } from '../interfaces/products/productFeature.interface';
import { ProductFeatures } from './product.features';

export const ProductPage = () => {
    const { product, loading} = useProduct();
    const productData = product?.result?.$values[0];
    const coverages = productData?.coverages.$values;
    const exclusions = productData?.exclusions.$values;
    const assistances = productData?.assistances.$values;

    const renderComponent = () => { 
        return (
            <>
                <ProductFeatures features={coverages as IProductFeature[]} title="Coberturas" version="0" />
                <hr />
                <ProductFeatures features={exclusions as IProductFeature[]} title="Exclusiones" version="0" />
                <hr />
                <ProductFeatures features={assistances as IProductFeature[]} title="Asistencias" version="0" />
            </>
        );
    }
    
    const renderLoading = () => { 
        return (
            <>
                <h1>Cargando...</h1>
            </>
        );
    }    

    if (loading) {
        return renderLoading();    
    } else {
    return renderComponent();        
    }
}
