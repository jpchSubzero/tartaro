import React from 'react'
import { IProductFeature } from '../interfaces/products/productFeature.interface'
import { optionRemoveRootParrNode, parseJsonToHtml } from '../utils/JsonConverter';

interface Props {
    features:IProductFeature[];
    title?:string;
    version?:string;
}

const styles = {
    "padding":"10px", 
    "backgroundColor":"#FFFFCC", 
    "margin":"10px", 
    "borderColor":"red", 
    "borderWidth":"2px", 
    "borderStyle": "solid"
};

export const ProductFeatures = ({features, title="", version="0"}:Props) => {
    return (
        <>
        {title && <h4>{title}</h4>}
        {
            features?.map(({code, description, name}, index) => {
                return (
                    <div 
                        key={index} 
                        style={styles}
                    >
                        {code} - <strong>{name}</strong> - {parseJsonToHtml(JSON.stringify(JSON.parse(description)[parseInt(version)]), optionRemoveRootParrNode)}
                    </div>
                );
            })
        }
        </>
    )
}

