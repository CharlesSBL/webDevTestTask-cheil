import { createContext, useMemo, useState } from 'react';
import Counter from './components/Counter';
import Filter from './components/filter/Filter';
import Footer from './components/Footer';
import Header from './components/Header';
import Listing from './components/listing/Listing';
import type ProductDataTypes from './types/ProductDataTypes';
import type { IProductQuantity, IProductStateType } from './interfaces/interfaces';
import { ProductContext, QuantityContext } from './context/context';


export default function ProductListing() {
    const [products, setProducts] = useState<ProductDataTypes[]>([]);
    const [productQuantity, setProductQuantity] = useState<number>(0);

    // The 'productState' object passed as the value prop to the Context provider changes every render. To fix this consider wrapping it in a useMemo hook.sonarqube(typescript:S6481)
    const productState = useMemo<IProductStateType>(() => ({ products, setProducts }), [products]);
    const quantityState = useMemo<IProductQuantity>(() => ({ productQuantity, setProductQuantity }), [productQuantity]);

    return (
        <ProductContext value={productState}>
            <QuantityContext value={quantityState}>
                <Header />
                <Filter />
                <Counter />
                <Listing />
                <Footer />
            </QuantityContext>
        </ProductContext>
    )
}